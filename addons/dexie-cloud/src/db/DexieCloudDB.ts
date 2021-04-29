import Dexie, { Table } from 'dexie';
import { GuardedJob } from './entities/GuardedJob';
import { UserLogin } from './entities/UserLogin';
import { PersistedSyncState } from './entities/PersistedSyncState';
import { Realm } from './entities/Realm';
import { Member } from './entities/Member';
import { Role } from './entities/Role';
import { UNAUTHORIZED_USER } from '../authentication/UNAUTHORIZED_USER';
import { DexieCloudOptions } from '../DexieCloudOptions';
import { BehaviorSubject } from 'rxjs';
import { BaseRevisionMapEntry } from './entities/BaseRevisionMapEntry';
import { DexieCloudSchema } from "dexie-cloud-common";

/*export interface DexieCloudDB extends Dexie {
  table(name: string): Table<any, any>;
  table(name: "$jobs"): Table<GuardedJob, string>;
  table(name: "$logins"): Table<UserLogin, string>;
  table(name: "$syncState"): Table<SyncState, "syncState">;
  //table(name: "$pendingChangesFromServer"): Table<DBOperationsSet, number>;
}
*/

type SyncStateTable = Table<
  PersistedSyncState | DexieCloudSchema | DexieCloudOptions,
  'syncState' | 'options' | 'schema'
>;
export interface DexieCloudDBBase {
  readonly name: Dexie['name'];
  readonly close: Dexie['close'];
  transaction: Dexie['transaction'];
  table: Dexie['table'];
  readonly tables: Dexie['tables'];
  readonly cloud: Dexie['cloud'];
  readonly $jobs: Table<GuardedJob, string>;
  readonly $logins: Table<UserLogin, string>;
  readonly $syncState: SyncStateTable;
  readonly $baseRevs: Table<BaseRevisionMapEntry, [string, number]>;

  readonly realms: Table<Realm, string>;
  readonly members: Table<Member, string>;
  readonly roles: Table<Role, [string, string]>;

  readonly localSyncEvent: BehaviorSubject<any>;
  readonly dx: Dexie;
}

export interface DexieCloudDB extends DexieCloudDBBase {
  getCurrentUser(): Promise<UserLogin>;
  getSchema(): Promise<DexieCloudSchema | undefined>;
  getOptions(): Promise<DexieCloudOptions | undefined>;
  getPersistedSyncState(): Promise<PersistedSyncState | undefined>;
}

const wm = new WeakMap<Dexie, DexieCloudDB>();

export const DEXIE_CLOUD_SCHEMA = {
  realms: '@realmId',
  members: '@id',
  roles: '[realmId+name]',
  $jobs: '',
  $syncState: '',
  $baseRevs: '[tableName+clientRev]',
  $logins: 'claims.sub, lastLogin'
};

export function DexieCloudDB(dx: Dexie): DexieCloudDB {
  let db = wm.get(dx);
  if (!db) {
    const localSyncEvent = new BehaviorSubject({});
    db = {
      get name() {
        return dx.name;
      },
      close() {
        return dx.close();
      },
      transaction: dx.transaction.bind(dx),
      table: dx.table.bind(dx),
      get tables() {
        return dx.tables;
      },
      cloud: dx.cloud,
      get $jobs() {
        return dx.table('$jobs') as Table<GuardedJob, string>;
      },
      get $syncState() {
        return dx.table('$syncState') as SyncStateTable;
      },
      get $baseRevs() {
        return dx.table('$baseRevs') as Table<
          BaseRevisionMapEntry,
          [string, number]
        >;
      },
      get $logins() {
        return dx.table('$logins') as Table<UserLogin, string>;
      },

      get realms() {
        return dx.table('realms') as Table<Realm, string>;
      },
      get members() {
        return dx.table('members') as Table<Member, string>;
      },
      get roles() {
        return dx.table('roles') as Table<Role, [string, string]>;
      },

      localSyncEvent,
      dx
    } as DexieCloudDB;

    const helperMethods: Partial<DexieCloudDB> = {
      getCurrentUser() {
        return db!.$logins
          .toArray()
          .then(
            (logins) => logins.find((l) => l.isLoggedIn) || UNAUTHORIZED_USER
          );
      },
      getPersistedSyncState() {
        return db!.$syncState.get('syncState') as Promise<
          PersistedSyncState | undefined
        >;
      },
      getSchema() {
        return db!.$syncState.get('schema') as Promise<
          DexieCloudSchema | undefined
        >;
      },
      getOptions() {
        return db!.$syncState.get('options') as Promise<
          DexieCloudOptions | undefined
        >;
      }
    };

    Object.assign(db, helperMethods);
    wm.set(dx, db);
  }
  return db;
}
