[README](../README.md) > Video comparisons

# Video comparisons

```
// Take a screenshot for visual comparisons.
await expect(page).toHaveScreenshot();
```

If you execute the test, you can see error log. That's because there was no golden file yet.

```
npx playwright test ./tests/visual-comparisons.spec.ts 

Running 1 test using 1 worker
  1) [Google Chrome] › visual-comparisons.spec.ts:4:5 › visual comparisons test ────────────────────

    Error: A snapshot doesn't exist at /Users/daipresents/Work/playwright/tests/visual-comparisons.spec.ts-snapshots/visual-comparisons-test-1-Google-Chrome-darwin.png, writing actual.

       7 |
       8 |   // Take a screenshot for visual comparisons.
    >  9 |   await expect(page).toHaveScreenshot();
         |   ^
      10 | });
      11 |

        at /Users/daipresents/Work/playwright/tests/visual-comparisons.spec.ts:9:3

    attachment #1: visual-comparisons-test-1-actual.png (image/png) ────────────────────────────────
    test-results/visual-comparisons-visual-comparisons-test-Google-Chrome/visual-comparisons-test-1-actual.png
    ────────────────────────────────────────────────────────────────────────────────────────────────

  1 failed
    [Google Chrome] › visual-comparisons.spec.ts:4:5 › visual comparisons test ─────────────────────

  Serving HTML report at http://localhost:9323. Press Ctrl+C to quit.
```
