# Implementation Status

Status ini menggambarkan keadaan terakhir saat paket migration dibuat.

## Completed

- Workspace React baru dibuat di:
  - `C:\skripsi\outputs\manual-20260605-presenter-react\presentations\skripsi-presenter-react`
- Snapshot workspace disalin ke:
  - `C:\skripsi\migration\react-presenter-migration\code-snapshot`
- React + Vite + TypeScript setup selesai.
- DOCX extraction script selesai:
  - `scripts/extract_thesis.py`
  - output: `src/data/thesis.json` dan `public/data/thesis.json`
- Presenter migration script selesai:
  - `scripts/extract_presenter_data.js`
  - output: `src/data/slides.json`, `public/data/slides.json`, `src/data/assets.json`, `public/data/assets.json`
  - copy assets ke `public/assets`
- App shell selesai:
  - toolbar;
  - rail slide;
  - canvas active slide;
  - inspector kanan;
  - modal detail;
  - command palette.
- Data besar di-load via `fetch('/data/*.json')`, bukan import bundle.
- Build lolos setelah optimasi data loading.
- Fitur modal:
  - konteks item;
  - references max 2;
  - `Lihat di draft`;
  - `Replace text`.
- Fitur draft:
  - search;
  - highlight kata;
  - preview paragraph.
- Fitur replace:
  - selection basket;
  - mengambil selected text via `window.getSelection()`;
  - apply ke slide;
  - QA menunjukkan `replacementApplied: true`.
- Fitur asset/layer:
  - asset grid;
  - insert layer;
  - layer panel;
  - drag layer;
  - width/X/Y/Z numeric;
  - show/hide;
  - lock/unlock;
  - duplicate/delete.
- Theme:
  - Light Academic;
  - Mint Lab;
  - Navy Focus;
  - Warm Paper;
  - High Contrast;
  - custom accent color.
- Fullscreen:
  - toolbar button;
  - shortcut `F`;
  - QA menunjukkan `fullscreenAfterShortcut: true`.

## Key Files

- `src/App.tsx`
  - loads `slides.json`, `thesis.json`, `assets.json` via fetch.
- `src/components/AppShell.tsx`
  - composes toolbar, rail, canvas, inspector, modal, command palette.
  - registers keyboard shortcuts.
- `src/components/SlideCanvas.tsx`
  - renders active slide HTML;
  - handles click target by `data-edit-id`;
  - renders overlay image layers;
  - handles drag.
- `src/components/DetailModal.tsx`
  - modal item detail;
  - context mapping;
  - draft and replace modes.
- `src/components/ReferencePreview.tsx`
  - shows max two references;
  - links to PDF/article in new tab.
- `src/components/DraftPanel.tsx`
  - draft search and highlight.
- `src/components/ReplaceTextPanel.tsx`
  - selection basket and apply replacement.
- `src/components/AssetPanel.tsx`
  - image asset library.
- `src/components/LayerPanel.tsx`
  - z-index/depth/position/visibility controls.
- `src/hooks/useEditorState.ts`
  - core editor state, history, localStorage, replace text/image, layers, theme.
- `src/hooks/useDraftSearch.ts`
  - simple token-based search.
- `src/utils/slideDom.ts`
  - DOM patch helpers.
- `src/styles/app.css`
  - editor layout.
- `src/styles/tokens.css`
  - themes.
- `src/styles/slide-source.css`
  - migrated deck CSS from old HTML.
- `src/styles/slide-compat.css`
  - compatibility overrides for React canvas.

## Important Fix Already Applied

Problem:

`extract_presenter_data.js` initially inserted `data-edit-id` incorrectly into class names. Example broken output:

```html
<div class="card data-edit-id="s1-e5"-icon">
```

Effect:

- CSS class like `card-icon`/`card-copy` broke;
- slide cover advisor cards overlapped.

Fix:

`addEditIds()` now inserts `data-edit-id` as tag attribute, not inside class name:

```js
const pattern = new RegExp(`<div(?=\\s+[^>]*class="[^"]*\\b${className}\\b)(?![^>]*data-edit-id=)`, "g");
patched = patched.replace(pattern, (match) => {
  count += 1;
  return `${match} data-edit-id="s${slideNo}-e${count}"`;
});
```

After fix:

```powershell
npm run extract:presenter
npm run build
```

Both commands completed successfully.

## Not Yet Complete

- Visual QA after the extractor fix must be rerun.
- Resize handles on overlay images are not implemented.
- Snap-to-center/reset-size buttons are not implemented.
- Image alt/title fields are not implemented.
- Exact DOCX paragraph-to-slide mapping is not implemented; current matching is token search.
- `src/utils/exportState.ts` is not created despite plan; export/import lives in hook/toolbar.
- Montage preview after final validation still needs to be generated.

