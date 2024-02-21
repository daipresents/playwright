[README](../README.md) > BrowserStack

# BrowserStack

## Run browserStack sample

### Add setting to .env
Sample is below.

```
# BROWSERSTACK
# You can see these values here: https://www.browserstack.com/accounts/profile/details
BROWSERSTACK_USERNAME='${NAME}'
BROWSERSTACK_ACCESS_KEY='{KEY}'
```

### Run sample test
Please use these command as below.

```
# No UI
npx playwright test ./tests/browserstack.sample.spec.ts

# With UI
npx playwright test ./tests/browserstack.sample.spec.ts --ui
```
