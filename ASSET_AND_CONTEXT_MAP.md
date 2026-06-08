# Asset and Context Map

## Source Documents

- `source-docs\Draft Skripsi F1E122037 Fix.docx`
  - primary thesis source.
- `source-docs\Draft Skripsi F1E122037 Fix.md`
  - copied only if present in `C:\skripsi`.

## Generated Concept Image

Folder:

```text
images\generated-concept
```

Source before copy:

```text
C:\Users\LENOVO\.codex\generated_images\019e94e0-f287-7b42-a2b0-435a8ac90417
```

Purpose:

- visual concept for React presenter/editor UI;
- use as design reference for layout rhythm, modal size, toolbar, inspector, and canvas/editor split.

## React App Assets

Folder:

```text
code-snapshot\public\assets
```

Contains:

- Universitas Jambi logo;
- isometric generated assets from old deck;
- GUI screenshots;
- reference PDF page screenshots;
- local reference PDFs.

Approx size at package creation:

```text
190 files, around 80 MB in public/assets
```

## Runtime Data

Folder:

```text
code-snapshot\public\data
```

Files:

- `slides.json`
  - 45 slides;
  - slide HTML;
  - slide metadata;
  - references map.
- `thesis.json`
  - 1442 paragraphs;
  - 48 headings;
  - 110 tables;
  - search tokens;
  - required term flags.
- `assets.json`
  - image manifest.

## QA Evidence

Folder:

```text
qa
```

Important screenshots:

- `react-editor-desktop.png`
  - main editor view.
- `react-editor-modal.png`
  - item modal.
- `react-editor-draft.png`
  - draft preview mode.
- `react-editor-replaced.png`
  - after text replacement.
- `react-editor-layer.png`
  - asset layer manager.
- `react-editor-theme.png`
  - theme switcher result.

Important JSON:

- `react-editor-visual-audit.json`
  - machine-readable QA result.

## Old Source Paths Used by Extractor

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

If those paths are unavailable, use the JSON/assets already copied into `code-snapshot`.

