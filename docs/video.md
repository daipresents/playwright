[README](../README.md) > Video

# Video
See https://playwright.dev/docs/videos

Only add setting file.

```
import { defineConfig } from '@playwright/test';
export default defineConfig({
  use: {
    video: 'on-first-retry',
  },
});
```

Screenshots are stored in `/test-results`.

