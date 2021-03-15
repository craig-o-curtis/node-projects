# Node.js Web Servers, Tests, Deployment

This repo contains several programs including:

- Text server
- Static file server serving static HTML files
- Dictionary app serving and writing to a JSON file
- Countdown installed globally
- Socket chat app in the browser using web sockets
- Socket.io terminal chat app

## Run Scripts

- Run a file with `npx babel-node <file-path>`

```bash
npx babel-node ./programs/request.js
```

- Or with script `npm run tx -- <file-path>`

```bash
npm run tx -- <file-path>
// For example:
npm run tx -- ./server/plain-text.js
```

## Make a package global:

## Make Global

1. add at top file:

```js
#!/usr/bin/env node

```

2. in package.json, add bin:

```json
  "bin": {
    "countdown": "countdown.js"
  },
```

3. run `npm link`

4. run `countdown`

5. remove with `npm unlink`

## ENV Variables

- set with `$ export NODE_ENV=development`
- check with `$ echo $NODE_ENV` in terminal
- use with `process.env.NODE_ENV`
