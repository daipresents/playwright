[README](../README.md) > Screenshot and 

# Screenshot

## Take a screenshot on failure
See https://github.com/microsoft/playwright/issues/14854

Adding these line on each spec.

```
import { screenshotOnFailure } from '../lib/screenshot';
test.afterEach(screenshotOnFailure);
```

You can see the logic in [screenshot.ts](../lib/screenshot.ts).
