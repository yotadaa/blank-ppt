# React Presenter Migration Handoff

Folder ini adalah paket konteks untuk memindahkan pekerjaan presenter skripsi ke agent/session berikutnya. Tujuan utamanya: agent baru bisa memahami kenapa presenter dipindah ke React, fitur apa saja yang diminta, apa yang sudah dibuat, apa yang masih perlu divalidasi, dan file mana yang harus disentuh.

## Lokasi Penting

- Workspace React asli: `C:\skripsi\outputs\manual-20260605-presenter-react\presentations\skripsi-presenter-react`
- Paket migrasi ini: `C:\skripsi\migration\react-presenter-migration`
- Snapshot kode: `C:\skripsi\migration\react-presenter-migration\code-snapshot`
- Source skripsi: `C:\skripsi\migration\react-presenter-migration\source-docs\Draft Skripsi F1E122037 Fix.docx`
- QA screenshots: `C:\skripsi\migration\react-presenter-migration\qa`
- Gambar konsep generated: `C:\skripsi\migration\react-presenter-migration\images\generated-concept`
- Plan awal: `C:\skripsi\migration\react-presenter-migration\planning\2026-06-05-react-presenter-editor.md`
- Daftar semua file yang dibutuhkan: `C:\skripsi\migration\react-presenter-migration\FILES_REQUIRED.md`
- Manifest lengkap semua file paket: `C:\skripsi\migration\react-presenter-migration\FULL_FILE_MANIFEST.txt`

## Ringkasan Proyek

User ingin presenter web skripsi dipindahkan ke React + Vite dalam workspace baru, tanpa mengganti presenter HTML lama. React dipilih untuk mengurangi beban halaman, membuat editing lebih modular, dan menambahkan fitur interaktif:

- navigasi slide dengan klik area kanan/kiri dan keyboard;
- transisi slide halus;
- modal detail saat paragraf/item slide diklik;
- tombol `Lihat di draft` untuk membuka konteks dari DOCX skripsi;
- tombol `Replace text` untuk mengganti teks slide dari seleksi teks draft;
- pemilihan beberapa potongan teks dari beberapa paragraf draft;
- asset library untuk insert/replace gambar;
- layer manager untuk posisi, ukuran, visibility, lock, delete, duplicate, dan z-index;
- theme/color scheme;
- fullscreen dari toolbar dan shortcut `F`/`Shift+F`;
- referensi maksimal dua sitasi APA per slide, dengan preview halaman PDF lokal;
- klik preview referensi membuka artikel/PDF di tab baru.

## Status Terakhir

Build React sudah berhasil.

Command terakhir yang berhasil:

```powershell
cd C:\skripsi\outputs\manual-20260605-presenter-react\presentations\skripsi-presenter-react
& 'C:\Program Files\nodejs\npm.cmd' run build
```

Hasil build terakhir:

```text
vite v6.4.3 building for production...
45 modules transformed.
dist/index.html                  0.45 kB
dist/assets/index-znsfhI7L.css  44.02 kB
dist/assets/index-DNa_mckY.js  174.03 kB / gzip 55.56 kB
built in 1.01s
```

QA fungsional terakhir sebelum fix extractor:

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

Catatan penting: setelah QA itu, ditemukan visual bug di cover, yaitu teks pembimbing overlap karena extractor `data-edit-id` merusak class seperti `card-icon`/`card-copy`. Bug extractor sudah diperbaiki dan `npm run extract:presenter` sudah dijalankan ulang, lalu `npm run build` berhasil. Namun screenshot visual setelah perbaikan extractor belum diulang sebelum user meminta paket migrasi ini.

## Isi Paket

`code-snapshot` berisi:

- `src/`: React app dan CSS.
- `scripts/`: extractor DOCX dan presenter lama.
- `public/data/`: `slides.json`, `thesis.json`, `assets.json`.
- `public/assets/`: aset gambar, reference PDF pages, PDF lokal, logo, GUI, isometric.
- config Vite/TypeScript/package.

Daftar file wajib per kategori ada di `FILES_REQUIRED.md`. Daftar seluruh file yang benar-benar ikut paket ada di `FULL_FILE_MANIFEST.txt`.

`qa` berisi screenshot validasi:

- `react-editor-desktop.png`
- `react-editor-modal.png`
- `react-editor-draft.png`
- `react-editor-replaced.png`
- `react-editor-layer.png`
- `react-editor-theme.png`
- `react-editor-visual-audit.json`

`images/generated-concept` berisi gambar konsep UI yang dibuat dengan image generation saat perencanaan React presenter.

## Cara Menjalankan dari Snapshot

```powershell
cd C:\skripsi\migration\react-presenter-migration\code-snapshot
& 'C:\Program Files\nodejs\npm.cmd' install
& 'C:\Program Files\nodejs\npm.cmd' run dev -- --port 5174
```

Buka:

```text
http://127.0.0.1:5174/
```

Build:

```powershell
& 'C:\Program Files\nodejs\npm.cmd' run build
```

## Catatan untuk Extractor

`scripts/extract_thesis.py` masih membaca DOCX dari path hardcoded:

```python
DOCX_PATH = Path(r"C:\skripsi\Draft Skripsi F1E122037 Fix.docx")
```

Jika agent baru bekerja murni dari folder migration, ubah path itu ke:

```python
DOCX_PATH = ROOT / "source-docs" / "Draft Skripsi F1E122037 Fix.docx"
```

atau jalankan dari workspace asli yang masih punya file `C:\skripsi\Draft Skripsi F1E122037 Fix.docx`.

`scripts/extract_presenter_data.js` membaca presenter lama dari:

```text
C:\skripsi\outputs\manual-20260605-presenter-web\presentations\skripsi-presenter-web\linux-portable\index.html
C:\skripsi\outputs\manual-20260604-123547\presentations\skripsi-deck-revisi\output\skripsi-deck-revisi-final.html
```

Kalau dua source lama itu tidak tersedia di environment baru, pakai `public/data/*.json` yang sudah disalin di snapshot.

## Known Issues / Risiko

- Visual QA setelah fix extractor belum diulang. Prioritas pertama agent baru: jalankan app, cek cover, modal, draft, layer, dan theme screenshots.
- `src/utils/exportState.ts` ada di plan awal tetapi belum dibuat. Export/import state sudah ada di `useEditorState.ts` + `Toolbar.tsx`. Boleh refactor kalau ingin mengikuti plan literal.
- Resize layer belum punya handle visual; saat ini resize via input `W` di LayerPanel.
- Asset alt/title fields dan snap-to-center/reset size belum diimplementasi.
- Draft matching masih berbasis search token, belum mapping eksak tiap slide paragraph ke lokasi DOCX.
- Reference preview memakai data `bySlide` dari presenter lama; validasi “halaman yang tepat” perlu dipertahankan jika slide text berubah besar.
- Browser plugin tidak tersedia/callable saat validasi; validasi dilakukan dengan `playwright-core` + Chrome lokal.

## Prioritas Agent Berikutnya

1. Jalankan app dari `code-snapshot` atau workspace asli.
2. Clear localStorage, buka slide 1, cek apakah teks pembimbing cover tidak overlap.
3. Ulang QA fungsional: slide count 45, modal, `Lihat di draft`, `Replace text`, insert asset layer, z-index, theme, fullscreen.
4. Buat screenshot montage baru setelah extractor fix.
5. Lanjutkan fitur yang belum lengkap: resize handles, snap-to-center, alt/title asset, mapping draft lebih presisi, dan export state file yang lebih formal.
