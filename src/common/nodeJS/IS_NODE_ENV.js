import IS_ELECTRON_ENV from "../electron/IS_ELECTRON_ENV";

let IS_NODE_ENV;
try {
  IS_NODE_ENV = global && global.process && !IS_ELECTRON_ENV;
} catch (e) {
  IS_NODE_ENV = false;
}

export default IS_NODE_ENV;
