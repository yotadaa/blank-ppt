# Agent Guide For Building Slides

Work in `C:\skripsi\blank-ppt\code-snapshot`.

This repository root is only the handoff wrapper. The React/Vite presentation app, runtime data, scripts, source, and validation commands live inside `code-snapshot`.

## Current Repository Contract

This repo is intentionally a blank/example presentation project.

- `code-snapshot/public/data/*.json` contains dummy/example data only. Treat it as schema guidance, not real thesis content.
- Real thesis/proposal/skripsi draft material must be placed under `docs/proposal` before producing the final slide deck.
- `skripsi-presenter-web/` and `source-docs/` are local historical/source bundles that are ignored and untracked. Do not rely on them as committed source for a new session.
- Work from `code-snapshot` when running, building, validating, editing slide data, or adding assets.
- Keep generated runtime data in `code-snapshot/public/data`; update `src/data` only if the extractor or project convention requires a mirror.

## Conversation Requirements Checklist

Before handing work back, verify that these user requirements have been followed:

1. The proposal/draft in `docs/proposal` was read thoroughly, not skimmed.
2. The slide outline was made from the draft contents.
3. Core ideas for each slide were extracted before writing slide HTML.
4. Every slide sub-title has at least one paragraph of content.
5. Every paragraph cites a real reference that exists in the draft.
6. Paragraphs are copied or lightly condensed from already cited draft paragraphs whenever possible.
7. All references used by the final slide deck are recapped after the slides are drafted.
8. Every used reference has been downloaded or has an explicit blocker note.
9. At least one candidate image was generated or selected for every slide.
10. Candidate image style is `3D isometric, slightly cartoonized`.
11. Images are skipped only when screenshot analysis shows the slide is too dense.
12. Every usable asset is registered in `code-snapshot/public/data/assets.json`.
13. Every slide was screenshot one by one and analyzed before completion.
14. Markdown docs were analyzed for project knowledge before changing the deck.
15. Final work happened in `code-snapshot`, not in a stale exported folder.

## First Context Pass

Before creating or editing slides, read the project Markdown and the proposal draft context.

1. Read the handoff docs:
   - `README.md`
   - `GOALS_AND_FEATURE_PLAN.md`
   - `IMPLEMENTATION_STATUS.md`
   - `VALIDATION_NOTES.md`
   - `ASSET_AND_CONTEXT_MAP.md`
   - `FILES_REQUIRED.md`
   - `docs/README.md`
   - `docs/architecture-and-code-map.md`
   - `docs/session-knowledge-and-milestones.md`
   - `docs/validation-and-qa-playbook.md`
   - `docs/feature-backlog-and-design-decisions.md`
   - `docs/source-planning-2026-06-05-react-presenter-editor.md`
   - `docs/claude-audit/claude-audit.md`
   - `docs/claude-audit/claude-audit-2.md`
2. Read every Markdown or source document under `docs/proposal` thoroughly. That folder is the expected home for the draft thesis, proposal, or skripsi source used to build the deck.
   - If `docs/proposal` is missing or empty, stop and ask for the proposal/draft source or create the folder and place the provided draft there before continuing.
3. Do not skim the draft. Build the slide outline only after understanding the research problem, method, data, evaluation, results, limitations, and reference list.
4. Use `rg -n "^#{1,6} " docs docs/proposal` to map headings, then read the actual paragraphs behind those headings.

## Runtime Data Files

The app loads runtime JSON from `code-snapshot/public/data` with `fetch("/data/*.json")`.

Current files in `code-snapshot/public/data` are dummy examples only:

- `slides.json` - slide list and reference metadata.
- `thesis.json` - searchable draft/proposal paragraphs and tables.
- `assets.json` - insertable visual asset manifest.

The mirror files under `code-snapshot/src/data` may exist, but runtime uses `public/data`. Keep `public/data` correct first. If you regenerate with scripts, keep both locations consistent.

## Data Schema Notes

### `slides.json`

Required top-level shape:

```json
{
  "slides": [],
  "referencePdfs": {}
}
```

Each slide requires:

- `index` - 1-based slide number.
- `title` - title used by slide rail/search.
- `chapter` - chapter chip name, such as `Pendahuluan`, `Metodologi`, `Hasil`, or `Penutup`.
- `citations` - exact citation labels used by `ReferencePreview`.
- `bodyText` - plain text version for search and summary.
- `images` - image paths used by the slide, if any.
- `html` - the actual rendered 16:9 slide HTML.

Clickable/editable text or cards should include stable `data-edit-id` attributes. Existing managed card classes include `.card`, `.callout`, `.metric`, `.profile-card`, `.controller-card`, and `.gui-callout`.

Use APA citation spans inside HTML:

```html
<p data-edit-id="s2-p1">
  Klaim ringkas dari draft yang sudah punya rujukan
  <span class="cite">Author (2025)</span>.
</p>
```

The reference key is normalized by removing parentheses. Example:

- Slide citation: `Pratama (2025)`
- Key in `referencePdfs`: `Pratama 2025`

For each reference entry, include `citation`, `file`, `title`, `slides`, `page`, `articleUrl`, and preferably `bySlide`. Use `bySlide` to map each slide to the exact PDF page screenshot and keyword hits.

### `thesis.json`

Required top-level shape:

```json
{
  "summary": {},
  "blocks": [],
  "tables": []
}
```

Use `blocks` for draft paragraphs and headings. Every paragraph block should include `id`, `kind`, `index`, `style`, `headingLevel`, `section`, `text`, `searchText`, and `tokens`. This powers draft search, modal context, and replacement workflows.

When the proposal source changes, rebuild `thesis.json` from the draft rather than inventing paragraphs.

### `assets.json`

Required top-level shape:

```json
{
  "assets": []
}
```

Each asset requires `id`, `name`, `path`, `relativePath`, `kind`, and `size`.

Allowed `kind` values:

- `slide`
- `isometric`
- `gui`
- `reference`
- `logo`

Reference PDF page screenshots should not appear as insertable visual assets in the regular asset panel. Keep them in `referencePdfs.bySlide.image` and under `public/assets/reference-pdf-pages`.

## Slide Content Workflow

1. Read `docs/proposal` thoroughly.
2. Make a slide outline from the draft, not from memory.
3. Extract the core ideas for each slide:
   - one slide should communicate one main idea;
   - preserve the research logic from problem, method, implementation, evaluation, results, conclusion;
   - avoid vague or third-person filler such as "Pendahuluan menjelaskan bahwa...".
4. For every slide sub-title, provide at least one paragraph of content.
5. Every paragraph must cite an existing reference from the draft. The safest approach is to copy or lightly condense paragraphs that already contain citations.
6. Limit citations visually. Prefer one or two APA references per paragraph. Do not create uncited claims.
7. After drafting all slides, recap all references used by the deck and compare them with the draft bibliography.
8. Do not use fake references. If a paragraph has no real supporting reference, return to the draft and choose a better source paragraph.

## Reference Workflow

1. Extract the complete list of references used by slide paragraphs.
2. Download every referenced article or PDF.
3. Store PDFs in:

```text
code-snapshot/public/assets/reference-pdfs
```

4. For each slide citation, identify the exact page that supports the paragraph.
5. Capture or render the relevant page screenshot and store it in:

```text
code-snapshot/public/assets/reference-pdf-pages
```

6. Update `slides.json`:
   - `slides[n].citations` contains the visible citations.
   - `referencePdfs[key].file` points to the local PDF filename.
   - `referencePdfs[key].articleUrl` points to DOI, publisher page, or reliable source URL.
   - `referencePdfs[key].bySlide[slideIndex].page` records the page.
   - `referencePdfs[key].bySlide[slideIndex].image` records the page screenshot path.
   - `referencePdfs[key].bySlide[slideIndex].hits` records matching keywords from the paragraph.

## Image And Asset Workflow

Generate at least one candidate image for every slide, then decide whether it belongs on the final slide after visual validation.

Image style:

```text
3D isometric, slightly cartoonized, transparent background when possible, academic but not playful to the point of distraction.
```

Asset process:

1. Create or collect candidate images for each slide.
2. Save generated images under:

```text
code-snapshot/public/assets/generated-concept
```

3. Register every usable visual in `code-snapshot/public/data/assets.json`.
4. Use `kind: "isometric"` for generated 3D isometric images.
5. If a slide is already dense, skip the image for that slide after screenshot analysis and record why in the validation notes.
6. Do not add decorative images that weaken readability or cover citations.
7. Do not let reference page screenshots appear in the normal asset insertion panel.

## Building Slide HTML

The rendered slide is `slides[n].html`. Keep it compatible with the existing slide CSS and editor behavior.

Recommended structure:

```html
<section class="slide-shell">
  <nav class="chapter">
    <span class="chip active">Pendahuluan</span>
    <span class="chip">Metodologi</span>
    <span class="chip">Hasil</span>
  </nav>
  <header class="section-header">
    <p class="eyebrow">Label singkat</p>
    <h2 data-edit-id="s4-title">Judul Slide</h2>
  </header>
  <div class="two-column">
    <article class="card" data-edit-id="s4-card-1">
      <h3>Sub-judul</h3>
      <p>Paragraf bersitasi <span class="cite">Author (2025)</span>.</p>
    </article>
  </div>
</section>
```

Rules:

- Keep the slide 16:9 and readable.
- Use stable `data-edit-id` values.
- Keep titles short.
- Every sub-title gets at least one paragraph.
- Every paragraph gets a real citation.
- Do not pack too many bullets or dense tables into one slide.
- Split overloaded content into multiple slides instead of shrinking text.
- Use cards/callouts only when they clarify structure.

## Validation Workflow

Validate slide by slide. Do not claim the deck is done after only running a build.

From `code-snapshot`:

```powershell
npm ci
npm run build
npm run dev -- --port 5173
```

Open:

```text
http://127.0.0.1:5173/presentation/
```

For every slide:

1. Screenshot the slide.
2. Analyze the screenshot before moving on.
3. Check:
   - broken images;
   - clipped text;
   - overlapping cards, images, citations, or tooltips;
   - unreadable font size;
   - low contrast;
   - over-dense paragraphs;
   - missing citation chips;
   - reference modal accuracy;
   - whether the generated image helps or should be removed.
4. Fix the slide.
5. Screenshot it again.
6. Save evidence under `qa/`, for example:

```text
qa/slide-validation/slide-01.png
qa/slide-validation/slide-01-notes.md
```

After all slides:

1. Run a full 45-slide or full-deck render audit.
2. Check console errors.
3. Validate paragraph modal, reference preview, asset panel, layer movement, theme switching, fullscreen lock, and PDF export.
4. Recap:
   - slide count;
   - reference count;
   - downloaded PDF count;
   - generated asset count;
   - slides where image was intentionally skipped;
   - remaining risks.

The project culture from previous docs is:

```text
audit -> validate -> solve found problem -> re-audit -> revalidate
```

Follow that loop until screenshots and behavior are clean.
