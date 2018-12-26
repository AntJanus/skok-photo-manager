# Electron Communicator

An electron router that has a similar interface/usage as an HTTP server, Express, and similar libraries

## Usage

In electron:
```ts
import { communicator } from 'electron-communicator';

const routes = {
  'api/users': {
    func: (req, res) => {
      let orgId = req.data.organization_id;

      return [
        {
          id: 1,
          name: 'test'
        }
      ];
    },
    method: 'GET',
    url: 'api/users',
  },
};

communicator.registerRoutes(routes);

```

In front-end:

```ts
import { transponder } from 'electron-communicator';

let users = await transponder.request('GET' || transponder.GET, 'api/users', {
  organization_id: 3
});
```