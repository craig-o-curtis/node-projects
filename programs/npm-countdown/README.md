# Countdown Clock

Terminal countdown timer

## Packages

- minimist
- single-line-log

## Run

```bash
node ./programs/npm-countdown/countdown.js --time 2
```

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
