import nanoid from 'nanoid';

interface Dictionary<T> {
  [key: string]: T;
}

interface Listener {
  resolve: any;
  reject: any;
}

interface GlobalListener {
  (data: any): any;
}

export function transponder(ipcRenderer) {
  let listeners: Dictionary<Listener> = {};
  let globalListeners: Dictionary<GlobalListener[]> = {};

  const send = (action, route, data) => {
    return new Promise((resolve, reject) => {
      let payload = createMessage(action, route, data);

      listeners[payload.uuid] = { resolve, reject };
      ipcRenderer.send('asynchronous-message', payload);
    });
  };

  const registerGlobalListener = (action, route, cb) => {
    let key = `${action}:${route}`;
    if (globalListeners[key]) {
      globalListeners[key] = [];
    }

    globalListeners[key].push(cb);
  }

  const ping = () => {
    ipcRenderer.send('asynchronous-message', 'PING');
  }

  let comm = {
    ping,
    send,
    registerGlobalListener
  };

  ipcRenderer.on('asynchronous-reply', (event, arg) => {
    if (arg === 'PONG') {
      return console.log('PONG');
    }

    if (arg.global) {
      return handleGlobalBroadcast(arg, globalListeners);
    }

    if (listeners[arg.uuid]) {
      listeners[arg.uuid].resolve(arg.data);
      listeners[arg.uuid] = undefined;
    }
  });

  return comm;
}

function createMessage(action, route, data) {
  return {
    uuid: nanoid(),
    action,
    route,
    data,
  }
}

function handleGlobalBroadcast(arg, globalListeners) {
  let key = `${arg.action}:${arg.route}`;
  let listeners = globalListeners[key];

  if (listeners) {
    listeners.forEach(listener => {
      listener(arg.data);
    });
  }
}
