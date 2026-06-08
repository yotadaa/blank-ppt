# Validation Notes

## Build Evidence

Latest successful build command:

```powershell
cd C:\skripsi\outputs\manual-20260605-presenter-react\presentations\skripsi-presenter-react
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Observed output:

```text
vite v6.4.3 building for production...
45 modules transformed.
dist/index.html                 0.45 kB
dist/assets/index-znsfhI7L.css 44.02 kB
dist/assets/index-DNa_mckY.js 174.03 kB
✓ built in 1.01s
```

## Functional QA Evidence

QA was run with `playwright-core` using local Chrome:

```text
C:\Program Files\Google\Chrome\Application\chrome.exe
```

Browser plugin was not callable from tool discovery during this session, so Playwright was used as the stable fallback.

Audit JSON:

```json
{
  "slideCount": 45,
  "draftCards": 10,
  "replacementApplied": true,
  "layerCount": 1,
  "theme": "navy",
  "fullscreenAfterShortcut": true,
  "consoleErrors": []
}
```

Audit file:

```text
C:\skripsi\migration\react-presenter-migration\qa\react-editor-visual-audit.json
```

## Screenshots Included

- `qa\react-editor-desktop.png`
- `qa\react-editor-modal.png`
- `qa\react-editor-draft.png`
- `qa\react-editor-replaced.png`
- `qa\react-editor-layer.png`
- `qa\react-editor-theme.png`

## Visual Issue Found During Inspection

In `react-editor-desktop.png`, before the extractor fix, cover slide had overlap in advisor cards.

Likely cause:

- class names were broken by `data-edit-id` insertion.

Resolution already applied:

- `scripts/extract_presenter_data.js` was patched;
- `npm run extract:presenter` regenerated slide JSON;
- `npm run build` passed.

Required next validation:

1. Start dev server.
2. Clear localStorage.
3. Load slide 1.
4. Confirm advisor cards no longer overlap.
5. Capture new desktop screenshot.
6. Open modal, draft, replace, layer, theme screenshots again.
7. Generate montage preview.

## Suggested Validation Script Outline

Use this as a guide if agent wants to repeat Playwright QA:

```js
const { chromium } = await import("playwright-core");
const browser = await chromium.launch({
  headless: true,
  executablePath: "C:/Program Files/Google/Chrome/Application/chrome.exe"
});
const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
const consoleErrors = [];
page.on("console", msg => { if (msg.type() === "error") consoleErrors.push(msg.text()); });
page.on("pageerror", err => consoleErrors.push(err.message));
await page.goto("http://127.0.0.1:5174/", { waitUntil: "domcontentloaded" });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: "networkidle" });
await page.waitForSelector(".app-shell");
```

Minimum assertions:

```js
await page.locator(".rail-item").count(); // expected 45
await page.locator(".rail-item").nth(12).click(); // slide 13
await page.locator(".react-slide-frame [data-edit-id]").filter({ hasText: "Pembangkitan" }).first().click();
await page.waitForSelector(".detail-modal");
await page.getByRole("button", { name: "Lihat di draft" }).click();
await page.waitForSelector(".draft-card");
await page.getByRole("button", { name: "Replace text" }).click();
await page.waitForSelector(".replace-panel");
```

