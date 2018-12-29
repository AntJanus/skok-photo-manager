export function communicator(ipcMain) {
  let routes = {
    GET: {},
    POST: {},
  };

  const register = (action, route, handler) => {
    validateRoute(routes, action, route, handler);

    routes[action][route] = handler;
  };

  const messageHandler = (event, arg) => {
    let isValid = validateMessage(arg);

    if (!isValid) {
      return;
    }

    let handler = matchHandler(routes, arg);
    let req = buildRequest(event, arg);
    let res = buildResponse(event, arg);

    handler(req, res);
  };

  let comm = {
    register,
  };

  ipcMain.on('asynchronous-message', (event, arg) => {
    if (arg === 'PING') {
      console.log('PING');
      return event.sender.send('asynchronous-reply', 'PONG');
    }

    messageHandler(event, arg);
  });

  return comm;
}

function validateRoute(routes, action, route, handler) {
  if (!routes[action]) {
    throw new Error('Route type not supported');
  }

  if (routes[action][route]) {
    throw new Error('Route already registered');
  }
}

function validateMessage(data) {
  if (data.action && data.route) {
    return true;
  }

  return false;
}

function matchHandler(routes, data) {
  if (routes[data.action][data.route]) {
    return routes[data.action][data.route];
  }

  return notFoundHandler;
}

function notFoundHandler(req, res) {
  return res.sendStatus(404, 'Route not found');
}

function buildRequest(event, arg) {
  return {
    ...arg
  };
}

function buildResponse(event, arg) {
  return {
    send: sendMessage(event, arg),
    sendStatus: sendStatus(event, arg),
    broadcast: broadcastMessage(event, arg),
  };
}

function sendMessage(event, arg) {
  return (message: any) => {
    event.sender.send('asynchronous-reply', {
      ...arg,
      status: 200,
      data: message
    });
  };
}

function sendStatus(event, arg) {
  return (statusCode: number, message?: any) => {
    event.sender.send('asynchronous-reply', {
      ...arg,
      status: statusCode,
      message,
    });
  };
}

function broadcastMessage(event, arg) {
  return (message: any) => {
    event.sender.send('asynchronous-reply', {
      ...arg,
      status: 200,
      global: true,
      data: message,
    });
  };
}
