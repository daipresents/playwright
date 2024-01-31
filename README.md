# Playwright (TypeScript) + BrowserStack Sample

## Install Playwright

See: https://playwright.dev/docs/intro

```
npm init playwright@latest
```

## Install dotenv

```
npm install dotenv --save
```

ルートフォルダに.envファイルを作成。以下、サンプル。

```
# BASE URL
BASE_URL='https://daipresents.com/'

# BASIC AUTHはこんなかんじ
# playwright.config.ts でこの値を使う
# BASIC_AUTH_ID='${ID}'
# BASIC_AUTH_PASS='${PASS}'

# BROWSERSTACK
BROWSERSTACK_USERNAME='${NAME}'
BROWSERSTACK_ACCESS_KEY='{KEY}'
```

BrowserStackのユーザ名とキーは、 https://www.browserstack.com/accounts/profile/details から確認できる。

## 動作確認

```
% npx playwright test                             

Running 1 test using 1 worker
  1 passed (35.4s)

To open last HTML report run:

  npx playwright show-report
```

お疲れさまでした。
