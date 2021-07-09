export const Styles: { [styleAlias: string]: Partial<CSSStyleDeclaration> | any} = {
  Error: {
    color: "red",
  },
  Alert: {
    error: {
      color: "red"
    },
    warning: {
      color: "yellow"
    },
    info: {
      color: "black"
    }
  },
  Darken: {
    position: "fixed",
    top: 0,
    left: 0,
    opacity: 0.5,
    backgroundColor: "#000",
    width: "100vw",
    height: "100vh",
    zIndex: 150,
    webkitBackdropFilter: "blur(2px)",
    backdropFilter: "blur(2px)",
  },
  DialogOuter: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    zIndex: 150,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
  },
  DialogInner: {
    position: "relative",
    color: "#222",
    backgroundColor: "#fff",
    padding: "5px 20px 20px 20px",
    marginBottom: "2em",
    maxWidth: "90%",
    maxHeight: "90%",
    overflowY: "auto",
    border: "3px solid #3dbca2",
    borderRadius: "8px",
    boxShadow: "0 0 80px 10px #666",
    width: "auto"
  },
  Input: {
    height: "1.2em",
    width: "17em"
  }
};