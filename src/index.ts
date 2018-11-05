import * as createDebug from 'debug';
import { WaffleServer } from './waffle-server';
import { getLoggerObject } from './custom-logger';

createDebug.formatters.j = (v) => {
  return JSON.stringify(v, null, 2);
}

// get log data via log data handling (getLoggerObject)
(() => {
  createDebug.enable('*');

  const loggerObject = getLoggerObject();
  const waffleServer = new WaffleServer(loggerObject);
  const query = { select: { all: true } };

  waffleServer.processQuery(query);
})();

console.log('-----------------------------');

// get only errors to console
(() => {
  createDebug.enable('*:err');

  const waffleServer = new WaffleServer();
  const query = { select: { all: true } };

  waffleServer.processQuery(query);
})();
