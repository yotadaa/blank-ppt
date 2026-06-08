# Files Required for React Presenter Migration

Dokumen ini mencatat semua file yang dibutuhkan agent/session berikutnya. Untuk daftar lengkap 246 file di paket migration, lihat:

```text
C:\skripsi\migration\react-presenter-migration\FULL_FILE_MANIFEST.txt
```

## 1. Root Handoff Documents

Semua file ini wajib dibaca dulu:

```text
README.md
GOALS_AND_FEATURE_PLAN.md
IMPLEMENTATION_STATUS.md
VALIDATION_NOTES.md
NEXT_AGENT_TODO.md
ASSET_AND_CONTEXT_MAP.md
FILES_REQUIRED.md
FULL_FILE_MANIFEST.txt
```

## 2. React Code Snapshot

Folder wajib:

```text
code-snapshot
```

File konfigurasi wajib:

```text
code-snapshot\package.json
code-snapshot\package-lock.json
code-snapshot\index.html
code-snapshot\vite.config.ts
code-snapshot\tsconfig.json
code-snapshot\tsconfig.node.json
```

Entry React:

```text
code-snapshot\src\main.tsx
code-snapshot\src\App.tsx
code-snapshot\src\types.ts
```

Components:

```text
code-snapshot\src\components\AppShell.tsx
code-snapshot\src\components\Toolbar.tsx
code-snapshot\src\components\SlideRail.tsx
code-snapshot\src\components\SlideCanvas.tsx
code-snapshot\src\components\Inspector.tsx
code-snapshot\src\components\DetailModal.tsx
code-snapshot\src\components\ReferencePreview.tsx
code-snapshot\src\components\DraftPanel.tsx
code-snapshot\src\components\ReplaceTextPanel.tsx
code-snapshot\src\components\AssetPanel.tsx
code-snapshot\src\components\LayerPanel.tsx
code-snapshot\src\components\CommandPalette.tsx
```

Hooks:

```text
code-snapshot\src\hooks\useEditorState.ts
code-snapshot\src\hooks\useDraftSearch.ts
```

Utilities:

```text
code-snapshot\src\utils\slideDom.ts
```

Styles:

```text
code-snapshot\src\styles\tokens.css
code-snapshot\src\styles\app.css
code-snapshot\src\styles\slide-source.css
code-snapshot\src\styles\slide-compat.css
```

## 3. Extraction Scripts

Wajib jika agent ingin regenerate data dari DOCX/presenter lama:

```text
code-snapshot\scripts\extract_thesis.py
code-snapshot\scripts\extract_presenter_data.js
```

Catatan:

- `extract_thesis.py` masih memakai path DOCX asli di `C:\skripsi\Draft Skripsi F1E122037 Fix.docx`.
- `extract_presenter_data.js` masih memakai path presenter lama di `C:\skripsi\outputs\...`.
- Jika source lama tidak tersedia, gunakan data JSON yang sudah ada di `public\data`.

## 4. Runtime Data

Wajib untuk menjalankan app tanpa regenerate:

```text
code-snapshot\public\data\slides.json
code-snapshot\public\data\thesis.json
code-snapshot\public\data\assets.json
```

Data mirror juga ada di:

```text
code-snapshot\src\data\slides.json
code-snapshot\src\data\thesis.json
code-snapshot\src\data\assets.json
```

Namun runtime React sekarang membaca dari `public\data` via `fetch('/data/*.json')`.

## 5. Public Assets

Folder wajib:

```text
code-snapshot\public\assets
```

Isi penting:

```text
code-snapshot\public\assets\logo-unja.png
code-snapshot\public\assets\reference-pdf-pages\*.jpg
code-snapshot\public\assets\reference-pdfs\*.pdf
code-snapshot\public\assets\reference-html-images\*.webp
code-snapshot\public\assets\*.png
```

Jumlah saat paket dibuat:

```text
190 files, sekitar 80 MB
```

Daftar nama file aset lengkap ada di `FULL_FILE_MANIFEST.txt`.

## 6. Source Thesis Files

Wajib untuk konteks dan regenerate thesis extraction:

```text
source-docs\Draft Skripsi F1E122037 Fix.docx
```

Opsional, jika ada:

```text
source-docs\Draft Skripsi F1E122037 Fix.md
```

## 7. QA Evidence

Wajib untuk memahami status visual/fungsional terakhir:

```text
qa\react-editor-visual-audit.json
qa\react-editor-desktop.png
qa\react-editor-modal.png
qa\react-editor-draft.png
qa\react-editor-replaced.png
qa\react-editor-layer.png
qa\react-editor-theme.png
qa\vite-dev.out.log
qa\vite-dev.err.log
```

Catatan penting:

- screenshot QA ini dibuat sebelum visual QA ulang setelah extractor fix;
- agent berikutnya harus membuat screenshot baru.

## 8. Generated Concept Image

Wajib sebagai visual reference dari fase concepting:

```text
images\generated-concept\ig_0b124b901bdaa83d016a22bbd978588191a352da28123dc0a7.png
```

Gunakan untuk memahami arah UI editor: toolbar, canvas, inspector, modal, dan workflow editing.

## 9. Original Workspace Paths to Know

React workspace asli:

```text
C:\skripsi\outputs\manual-20260605-presenter-react\presentations\skripsi-presenter-react
```

Old presenter web:

```text
C:\skripsi\outputs\manual-20260605-presenter-web\presentations\skripsi-presenter-web\linux-portable\index.html
```

Old presenter assets:

```text
C:\skripsi\outputs\manual-20260605-presenter-web\presentations\skripsi-presenter-web\linux-portable\assets
```

Old deck source:

```text
C:\skripsi\outputs\manual-20260604-123547\presentations\skripsi-deck-revisi\output\skripsi-deck-revisi-final.html
```

Main thesis DOCX original:

```text
C:\skripsi\Draft Skripsi F1E122037 Fix.docx
```

## 10. Dependency Notes

Do not copy `node_modules` as a required migration file. Reinstall with:

```powershell
cd C:\skripsi\migration\react-presenter-migration\code-snapshot
& 'C:\Program Files\nodejs\npm.cmd' install
```

Then validate:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
```

