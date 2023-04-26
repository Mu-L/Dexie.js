(this["webpackJsonpdexie-cloud-todo-app"]=this["webpackJsonpdexie-cloud-todo-app"]||[]).push([[0],{109:function(e,t,n){},110:function(e,t,n){},113:function(e,t,n){},114:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(35),i=n.n(s),o=(n(98),n(15)),a=n(21),d=n(22),l=n(64),u=n(29),j=n(30),b=n(9),h=n(36);var m=n(2),x=n(13),O=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var r=arguments.length,c=new Array(r),s=0;s<r;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).id=void 0,e.realmId=void 0,e.owner=void 0,e.title=void 0,e}return Object(a.a)(n,[{key:"isSharable",value:function(){return this.realmId===Object(h.b)(this.id)}},{key:"isPrivate",value:function(){return"#"===this.id[0]}},{key:"makeSharable",value:function(){var e=Object(x.a)(Object(m.a)().mark((function e(){var t,n,r,c=this;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!this.isPrivate()){e.next=2;break}throw new Error("Private lists cannot be made sharable");case 2:return t=this.realmId,n=Object(h.b)(this.id),r=this.db,e.next=7,this.db.transaction("rw",[r.todoLists,r.todoItems,r.realms],Object(x.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.realms.put({realmId:n,name:c.title,represents:"a to-do list"});case 2:return e.next=4,r.todoLists.update(c.id,{realmId:n});case 4:return e.next=6,r.todoItems.where({realmId:t,todoListId:c.id}).modify({realmId:n});case 6:case"end":return e.stop()}}),e)}))));case 7:return e.abrupt("return",n);case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"unshareWithEveryone",value:function(){var e=Object(x.a)(Object(m.a)().mark((function e(){var t,n,r=this;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.db,n=Object(h.b)(this.id),e.next=4,t.transaction("rw",[t.todoLists,t.todoItems,t.members,t.realms],Object(x.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.todoItems.where({realmId:n,todoListId:r.id}).modify({realmId:t.cloud.currentUserId});case 2:return e.next=4,t.todoLists.update(r.id,{realmId:r.db.cloud.currentUserId});case 4:return e.next=6,t.members.where("realmId").equals(n).delete();case 6:return e.next=8,t.realms.delete(n);case 8:case"end":return e.stop()}}),e)}))));case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"shareWith",value:function(){var e=Object(x.a)(Object(m.a)().mark((function e(t,n,r,c){var s,i=this;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=this.db,e.next=3,s.transaction("rw",[s.members,s.todoLists,s.todoItems,s.realms],Object(x.a)(Object(m.a)().mark((function e(){var s;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(s=i.realmId,i.isSharable()){e.next=5;break}return e.next=4,i.makeSharable();case 4:s=e.sent;case 5:return e.next=7,i.db.members.add({realmId:s,name:t,email:n,invite:r,roles:c});case 7:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e,this)})));return function(t,n,r,c){return e.apply(this,arguments)}}()},{key:"unshareWith",value:function(){var e=Object(x.a)(Object(m.a)().mark((function e(t){var n,r=this;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=this.db,e.next=3,n.transaction("rw",[n.todoLists,n.todoItems,n.members,n.realms],Object(x.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.members.delete(t.id);case 2:return e.next=4,n.members.where({realmId:r.realmId}).filter((function(e){return e.userId!==n.cloud.currentUserId})).count();case 4:if(0!==e.sent){e.next=8;break}return e.next=8,r.unshareWithEveryone();case 8:case"end":return e.stop()}}),e)}))));case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"leave",value:function(){var e=Object(x.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.db,e.next=3,t.members.where({realmId:this.realmId,userId:t.cloud.currentUserId}).delete();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"delete",value:function(){var e=Object(x.a)(Object(m.a)().mark((function e(){var t,n=this;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.db,e.next=3,t.transaction("rw",[t.todoLists,t.todoItems,t.members,t.realms],(function(){t.todoItems.where({todoListId:n.id}).delete(),t.todoLists.delete(n.id);var e=Object(h.b)(n.id);t.members.where({realmId:e}).delete(),t.realms.delete(e)}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(b.Entity),p=new(function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this,"TodoDBCloud2",{addons:[h.a]})).todoLists=void 0,e.todoItems=void 0,e.openCloseStates=void 0,e.version(14).stores({todoLists:"@id",todoItems:"@id, [todoListId+realmId]",openCloseStates:""}),e.todoLists.mapToClass(O),e.on("populate",(function(){e.on("ready",(function(){Object(l.a)(e)}))})),e.cloud.configure({unsyncedTables:["openCloseStates"],databaseUrl:"https://z0lesejpr.dexie.cloud",tryUseServiceWorker:!0,requireAuth:!1}),e}return Object(a.a)(n)}(b.default)),v=n(7),f=n(24),w=n(17),g=n(0);function y(e){var t=e.item,n=Object(o.usePermissions)(p,"todoItems",t);return Object(g.jsxs)("div",{className:"row "+(t.done?"done":""),children:[Object(g.jsx)("div",{className:"narrow",children:Object(g.jsx)("input",{type:"checkbox",disabled:!n.update("done"),checked:!!t.done,onChange:function(e){p.todoItems.update(t.id,{done:e.target.checked})}})}),Object(g.jsx)("div",{className:"todo-item-text",children:t.title}),Object(g.jsx)("div",{className:"todo-item-trash",children:Object(g.jsx)("button",{disabled:!n.delete(),onClick:function(){return p.todoItems.delete(t.id)},title:"Delete item",children:Object(g.jsx)(f.a,{icon:w.g})})})]})}var I=n(16);function k(e){var t=e.todoList,n=Object(r.useState)({title:""}),c=Object(v.a)(n,2),s=c[0],i=c[1];return Object(g.jsxs)("div",{className:"row add-item",children:[Object(g.jsx)("div",{className:"narrow",children:Object(g.jsx)("input",{type:"checkbox",disabled:!0})}),Object(g.jsx)("div",{className:"todo-item-input",children:Object(g.jsx)("input",{type:"text",placeholder:"Add todo item ...",value:s.title,onChange:function(e){return i((function(t){return Object(I.a)(Object(I.a)({},t),{},{title:e.target.value})}))},onKeyUp:function(e){"Enter"===e.key&&(p.todoItems.add({todoListId:t.id,realmId:t.realmId,title:s.title}),i({todoListId:t.id,title:""}))}})})]})}var L={owner:w.i,doer:w.a,manager:w.j,readonly:w.c};function C(e){var t=e.todoList,n=e.member,r=e.access,c=Object(o.useObservable)(p.cloud.roles)||{};return Object(g.jsxs)("select",{disabled:t.owner===n.userId&&n.userId===p.cloud.currentUserId,style:{border:0},value:r,onChange:function(e){return function(e,t,n,r){var c=Object(h.b)(e.id);return p.transaction("rw",p.todoLists,p.members,p.realms,(function(){if("owner"!==n&&"owner"===r){if(!t.userId)throw new Error("Cannot give ownership to user before invite is accepted.");p.members.where({realmId:c,userId:e.owner}).modify({roles:["manager"]}),p.todoLists.update(e,{owner:t.userId}),p.realms.update(c,{owner:t.userId})}"owner"!==r&&p.members.update(t,{permissions:{},roles:[r]}),"owner"===n&&"owner"!==r&&(p.todoLists.update(e,{owner:p.cloud.currentUserId}),p.realms.update(c,{owner:p.cloud.currentUserId}))}))}(t,n,r,e.target.value)},children:[Object(g.jsx)("option",{value:"owner",disabled:!n.userId,children:"Owner"}),Object.entries(c).map((function(e){var t=Object(v.a)(e,2),n=t[0],r=t[1];return Object(g.jsx)("option",{value:n,children:r.displayName},n)})),!c[r]&&"owner"!==r&&Object(g.jsx)("option",{children:"(unknown)"},r)]})}function N(e){var t,n=e.member,r=e.todoList,c=Object(o.usePermissions)(p,"members",n),s=Object(o.useObservable)(p.cloud.roles),i=null===(t=n.roles)||void 0===t?void 0:t[0],a=i?null===s||void 0===s?void 0:s[i]:null,d=n.userId===r.owner?"owner":i||"readonly",l="owner"===d?"Owner":(null===a||void 0===a?void 0:a.displayName)||d;return Object(g.jsxs)("fieldset",{className:"border p-1",children:[Object(g.jsx)(f.a,{style:{margin:"0 4px 0 0",width:22},icon:L[d]||w.e}),c.update("roles")?Object(g.jsx)(C,{todoList:r,member:n,access:d}):l]})}var S=n(77);function U(e){var t=e.todoList,n=Object(r.useState)(""),c=Object(v.a)(n,2),s=c[0],i=c[1],a=Object(r.useState)(""),d=Object(v.a)(a,2),l=d[0],u=d[1],j=Object(o.useLiveQuery)(Object(x.a)(Object(m.a)().mark((function e(){var n;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.members.where({realmId:t.realmId}).toArray();case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)}))),[t.realmId]),b=Object(r.useState)(!1),h=Object(v.a)(b,2),O=h[0],f=h[1],w=Object(o.usePermissions)(t);return Object(g.jsxs)(g.Fragment,{children:[j&&j.length>0&&Object(g.jsxs)("table",{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{children:"Shared with:"}),Object(g.jsx)("th",{children:"Role"})]})}),Object(g.jsx)("tbody",{children:null===j||void 0===j?void 0:j.map((function(e){return Object(g.jsx)(M,{todoList:t,member:e},e.id)}))})]}),Object(g.jsx)("hr",{}),w.add("members")&&Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h4",{children:"Invite someone?"}),Object(g.jsx)("table",{children:Object(g.jsx)("tbody",{children:Object.keys(S.demoUsers).filter((function(e){return e!==p.cloud.currentUserId})).map((function(e){return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:e}),Object(g.jsx)("td",{children:Object(g.jsx)("button",{type:"button",onClick:function(){f(!1),t.shareWith(e,e,!0,["doer"])},children:"Invite"})})]},e)}))})}),O?Object(g.jsxs)("form",{onSubmit:function(e){e.preventDefault(),f(!1),t.shareWith(s,l,!0,["doer"])},children:[Object(g.jsx)("input",{type:"email",placeholder:"Email",value:l,onChange:function(e){return u(e.target.value)}}),Object(g.jsx)("input",{type:"text",placeholder:"Name",value:s,onChange:function(e){return i(e.target.value)}}),Object(g.jsx)("button",{type:"submit",disabled:!/@/.test(l),children:"Send invite"})]}):Object(g.jsx)("a",{href:"#",onClick:function(e){e.preventDefault(),f(!0)},children:"Invite by email address"}),Object(g.jsx)("hr",{})]})]})}function M(e){var t,n,r=e.member,c=e.todoList,s=Object(o.usePermissions)(p,"members",r),i=r.userId===p.cloud.currentUserId,a=r.userId===c.owner,d=r.name||r.email||r.userId;return i&&(d+=" (me)"),Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{style:{paddingRight:12},children:d}),Object(g.jsx)("td",{children:Object(g.jsx)(N,{member:r,todoList:c})}),Object(g.jsx)("td",{children:s.delete()&&!a?Object(g.jsx)("div",{className:"todo-list-trash",children:Object(g.jsx)("button",{className:"button",onClick:function(){return c.unshareWith(r)},children:Object(g.jsx)(f.a,{icon:w.g})})}):!a&&r.userId===p.cloud.currentUserId&&(((null===(t=r.accepted)||void 0===t?void 0:t.getTime())||0)>((null===(n=r.rejected)||void 0===n?void 0:n.getTime())||0)?Object(g.jsx)("button",{onClick:function(){return c.leave()},children:"Leave list"}):Object(g.jsx)("button",{onClick:function(){return p.members.update(r.id,{accepted:new Date,rejected:void 0})},children:"Accept invite"}))}),Object(g.jsx)("td",{})]})}function z(e){var t=e.todoList,n=Object(o.useLiveQuery)((function(){return p.todoItems.where({todoListId:t.id}).toArray()}),[t.id]),r=Object(o.usePermissions)(t),c=function(e,t){var n,r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return[null!==(n=Object(o.useLiveQuery)((function(){return p.openCloseStates.get([e,t])}),[e,t],r))&&void 0!==n?n:r,function(n){return p.openCloseStates.put(n,[e,t])}]}("sharing-menu",t.id,!1),s=Object(v.a)(c,2),i=s[0],a=s[1];return n?Object(g.jsxs)("div",{className:"box",children:[Object(g.jsxs)("div",{className:"grid-row",children:[Object(g.jsx)("h2",{children:t.title}),Object(g.jsx)("div",{className:"todo-list-trash",children:Object(g.jsx)("button",{disabled:!r.delete(),onClick:function(){return t.delete()},title:"Delete list",children:Object(g.jsx)(f.a,{icon:w.h})})}),!t.isPrivate()&&Object(g.jsx)("div",{className:"todo-list-trash",children:Object(g.jsx)("button",{onClick:function(){return a(!i)},children:Object(g.jsx)(f.a,{icon:w.f})})})]}),i&&Object(g.jsx)(U,{todoList:t}),Object(g.jsx)("div",{children:n.map((function(e){return Object(g.jsx)(y,{item:e},e.id)}))}),Object(g.jsx)("div",{children:r.add("todoItems")&&Object(g.jsx)(k,{todoList:t})})]}):null}function A(){var e=Object(o.useLiveQuery)((function(){return p.todoLists.toArray()}));return e?Object(g.jsx)("div",{children:e.map((function(e){return Object(g.jsx)(z,{todoList:e},e.id)}))}):null}function D(){var e=Object(r.useState)(!1),t=Object(v.a)(e,2),n=t[0],c=t[1],s=Object(r.useState)(""),i=Object(v.a)(s,2),a=i[0],d=i[1],l=Object(o.useLiveQuery)(Object(x.a)(Object(m.a)().mark((function e(){var t;return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.todoLists.count();case 2:return t=e.sent,e.abrupt("return",t>0);case 4:case"end":return e.stop()}}),e)}))));return n?Object(g.jsxs)("div",{className:"box",children:[Object(g.jsx)("h2",{children:"Give your list a name:"}),Object(g.jsx)("div",{className:"todo-item-input",children:Object(g.jsx)("input",{type:"text",autoFocus:!0,placeholder:"Name of list...",value:a,onChange:function(e){return d(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&(p.todoLists.add({title:a}),d(""),c(!1))}})})]}):Object(g.jsxs)("button",{className:"large-button",onClick:function(){return c(!n)},children:[Object(g.jsx)(f.a,{icon:w.d})," ",l?"Add another list":"Create ToDo List"]})}function W(){return Object(g.jsxs)("button",{className:"large-button",onClick:Object(x.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)}))),children:[Object(g.jsx)(f.a,{icon:w.b})," Factory reset client"]})}var P=n(125),T=n(124),E=n(92),B=n(91),F=n(126),H=function(){return Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",xmlSpace:"preserve",children:[Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"M81.2,38.9c-3.5-12.9-15.3-22-28.9-22c-11.4,0-21.9,6.7-26.9,16.8C12.6,34.6,2.5,45.3,2.5,58.4     c0,13.6,11.1,24.7,24.7,24.7h47.7c12.4,0,22.6-10.1,22.6-22.6C97.5,50.3,90.8,41.6,81.2,38.9z M74.9,75.4H27.2     c-9.4,0-17-7.6-17-17s7.6-17,17-17c0.2,0,0.4,0,0.6,0c1.6,0,3.2-0.9,3.7-2.5c3.3-8.5,11.6-14.3,20.8-14.3     c10.7,0,19.9,7.6,21.9,18.1c0.3,1.6,1.6,2.9,3.2,3.1c7.2,1.2,12.4,7.3,12.4,14.6C89.8,68.7,83.1,75.4,74.9,75.4z"})}),Object(g.jsxs)("g",{transform:"translate(14,-958.36218)",children:[Object(g.jsx)("path",{id:"third",d:"m 35,1000.3621 c -8.058,0 -15.4484,2.7386 -21.2188,7.1875 a 2.0002,2.0002 0 1 0 2.4376,3.1562 c 5.0947,-3.9281 11.635,-6.3437 18.7812,-6.3437 7.1462,0 13.6865,2.4156 18.7812,6.3437 a 2.0002,2.0002 0 1 0 2.4376,-3.1562 C 50.4484,1003.1007 43.058,1000.3621 35,1000.3621"}),Object(g.jsx)("path",{id:"second",d:"m 35,1009.3621 c -5.8189,0 -11.3007,1.7801 -15.5625,5.2812 a 2.0002,2.0002 0 1 0 2.5313,3.0938 c 3.4852,-2.8633 8.0339,-4.375 13.0312,-4.375 4.9973,0 9.546,1.5117 13.0312,4.375 a 2.0002,2.0002 0 1 0 2.5313,-3.0938 c -4.2618,-3.5011 -9.7436,-5.2812 -15.5625,-5.2812"}),Object(g.jsx)("path",{opacity:"0.4",id:"first",d:"m 35,1018.9376 c -3.6493,0 -7.1142,1.1668 -9.8125,3.3437 a 2.0009763,2.0009763 0 0 0 2.5,3.125 c 1.9329,-1.5594 4.5256,-2.4687 7.3125,-2.4687 2.7869,0 5.3796,0.9093 7.3125,2.4687 a 2.0009763,2.0009763 0 1 0 2.5,-3.125 c -2.6983,-2.1769 -6.1632,-3.3437 -9.8125,-3.3437 z m 0,8.0625 z"})]}),Object(g.jsx)("animate",{xlinkHref:"#first",attributeName:"opacity",dur:"3s",begin:"0s",calcMode:"discrete",from:"0.2",to:"1",repeatDur:"indefinite"}),Object(g.jsx)("animate",{xlinkHref:"#second",attributeName:"opacity",dur:"3s",begin:"0.7s",calcMode:"discrete",from:"0.2",to:"1",repeatDur:"indefinite"}),Object(g.jsx)("animate",{xlinkHref:"#third",attributeName:"opacity",dur:"3s",begin:"1.4s",calcMode:"discrete",from:"0.2",to:"1",repeatDur:"indefinite"})]})},R=function(){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",version:"1.1",style:{shapeRendering:"geometricPrecision",textRendering:"geometricPrecision",imageRendering:"optimizeQuality"},viewBox:"0 0 755 633.75",x:"0px",y:"0px",fillRule:"evenodd",clipRule:"evenodd",children:Object(g.jsx)("g",{children:Object(g.jsx)("path",{d:"M205 111c69,-162 315,-141 357,29 47,9 88,40 108,84 139,63 99,283 -63,283l-459 0c-155,0 -201,-204 -76,-276 14,-64 68,-112 133,-120zm41 287c-15,16 -40,-8 -24,-24 38,-39 102,-54 155,-54 53,0 118,15 156,54 15,16 -9,40 -24,24 -32,-32 -88,-44 -132,-44 -43,0 -100,12 -131,44zm235 -190c-18,0 -33,15 -33,33 0,17 15,32 33,32 17,0 32,-15 32,-32 0,-18 -15,-33 -32,-33zm-207 0c18,0 33,15 33,33 0,17 -15,32 -33,32 -18,0 -32,-15 -32,-32 0,-18 14,-33 32,-33zm364 49c116,36 90,207 -31,207l-459 0c-117,0 -148,-163 -37,-204 3,-60 52,-108 113,-108 4,0 8,0 11,0 41,-161 280,-140 290,27 2,0 5,0 8,0 49,0 91,33 105,78z"})})})},Q=function(){return Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg","data-name":"Layer 1",viewBox:"0 0 100 125",x:"0px",y:"0px",children:[Object(g.jsx)("path",{d:"M88.17,69.32A22,22,0,0,0,77.79,37.77a22,22,0,0,0-21.91-20.2,20.29,20.29,0,0,0-13.67,4.81l4.57,5.3a13.31,13.31,0,0,1,9.1-3.11,15,15,0,0,1,15,15c0,.06,0,.13,0,.19s0,.26,0,.39l-.1,2.75,2.65.75a15,15,0,0,1,8.79,22.1Z"}),Object(g.jsx)("path",{d:"M28.76,80H60.44V73H28.76a15,15,0,0,1-15-15A17,17,0,0,1,23.6,42.7l-2.79-6.42A23.91,23.91,0,0,0,6.78,58,22,22,0,0,0,28.76,80Z"}),Object(g.jsx)("rect",{x:"45.53",y:"-4.58",width:"7",height:"106.75",transform:"translate(-20.14 48.96) rotate(-45)"})]})},X=function(){return Object(g.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",xmlSpace:"preserve",children:Object(g.jsxs)("g",{children:[Object(g.jsx)("path",{d:"M81.2,38.9c-3.5-12.9-15.3-22-28.9-22c-11.4,0-21.9,6.7-26.9,16.8C12.6,34.6,2.5,45.3,2.5,58.4     c0,13.6,11.1,24.7,24.7,24.7h47.7c12.4,0,22.6-10.1,22.6-22.6C97.5,50.3,90.8,41.6,81.2,38.9z M74.9,75.4H27.2     c-9.4,0-17-7.6-17-17s7.6-17,17-17c0.2,0,0.4,0,0.6,0c1.6,0,3.2-0.9,3.7-2.5c3.3-8.5,11.6-14.3,20.8-14.3     c10.7,0,19.9,7.6,21.9,18.1c0.3,1.6,1.6,2.9,3.2,3.1c7.2,1.2,12.4,7.3,12.4,14.6C89.8,68.7,83.1,75.4,74.9,75.4z"}),Object(g.jsx)("path",{d:"M60.8,39.5c-0.8-0.6-1.9-0.5-2.6,0.2L43.4,56.5l-4.5-5.2c-0.7-0.8-1.8-0.9-2.6-0.2l-3.2,2.6c-0.8,0.6-0.9,1.8-0.3,2.6     l6.6,8.9c0.4,0.5,0.9,0.7,1.5,0.8l4.9,0c0.6,0,1.2-0.3,1.5-0.8l15.9-21.3c0.6-0.8,0.5-1.9-0.3-2.6L60.8,39.5z"})]})})},J=function(){return Object(g.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",version:"1.1",x:"0px",y:"0px",viewBox:"0 0 100 125",xmlSpace:"preserve",children:[Object(g.jsx)("g",{transform:"scale(1 0.95) translate(0 10)",children:Object(g.jsx)("path",{d:"M81.2,38.9c-3.5-12.9-15.3-22-28.9-22c-11.4,0-21.9,6.7-26.9,16.8C12.6,34.6,2.5,45.3,2.5,58.4     c0,13.6,11.1,24.7,24.7,24.7h47.7c12.4,0,22.6-10.1,22.6-22.6C97.5,50.3,90.8,41.6,81.2,38.9z M74.9,75.4H27.2     c-9.4,0-17-7.6-17-17s7.6-17,17-17c0.2,0,0.4,0,0.6,0c1.6,0,3.2-0.9,3.7-2.5c3.3-8.5,11.6-14.3,20.8-14.3     c10.7,0,19.9,7.6,21.9,18.1c0.3,1.6,1.6,2.9,3.2,3.1c7.2,1.2,12.4,7.3,12.4,14.6C89.8,68.7,83.1,75.4,74.9,75.4z"})}),Object(g.jsxs)("g",{transform:"translate(-40,-20) scale(1.5 1.5)",children:[Object(g.jsx)("polygon",{points:"84.453,20.676 87.936,20.687 84.442,23.66 84.433,25.766 91.565,25.793 91.572,23.755   88.007,23.741 91.58,20.701 91.591,18.665 84.458,18.636 "}),Object(g.jsx)("polygon",{points:"82.076,21.047 72.533,21.011 72.525,23.739 77.184,23.755 72.507,27.732 72.5,30.552 82.042,30.589   82.051,27.861 77.281,27.842 82.065,23.774 "})]}),Object(g.jsxs)("g",{transform:"translate(-29 -10) scale(1.5 1.5)",children:[Object(g.jsx)("path",{d:"M42.5,49.062h-3.75c-0.518,0-0.938,0.419-0.938,0.938s0.419,0.938,0.938,0.938h3.75  c0.518,0,0.938-0.419,0.938-0.938S43.018,49.062,42.5,49.062z"}),Object(g.jsx)("path",{d:"M61.25,49.062H57.5c-0.518,0-0.938,0.419-0.938,0.938s0.419,0.938,0.938,0.938h3.75  c0.518,0,0.938-0.419,0.938-0.938S61.768,49.062,61.25,49.062z"})]})]})};n(109);function q(e){var t=e.children,n=e.className,r=e.title;return Object(g.jsx)("div",{className:"svg-icon"+(n?" "+n:""),title:r,children:Object(g.jsx)("div",{children:t})})}function K(e){var t=e.className,n=Object(F.a)(p.cloud.syncState);switch(null===n||void 0===n?void 0:n.status){case"not-started":return Object(g.jsx)(q,{className:t});case"connecting":return Object(g.jsx)(q,{className:t,children:Object(g.jsx)(H,{})});case"connected":return Object(g.jsx)(q,{className:t,children:Object(g.jsx)(X,{})});case"disconnected":return Object(g.jsx)(q,{className:t,children:Object(g.jsx)(J,{})});case"offline":return Object(g.jsx)(q,{className:t,title:n.error&&""+n.error,children:Object(g.jsx)(Q,{})});case"error":return Object(g.jsx)(q,{className:t,title:n.error&&""+n.error,children:Object(g.jsx)(R,{})});default:return Object(g.jsx)(q,{className:t,children:null===n||void 0===n?void 0:n.phase})}}n(110);function Z(e){return function(){return e.apply(void 0,arguments).catch((function(e){"AbortError"===(null===e||void 0===e?void 0:e.name)?console.debug(e):console.error(e)}))}}function G(){return(G=Object(x.a)(Object(m.a)().mark((function e(){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.delete();case 2:window.location.reload();case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(){var e=Object(F.a)(p.cloud.currentUser);return Object(g.jsxs)(P.a,{fixed:"top",sticky:"top",collapseOnSelect:!0,expand:"lg",bg:"dark",variant:"dark",children:[Object(g.jsx)(P.a.Brand,{children:"Dexie Cloud ToDo App"}),Object(g.jsx)(P.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(g.jsx)(P.a.Text,{className:"d-inline-flex d-lg-none status-icons-collapsed",children:Object(g.jsx)(K,{})}),Object(g.jsx)(P.a.Collapse,{id:"responsive-navbar-nav",className:"justify-content-end",children:null!==e&&void 0!==e&&e.isLoggedIn?Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(P.a.Text,{className:"d-none d-lg-inline-flex status-icons-not-collapsed",children:Object(g.jsx)(K,{})}),Object(g.jsx)(T.a,{title:e.name,id:"basic-nav-dropdown",children:Object(g.jsx)(T.a.Item,{onClick:function(){return function(){return G.apply(this,arguments)}()},children:"Logout"})})]}):Object(g.jsxs)(T.a,{id:"basic-nav-dropdown",title:"Sign in or create your account",children:[Object(g.jsx)(T.a.Header,{children:"Sign in a demo user"}),Object(g.jsx)(g.Fragment,{children:Object.keys(S.demoUsers).map((function(e){return Object(g.jsx)(T.a.Item,{children:Object(g.jsx)(E.a,{onClick:Z((function(){return p.cloud.login({grant_type:"demo",email:e})})),children:e})},e)}))}),Object(g.jsx)(T.a.Divider,{}),Object(g.jsx)(T.a.Header,{children:"Sign in real user"}),Object(g.jsx)(T.a.Item,{children:Object(g.jsx)(B.a,{onClick:Z((function(){return p.cloud.login()})),children:"Sign in / sign up yourself"})})]})})]})}n(112),n(113);function Y(){var e=Object(F.a)(p.cloud.currentUser),t=Object(F.a)(p.cloud.invites,[]);return 0===t.length?null:Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)("h3",{children:"You've got invited!"}),Object(g.jsxs)("table",{children:[Object(g.jsxs)("tr",{children:[Object(g.jsx)("th",{}),Object(g.jsx)("th",{children:"Name of list"}),Object(g.jsx)("th",{children:"Invited by"})]}),t.map((function(t){var n,r;return Object(g.jsxs)("tr",{children:[Object(g.jsx)("td",{children:t.accepted?"\u2713":t.email===(null===e||void 0===e?void 0:e.email)?Object(g.jsx)("button",{onClick:function(){return p.members.update(t.id,{accepted:new Date})},children:"Accept"}):""}),Object(g.jsx)("td",{children:null===(n=t.realm)||void 0===n?void 0:n.name}),Object(g.jsx)("td",{children:null===(r=t.invitedBy)||void 0===r?void 0:r.name})]},t.id)}))]})]})}var $=function(){return Object(g.jsxs)("div",{children:[Object(g.jsx)(V,{}),Object(g.jsx)(Y,{}),Object(g.jsx)(A,{}),Object(g.jsx)(D,{}),Object(g.jsx)(W,{})]})},_=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ee(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var te=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,127)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),s(e),i(e)}))};window.Dexie=b.default,i.a.render(Object(g.jsx)(c.a.StrictMode,{children:Object(g.jsx)($,{})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");_?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):ee(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):ee(t,e)}))}}(),te()},77:function(e){e.exports=JSON.parse('{"demoUsers":{"alice@demo.local":{},"bob@demo.local":{},"foo@demo.local":{},"bar@demo.local":{}},"roles":{"manager":{"displayName":"Manager","description":"Members with this role gains full permissions within the realm pointed out by the member entry","sortOrder":1,"permissions":{"manage":"*"}},"doer":{"displayName":"Doer","description":"Members with this role can add todoItems, manage own todoItems and mark other todoItems as done or undone","sortOrder":2,"permissions":{"add":["todoItems"],"update":{"todoItems":["done"]}}},"readonly":{"displayName":"ReadOnly","description":"Members with this role have no permissions to change any data","sortOrder":3,"permissions":{}}},"data":{}}')},98:function(e,t,n){}},[[114,1,2]]]);
//# sourceMappingURL=main.10b7ebc6.chunk.js.map