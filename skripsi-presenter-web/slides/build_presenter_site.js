const fs = require("fs");
const path = require("path");

const workspace = path.resolve(__dirname, "..");
const sourceWorkspace = path.resolve(
  "C:/skripsi/outputs/manual-20260604-123547/presentations/skripsi-deck-revisi"
);
const sourceHtml = path.join(sourceWorkspace, "output", "skripsi-deck-revisi-final.html");
const sourceAssets = path.join(sourceWorkspace, "assets");
const assetDir = path.join(workspace, "assets");
const outputDir = path.join(workspace, "output");
const portableDir = path.join(workspace, "linux-portable");
const referenceRecapPath = path.resolve(
  "C:/skripsi/outputs/manual-20260605-reference-pdfs/presentation_references_recap.json"
);
fs.mkdirSync(assetDir, { recursive: true });
fs.mkdirSync(outputDir, { recursive: true });

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) copyDir(from, to);
    else fs.copyFileSync(from, to);
  }
}

function esc(text) {
  return String(text ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function strip(html) {
  return String(html ?? "")
    .replace(/<script[\s\S]*?<\/script>/g, " ")
    .replace(/<style[\s\S]*?<\/style>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const slideCitationOverrides = {
  2: { "Pangestu et al., 2023": "Pratama, 2025" },
  4: { "Pangestu et al., 2023": "Pratama, 2025" },
  5: { "Pangestu et al., 2023": "Yazid, 2025" },
  7: { "Pangestu et al., 2023": "Noptrina et al., 2024" },
  17: {
    "Hartono & Zein, 2023": "Syahputra et al., 2024",
    "Hartono &amp; Zein, 2023": "Syahputra et al., 2024",
    "Pangestu et al., 2023": "Irfan et al., 2022"
  },
  18: { "Pangestu et al., 2023": "Syahputra et al., 2024" },
  37: { "Pangestu et al., 2023": "Yazid, 2025" },
  38: { "Pangestu et al., 2023": "Yazid, 2025" }
};

function normalizeSlideCitations(section, slideNo) {
  let normalized = String(section ?? "");
  const replacements = slideCitationOverrides[slideNo] || {};
  for (const [from, to] of Object.entries(replacements)) {
    normalized = normalized.split(from).join(to);
  }
  return normalized;
}

function citationKeyFromDisplay(citation) {
  return String(citation || "").replace(/[()]/g, "").replace(/\s+/g, " ").trim();
}

function encodeAssetPath(relativePath) {
  return relativePath
    .split("/")
    .map((part, index) => index === 0 || part === ".." ? part : encodeURIComponent(part))
    .join("/");
}

function copyReferencePdfs() {
  if (!fs.existsSync(referenceRecapPath)) return {};
  const recap = JSON.parse(fs.readFileSync(referenceRecapPath, "utf8"));
  const pdfDir = path.join(assetDir, "reference-pdfs");
  fs.rmSync(pdfDir, { recursive: true, force: true });
  fs.mkdirSync(pdfDir, { recursive: true });
  const urlsByKey = {};
  for (const item of recap.items || []) {
    const pdfInfo = item.pdf || {};
    if (pdfInfo.status !== "available" || !pdfInfo.path || !fs.existsSync(pdfInfo.path)) continue;
    const fileName = path.basename(pdfInfo.path);
    fs.copyFileSync(pdfInfo.path, path.join(pdfDir, fileName));
    const href = encodeAssetPath("../assets/reference-pdfs/" + fileName);
    const key = citationKeyFromDisplay(item.citation);
    urlsByKey[key] = href;
    urlsByKey[key.replace(/&/g, "&amp;")] = href;
  }
  return urlsByKey;
}

function filterReferenceMap(referencePdfMap, slides, articleUrlsByKey) {
  const usedKeys = new Set();
  for (const slide of slides) {
    for (const citation of slide.citations || []) {
      const key = citationKeyFromDisplay(citation);
      usedKeys.add(key);
      usedKeys.add(key.replace(/&/g, "&amp;"));
    }
  }
  const filtered = {};
  for (const [key, entry] of Object.entries(referencePdfMap || {})) {
    if (!usedKeys.has(key)) continue;
    if ((entry.status || "available") === "missing" || !entry.image) continue;
    const articleUrl = articleUrlsByKey[key] || articleUrlsByKey[key.replace(/&amp;/g, "&")];
    filtered[key] = Object.assign({}, entry, articleUrl ? { articleUrl } : {});
  }
  return filtered;
}

function applyReferencePageOverrides(referencePdfMap) {
  const zhou = referencePdfMap["Zhou et al., 2020"];
  if (zhou) {
    zhou.bySlide = Object.assign({}, zhou.bySlide, {
      44: {
        status: "available",
        page: 5,
        image: "../assets/reference-pdf-pages/zhou-et-al-2020-slide-44-page-05.jpg",
        score: 91.4,
        hits: ["greedy", "selection", "mutation", "crossover", "population", "task", "scheduling"],
        slideTitle: "Kesimpulan Utama dan Saran Pengembangan"
      }
    });
  }
  const han = referencePdfMap["Han & Xiao, 2022"] || referencePdfMap["Han &amp; Xiao, 2022"];
  if (han) {
    han.bySlide = Object.assign({}, han.bySlide, {
      40: {
        status: "available",
        page: 4,
        image: "../assets/reference-pdf-pages/han-xiao-2022-slide-40-page-04.jpg",
        score: 64,
        hits: ["adaptive", "crossover", "probability", "fitness", "mutation", "algorithm"],
        slideTitle: "Classic GA vs Fuzzy GA"
      }
    });
  }
  const mahmoudinazlou = referencePdfMap["Mahmoudinazlou & Kwon, 2024"] || referencePdfMap["Mahmoudinazlou &amp; Kwon, 2024"];
  if (mahmoudinazlou) {
    mahmoudinazlou.bySlide = Object.assign({}, mahmoudinazlou.bySlide, {
      22: {
        status: "available",
        page: 26,
        image: "../assets/reference-pdf-pages/mahmoudinazlou-kwon-2024-slide-22-page-26.jpg",
        score: 47,
        hits: ["hybrid", "genetic", "algorithm", "local", "search", "performance", "min-max"],
        slideTitle: "Evaluasi Kinerja Hybrid Genetic Algorithm"
      }
    });
  }
  return referencePdfMap;
}

function attr(text) {
  return esc(text).replace(/'/g, "&#39;");
}

function readDeck() {
  const html = fs.readFileSync(sourceHtml, "utf8");
  const style = (html.match(/<style>([\s\S]*?)<\/style>/) || [null, ""])[1];
  const sections = html.match(/<section class="slide[\s\S]*?<\/section>/g) || [];
  if (sections.length !== 45) {
    throw new Error(`Expected 45 slides, found ${sections.length}`);
  }
  const slides = sections.map((section, index) => {
    const normalizedSection = normalizeSlideCitations(section, index + 1);
    const title = strip((normalizedSection.match(/<h1>([\s\S]*?)<\/h1>/) || [null, `Slide ${index + 1}`])[1]);
    const chapter = strip((normalizedSection.match(/<span class="chip active">([\s\S]*?)<\/span>/) || [null, "Pendahuluan"])[1]);
    const citations = [...normalizedSection.matchAll(/<span class="cite">([\s\S]*?)<\/span>/g)]
      .map((m) => strip(m[1]))
      .filter(Boolean)
      .slice(0, 2);
    const images = [...normalizedSection.matchAll(/<img[^>]+src="([^"]+)"[^>]*>/g)]
      .map((m) => m[1])
      .filter((src) => !/logo-unja\.png/i.test(src));
    const bodyText = strip(normalizedSection);
    const patched = normalizedSection.replace(
      /<section class="([^"]*)"/,
      `<section class="$1${index === 0 ? " active" : ""}" data-slide="${index + 1}" data-title="${attr(title)}" data-chapter="${attr(chapter)}" aria-hidden="${index === 0 ? "false" : "true"}"`
    );
    return { index: index + 1, title, chapter, citations, images, bodyText, html: patched };
  });
  return { style, slides };
}

function build() {
  copyDir(sourceAssets, assetDir);
  const referencePdfPath = path.join(assetDir, "reference-pdf-pages", "reference-pdf-map.json");
  const referencePdfMap = fs.existsSync(referencePdfPath)
    ? JSON.parse(fs.readFileSync(referencePdfPath, "utf8"))
    : {};
  const { style, slides } = readDeck();
  const articleUrlsByKey = copyReferencePdfs();
  const embeddedReferencePdfMap = applyReferencePageOverrides(
    filterReferenceMap(referencePdfMap, slides, articleUrlsByKey)
  );
  const chapters = ["Pendahuluan", "Tinjauan", "Metodologi", "Hasil", "Penutup"];
  const output = `<!doctype html>
<html lang="id">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" href="data:,">
  <title>Presenter Web - Optimasi Penjadwalan Praktikum</title>
  <style>
${style}

html, body {
  margin: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background:
    radial-gradient(circle at 12% 100%, rgba(172, 255, 231, .34), transparent 33%),
    radial-gradient(circle at 86% 14%, rgba(125, 211, 252, .35), transparent 36%),
    linear-gradient(135deg, #f8fbff 0%, #eaf6ff 100%);
  color: #0f172a;
}

body.presenter-ready {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
}

.presenter-app {
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
}

.stage-shell {
  position: relative;
  width: calc(1536px * var(--stage-scale, 1));
  height: calc(864px * var(--stage-scale, 1));
  filter: drop-shadow(0 28px 70px rgba(15, 23, 42, .18));
}

.stage-canvas {
  position: absolute;
  left: 0;
  top: 0;
  width: 16in;
  height: 9in;
  transform: scale(var(--stage-scale, 1));
  transform-origin: top left;
}

.stage-shell .slide {
  position: absolute !important;
  inset: 0;
  margin: 0 !important;
  box-shadow: none !important;
  opacity: 0;
  pointer-events: none;
  transform: translate3d(0, 0, 0) scale(.982);
  transition:
    opacity 430ms cubic-bezier(.2, .84, .22, 1),
    transform 560ms cubic-bezier(.2, .84, .22, 1),
    filter 560ms cubic-bezier(.2, .84, .22, 1);
  will-change: opacity, transform, filter;
}

.stage-shell .slide.active {
  opacity: 1;
  pointer-events: auto;
  transform: translate3d(0, 0, 0) scale(1);
  filter: none;
  z-index: 2;
}

.stage-shell .slide.enter-next { transform: translate3d(4.2%, 0, 0) scale(.982); }
.stage-shell .slide.enter-prev { transform: translate3d(-4.2%, 0, 0) scale(.982); }
.stage-shell .slide.exit-next { transform: translate3d(-4.2%, 0, 0) scale(.982); opacity: 0; filter: blur(2px); }
.stage-shell .slide.exit-prev { transform: translate3d(4.2%, 0, 0) scale(.982); opacity: 0; filter: blur(2px); }

.stage-shell .topbar .chapter {
  visibility: hidden;
}

.stage-nav {
  position: absolute;
  top: .58in;
  left: 50%;
  z-index: 30;
  display: flex;
  gap: .07in;
  padding: .045in;
  border-radius: 999px;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, .56);
  border: 1px solid rgba(148, 163, 184, .34);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .10), inset 0 1px 0 rgba(255, 255, 255, .8);
  backdrop-filter: blur(14px);
}

.stage-nav .nav-glider {
  position: absolute;
  top: .045in;
  bottom: .045in;
  left: var(--nav-left, .045in);
  width: var(--nav-width, .74in);
  border-radius: 999px;
  background: #0f172a;
  box-shadow: 0 11px 24px rgba(15, 23, 42, .24);
  transition: left 480ms cubic-bezier(.2, .84, .22, 1), width 480ms cubic-bezier(.2, .84, .22, 1);
}

.stage-nav button {
  position: relative;
  z-index: 1;
  border: 0;
  background: transparent;
  color: #64748b;
  font: 900 .095in/1 Inter, ui-sans-serif, system-ui, sans-serif;
  padding: .08in .16in;
  border-radius: 999px;
  cursor: pointer;
  transition: color 260ms ease, transform 260ms ease;
}

.stage-nav button:hover { transform: translateY(-1px); color: #0f766e; }
.stage-nav button.active { color: #fff; }
.stage-nav button:focus { outline: none; }
.stage-nav button:focus-visible {
  outline: 2px solid rgba(20, 184, 166, .55);
  outline-offset: 2px;
}

.presenter-progress {
  position: absolute;
  left: .72in;
  right: .72in;
  bottom: .18in;
  z-index: 25;
  height: .028in;
  border-radius: 999px;
  overflow: hidden;
  background: rgba(148, 163, 184, .20);
}

.presenter-progress span {
  display: block;
  height: 100%;
  width: var(--progress, 2.2%);
  border-radius: inherit;
  background: linear-gradient(90deg, #14b8a6, #60a5fa, #a3e635);
  transition: width 520ms cubic-bezier(.2, .84, .22, 1);
}

.floating-control {
  position: fixed;
  z-index: 40;
  top: 50%;
  width: 46px;
  height: 86px;
  margin-top: -43px;
  border: 1px solid rgba(148, 163, 184, .34);
  border-radius: 999px;
  background: rgba(255, 255, 255, .54);
  box-shadow: 0 18px 45px rgba(15, 23, 42, .10);
  color: #0f172a;
  font-size: 34px;
  line-height: 1;
  cursor: pointer;
  opacity: .34;
  backdrop-filter: blur(14px);
  transition: opacity 220ms ease, transform 220ms ease, background 220ms ease;
}

.floating-control:hover {
  opacity: .98;
  transform: translateY(-1px) scale(1.02);
  background: rgba(255, 255, 255, .84);
}

.floating-control.prev { left: 16px; }
.floating-control.next { right: 16px; }

.edge-zone {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 36;
  width: 16vw;
  min-width: 84px;
  border: 0;
  padding: 0;
  cursor: pointer;
  opacity: 0;
  transition: opacity 220ms ease;
}

.edge-zone.left {
  left: 0;
  background: linear-gradient(90deg, rgba(14, 165, 233, .18), transparent);
}

.edge-zone.right {
  right: 0;
  background: linear-gradient(270deg, rgba(20, 184, 166, .18), transparent);
}

.edge-zone:hover { opacity: 1; }

.slide-counter {
  position: fixed;
  right: 18px;
  bottom: 14px;
  z-index: 40;
  color: #64748b;
  font: 900 12px/1 Inter, ui-sans-serif, system-ui, sans-serif;
  letter-spacing: .18em;
  text-transform: uppercase;
  background: rgba(255, 255, 255, .58);
  border: 1px solid rgba(148, 163, 184, .30);
  border-radius: 999px;
  padding: 10px 13px;
  backdrop-filter: blur(14px);
}

.stage-shell .subdesc,
.stage-shell .card,
.stage-shell .metric,
.stage-shell .step,
.stage-shell .flow-node,
.stage-shell .pipeline-stage,
.stage-shell .gene,
.stage-shell .controller-card,
.stage-shell .gui-callout,
.stage-shell .screen-frame,
.stage-shell .image-box,
.stage-shell .comparison,
.stage-shell .result-table,
.stage-shell .kpi-card,
.stage-shell .agenda-card,
.stage-shell .cite,
.stage-shell p {
  cursor: pointer;
}

.stage-shell .subdesc:hover,
.stage-shell .card:hover,
.stage-shell .metric:hover,
.stage-shell .step:hover,
.stage-shell .flow-node:hover,
.stage-shell .pipeline-stage:hover,
.stage-shell .gene:hover,
.stage-shell .controller-card:hover,
.stage-shell .gui-callout:hover,
.stage-shell .screen-frame:hover,
.stage-shell .image-box:hover,
.stage-shell .comparison:hover,
.stage-shell .result-table:hover,
.stage-shell .kpi-card:hover,
.stage-shell .agenda-card:hover {
  outline: 2px solid rgba(20, 184, 166, .24);
  outline-offset: 5px;
}

.detail-backdrop {
  position: fixed;
  inset: 0;
  z-index: 80;
  display: none;
  background: rgba(15, 23, 42, .34);
  backdrop-filter: blur(8px);
}

.detail-backdrop.open {
  display: block;
  animation: fadeIn 220ms ease both;
}

.detail-panel {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 90;
  width: min(1080px, calc(100vw - 72px));
  max-height: min(840px, calc(100vh - 56px));
  display: none;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, .34);
  border-radius: 24px;
  background: rgba(255, 255, 255, .92);
  box-shadow: 0 34px 90px rgba(15, 23, 42, .28);
  transform: translate(-50%, -50%);
  backdrop-filter: blur(18px);
}

.detail-panel.open {
  display: flex;
  flex-direction: column;
  animation: detailIn 300ms cubic-bezier(.2, .84, .22, 1) both;
}

.detail-head {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 24px 28px 18px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
}

.detail-badge {
  display: grid;
  place-items: center;
  width: 42px;
  height: 42px;
  flex: 0 0 42px;
  border-radius: 14px;
  color: #0f766e;
  background: linear-gradient(135deg, rgba(204, 251, 241, .95), rgba(219, 234, 254, .95));
}

.detail-badge svg { width: 23px; height: 23px; }

.detail-kicker {
  color: #0f766e;
  font-size: 11px;
  font-weight: 950;
  letter-spacing: .16em;
  text-transform: uppercase;
}

.detail-title {
  margin: 4px 0 0;
  color: #0f172a;
  font-size: clamp(25px, 2.25vw, 34px);
  line-height: 1.1;
  font-weight: 950;
}

.detail-close {
  margin-left: auto;
  border: 0;
  width: 34px;
  height: 34px;
  border-radius: 999px;
  background: #f1f5f9;
  color: #334155;
  cursor: pointer;
  font-size: 22px;
  line-height: 1;
}

.detail-body {
  overflow: auto;
  padding: 20px 28px 26px;
}

.detail-body h4 {
  margin: 16px 0 8px;
  color: #0f172a;
  font-size: 13px;
  letter-spacing: .10em;
  text-transform: uppercase;
}

.detail-body p {
  margin: 0;
  color: #475569;
  font-size: 16px;
  line-height: 1.55;
}

.slide-evidence {
  display: grid;
  grid-template-columns: minmax(180px, .82fr) 1.18fr;
  gap: 14px;
  margin: 2px 0 16px;
}

.slide-evidence-page,
.slide-evidence-quote {
  border: 1px solid rgba(148, 163, 184, .28);
  border-radius: 18px;
  background: linear-gradient(135deg, #fff, #f8fafc 58%, rgba(224, 242, 254, .62));
  box-shadow: 0 14px 34px rgba(15, 23, 42, .07);
}

.slide-evidence-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 138px;
  padding: 18px;
}

.slide-page-label {
  color: #0f766e;
  font-size: 12px;
  font-weight: 950;
  letter-spacing: .14em;
  text-transform: uppercase;
}

.slide-page-number {
  margin-top: 8px;
  color: #0f172a;
  font-size: clamp(36px, 4.3vw, 58px);
  line-height: .92;
  font-weight: 950;
}

.slide-page-title {
  margin-top: 10px;
  color: #475569;
  font-size: 14px;
  line-height: 1.35;
  font-weight: 850;
}

.slide-evidence-quote {
  padding: 18px 20px;
}

.slide-evidence-quote strong {
  display: block;
  margin-bottom: 8px;
  color: #0f172a;
  font-size: 15px;
  font-weight: 950;
}

.slide-evidence-quote p {
  color: #334155;
  font-size: 17px;
  line-height: 1.48;
}

.ref-row {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 10px;
}

.ref-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  background: #fef3c7;
  border: 1px solid rgba(217, 119, 6, .28);
  color: #7c2d12;
  font-size: 13px;
  font-weight: 900;
}

.detail-media {
  margin-top: 16px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, .28);
  border-radius: 18px;
  background: linear-gradient(135deg, rgba(241, 245, 249, .9), rgba(240, 253, 250, .9));
}

.detail-media img {
  display: block;
  width: 100%;
  max-height: 260px;
  object-fit: contain;
}

.pdf-preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  gap: 16px;
  margin-top: 14px;
}

.pdf-preview-card {
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, .32);
  border-radius: 18px;
  background: #f8fafc;
  box-shadow: 0 14px 36px rgba(15, 23, 42, .08);
}

.pdf-preview-card.clickable {
  transition: border-color 180ms ease, box-shadow 180ms ease, transform 180ms ease;
}

.pdf-preview-card.clickable:hover {
  border-color: rgba(20, 184, 166, .55);
  box-shadow: 0 20px 44px rgba(15, 23, 42, .13);
  transform: translateY(-1px);
}

.pdf-preview-card.missing {
  background: linear-gradient(135deg, #fff7ed, #fff 54%, #f8fafc);
  border-color: rgba(251, 146, 60, .38);
}

.pdf-preview-head {
  padding: 13px 15px;
  border-bottom: 1px solid rgba(148, 163, 184, .22);
  background: rgba(255, 255, 255, .74);
}

.pdf-preview-meta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  margin-bottom: 7px;
}

.pdf-preview-cite {
  display: inline-flex;
  border-radius: 999px;
  padding: 5px 9px;
  background: #fef3c7;
  border: 1px solid rgba(217, 119, 6, .28);
  color: #7c2d12;
  font-size: 12px;
  font-weight: 950;
}

.pdf-preview-slide {
  border-radius: 999px;
  padding: 5px 9px;
  background: rgba(204, 251, 241, .72);
  color: #0f766e;
  font-size: 11px;
  font-weight: 950;
  white-space: nowrap;
}

.pdf-preview-title {
  color: #0f172a;
  font-size: 14px;
  line-height: 1.35;
  font-weight: 850;
}

.pdf-preview-page {
  position: relative;
  max-height: min(46vh, 480px);
  overflow: auto;
  background: #e5e7eb;
}

.pdf-preview-link {
  display: block;
  position: relative;
  color: inherit;
  text-decoration: none;
}

.pdf-preview-link::after {
  content: "Buka artikel PDF";
  position: sticky;
  left: 12px;
  bottom: 12px;
  z-index: 2;
  display: inline-flex;
  margin: 0 0 12px 12px;
  border-radius: 999px;
  padding: 7px 11px;
  background: rgba(15, 23, 42, .88);
  color: #fff;
  font-size: 12px;
  line-height: 1;
  font-weight: 950;
  box-shadow: 0 12px 28px rgba(15, 23, 42, .22);
  opacity: .88;
}

.pdf-preview-link:focus-visible {
  outline: 3px solid rgba(20, 184, 166, .64);
  outline-offset: -3px;
}

.pdf-preview-score {
  padding: 8px 14px 10px;
  color: #64748b;
  font-size: 12px;
  line-height: 1.35;
  background: rgba(255, 255, 255, .72);
  border-top: 1px solid rgba(148, 163, 184, .22);
}

.pdf-preview-page img {
  display: block;
  width: 100%;
  height: auto;
}

.pdf-preview-empty {
  min-height: 220px;
  padding: 22px 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 9px;
  color: #7c2d12;
  background:
    radial-gradient(circle at 80% 20%, rgba(254, 215, 170, .52), transparent 30%),
    linear-gradient(135deg, #fff7ed, #fff);
}

.pdf-preview-empty strong {
  color: #7c2d12;
  font-size: 17px;
  font-weight: 950;
}

.pdf-preview-empty p {
  color: #9a3412;
  font-size: 14px;
  line-height: 1.46;
}

.detail-table {
  width: 100%;
  margin-top: 14px;
  border-collapse: separate;
  border-spacing: 0;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, .28);
  border-radius: 15px;
  font-size: 13px;
}

.detail-table th,
.detail-table td {
  padding: 10px 12px;
  text-align: left;
  vertical-align: top;
  border-bottom: 1px solid rgba(148, 163, 184, .20);
}

.detail-table th {
  background: #f8fafc;
  color: #0f172a;
  font-weight: 950;
}

.detail-table tr:last-child td { border-bottom: 0; }

.detail-tip {
  margin-top: 14px;
  border-radius: 14px;
  padding: 12px 13px;
  background: rgba(204, 251, 241, .58);
  color: #0f766e;
  font-weight: 850;
  font-size: 13px;
  line-height: 1.4;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes detailIn {
  from { opacity: 0; transform: translate(-50%, -47%) scale(.97); }
  to { opacity: 1; transform: translate(-50%, -50%) scale(1); }
}

@media (max-width: 760px) {
  .presenter-app {
    place-items: start center;
    padding-top: 18px;
    box-sizing: border-box;
  }

  .floating-control { display: none; }
  .detail-panel {
    left: 12px;
    right: 12px;
    top: 50%;
    bottom: auto;
    width: auto;
    max-height: calc(100vh - 28px);
    transform: translateY(-50%);
  }
  .detail-panel.open { animation: mobileDetailIn 260ms cubic-bezier(.2, .84, .22, 1) both; }
  .detail-head { padding: 18px 18px 14px; }
  .detail-body { padding: 16px 18px 20px; }
  .slide-evidence { grid-template-columns: 1fr; }
  .pdf-preview-grid { grid-template-columns: 1fr; }
  .slide-counter { left: 12px; right: auto; bottom: 14px; }
}

@keyframes mobileDetailIn {
  from { opacity: 0; transform: translateY(calc(-50% + 18px)) scale(.98); }
  to { opacity: 1; transform: translateY(-50%) scale(1); }
}

@media (prefers-reduced-motion: reduce) {
  .stage-shell .slide,
  .stage-nav .nav-glider,
  .presenter-progress span,
  .detail-panel.open,
  .detail-backdrop.open {
    transition: none !important;
    animation: none !important;
  }
}
  </style>
</head>
<body class="presenter-ready">
  <div class="presenter-app" id="presenterApp">
    <button class="edge-zone left" id="edgePrev" aria-label="Area slide sebelumnya"></button>
    <button class="edge-zone right" id="edgeNext" aria-label="Area slide selanjutnya"></button>
    <button class="floating-control prev" id="prevBtn" aria-label="Slide sebelumnya">&lsaquo;</button>
    <div class="stage-shell" id="stageShell">
      <div class="stage-canvas" id="stageCanvas">
        <nav class="stage-nav" id="stageNav" aria-label="Navigasi bab">
          <span class="nav-glider" id="navGlider"></span>
          ${chapters.map((chapter) => `<button type="button" data-chapter="${attr(chapter)}">${esc(chapter)}</button>`).join("")}
        </nav>
        <div class="presenter-progress" aria-hidden="true"><span id="progressBar"></span></div>
        ${slides.map((s) => s.html).join("\n")}
      </div>
    </div>
    <button class="floating-control next" id="nextBtn" aria-label="Slide selanjutnya">&rsaquo;</button>
    <div class="slide-counter" id="slideCounter">SLIDE 01</div>
  </div>
  <div class="detail-backdrop" id="detailBackdrop"></div>
  <aside class="detail-panel" id="detailPanel" aria-live="polite" aria-modal="true" role="dialog">
    <div class="detail-head">
      <div class="detail-badge" id="detailIcon"></div>
      <div>
        <div class="detail-kicker" id="detailKicker">Konteks</div>
        <h2 class="detail-title" id="detailTitle">Detail</h2>
      </div>
      <button type="button" class="detail-close" id="detailClose" aria-label="Tutup detail">&times;</button>
    </div>
    <div class="detail-body" id="detailBody"></div>
  </aside>
  <script>
    window.PRESENTER_SLIDES = ${JSON.stringify(slides.map(({ html, ...rest }) => rest))};
    window.PRESENTER_REFERENCE_PDFS = ${JSON.stringify(embeddedReferencePdfMap)};
  </script>
  <script>
${clientScript()}
  </script>
</body>
</html>`;

  const outputPath = path.join(outputDir, "skripsi-presenter-web.html");
  fs.writeFileSync(outputPath, output, "utf8");

  fs.rmSync(portableDir, { recursive: true, force: true });
  fs.mkdirSync(portableDir, { recursive: true });
  copyDir(assetDir, path.join(portableDir, "assets"));
  const portableOutput = output.replace(/\.\.\/assets\//g, "assets/");
  const portablePath = path.join(portableDir, "index.html");
  fs.writeFileSync(portablePath, portableOutput, "utf8");
  fs.writeFileSync(
    path.join(portableDir, "README-LINUX.txt"),
    [
      "Portable Linux presenter bundle",
      "",
      "Buka index.html dari folder ini. Semua gambar memakai path relatif POSIX assets/...",
      "Tidak ada dependency ke path Windows seperti C:\\\\ atau file:///C:/.",
      "",
      "Opsi paling aman di Linux:",
      "  cd /path/ke/linux-portable",
      "  python3 -m http.server 8000",
      "  buka http://127.0.0.1:8000/",
      "",
      "Bisa juga dibuka langsung dari file manager/browser karena semua aset berada dalam folder ini."
    ].join("\n"),
    "utf8"
  );

  fs.writeFileSync(path.join(workspace, "WORKSPACE_PATH.txt"), workspace, "utf8");
  console.log(outputPath);
  console.log(portablePath);
}

function clientScript() {
  return String.raw`
const SLIDES = window.PRESENTER_SLIDES;
const REFERENCE_PDFS = window.PRESENTER_REFERENCE_PDFS || {};
const CHAPTERS = ["Pendahuluan", "Tinjauan", "Metodologi", "Hasil", "Penutup"];
const ICONS = {
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5A2.25 2.25 0 0 1 5.25 5.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75Zm0-7.5h18" /></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" /></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375" /></svg>',
  sliders: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" /></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751A11.959 11.959 0 0 1 12 2.714Z" /></svg>',
  spark: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" /></svg>'
};

const shell = document.getElementById("stageShell");
const stage = document.getElementById("stageCanvas");
const slideEls = [...stage.querySelectorAll(".slide")];
const nav = document.getElementById("stageNav");
const navButtons = [...nav.querySelectorAll("button")];
const progress = document.getElementById("progressBar");
const counter = document.getElementById("slideCounter");
const panel = document.getElementById("detailPanel");
const backdrop = document.getElementById("detailBackdrop");
const detailIcon = document.getElementById("detailIcon");
const detailKicker = document.getElementById("detailKicker");
const detailTitle = document.getElementById("detailTitle");
const detailBody = document.getElementById("detailBody");
let current = readInitialSlide();
let animating = false;

function pad(num) {
  return String(num).padStart(2, "0");
}

function readInitialSlide() {
  const match = location.hash.match(/slide-(\d+)/i);
  const value = match ? Number(match[1]) - 1 : 0;
  return Number.isFinite(value) ? Math.max(0, Math.min(SLIDES.length - 1, value)) : 0;
}

function fitStage() {
  const baseW = 1536;
  const baseH = 864;
  const scale = Math.min((innerWidth - 22) / baseW, (innerHeight - 22) / baseH, 1.12);
  shell.style.setProperty("--stage-scale", Math.max(.22, scale).toFixed(4));
}

function setNav(chapter) {
  navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.chapter === chapter);
  });
  const active = navButtons.find((button) => button.dataset.chapter === chapter) || navButtons[0];
  const navRect = nav.getBoundingClientRect();
  const buttonRect = active.getBoundingClientRect();
  const scale = Number(getComputedStyle(shell).getPropertyValue("--stage-scale")) || 1;
  nav.style.setProperty("--nav-left", ((buttonRect.left - navRect.left) / scale) + "px");
  nav.style.setProperty("--nav-width", (buttonRect.width / scale) + "px");
}

function setSlide(next, direction = 1, replaceHash = false) {
  next = Math.max(0, Math.min(SLIDES.length - 1, next));
  if (next === current && slideEls[next].classList.contains("active")) {
    syncUi();
    return;
  }
  if (animating) return;
  animating = true;
  closeDetail();
  const prev = slideEls[current];
  const incoming = slideEls[next];
  prev.classList.remove("active", "enter-next", "enter-prev", "exit-next", "exit-prev");
  incoming.classList.remove("active", "enter-next", "enter-prev", "exit-next", "exit-prev");
  incoming.classList.add(direction > 0 ? "enter-next" : "enter-prev");
  incoming.setAttribute("aria-hidden", "false");
  requestAnimationFrame(() => {
    prev.classList.add(direction > 0 ? "exit-next" : "exit-prev");
    incoming.classList.add("active");
    incoming.classList.remove("enter-next", "enter-prev");
    prev.setAttribute("aria-hidden", "true");
  });
  current = next;
  syncUi(replaceHash);
  window.setTimeout(() => {
    slideEls.forEach((slide, index) => {
      if (index !== current) slide.classList.remove("active", "enter-next", "enter-prev", "exit-next", "exit-prev");
    });
    animating = false;
  }, 620);
}

function syncUi(replaceHash = false) {
  const meta = SLIDES[current];
  setNav(meta.chapter);
  progress.style.width = (((current + 1) / SLIDES.length) * 100).toFixed(2) + "%";
  counter.textContent = "SLIDE " + pad(current + 1);
  const hash = "#slide-" + (current + 1);
  if (location.hash !== hash) {
    if (replaceHash) history.replaceState(null, "", hash);
    else history.pushState(null, "", hash);
  }
}

function nextSlide() { setSlide(current + 1, 1); }
function prevSlide() { setSlide(current - 1, -1); }

function chapterStart(chapter) {
  const index = SLIDES.findIndex((slide) => slide.chapter === chapter);
  if (index >= 0) setSlide(index, index > current ? 1 : -1);
}

function activeSlide() {
  return slideEls[current];
}

function textOf(node) {
  return (node?.innerText || node?.textContent || "").replace(/\s+/g, " ").trim();
}

function normalizeAsset(src) {
  if (!src) return "";
  return src.replace(/^(\.\.\/)+assets\//, "../assets/");
}

function refsFor(slide, seedText) {
  const slideNo = Number(slide?.dataset?.slide || current + 1);
  const refs = [...slide.querySelectorAll(".subdesc .cite, .cite")]
    .map((node) => textOf(node))
    .filter(Boolean)
    .filter((value, index, array) => array.indexOf(value) === index)
    .filter((value) => !/Data penelitian|Hasil pengujian/i.test(value));
  const validRefs = refs
    .filter((ref) => {
      const entry = referenceEntryFor(ref, slideNo);
      return entry && entry.status !== "missing" && entry.image;
    });
  if (validRefs.length) return validRefs.slice(0, 2);
  const text = seedText.toLowerCase();
  if (/fuzzy|cr|mr|controller/.test(text)) return ["(Subburaj & Miruna Joe Amali, 2025)", "(Pytel, 2025)"];
  if (/jadwal|penjadwalan|praktikum/.test(text)) return ["(Syahputra et al., 2024)", "(Noptrina et al., 2024)"];
  if (/genetika|kromosom|crossover|mutasi/.test(text)) return ["(Triyono & Kusrini, 2024)", "(Zhou et al., 2020)"];
  return ["(Yazid, 2025)", "(Pratama, 2025)"];
}

function contextFor(seedText, slideTitle) {
  const text = (seedText + " " + slideTitle).toLowerCase();
  if (/agenda presentasi/.test(slideTitle.toLowerCase())) {
    return "Agenda menjadi peta alur presentasi dari masalah penelitian sampai kesimpulan dan sesi tanya jawab. Item terpilih menunjukkan posisi pembahasan dalam struktur skripsi.";
  }
  if (/greedy|post-processing|fallback|repair|konflik residual|local placement|scan final population/.test(text)) {
    return "Repair dan Greedy post-processing ditempatkan sebagai tahap penyempurnaan akhir. Jadwal terbaik diperiksa kembali, konflik residual seperti ruang, mata kuliah tatap muka/teori, asisten, dan kelompok dideteksi, lalu kandidat pengganti dicari tanpa menjalankan ulang seluruh optimasi.";
  }
  if (/cr\b|mr\b|mengatur cr|mengatur mr|diversity|stagnansi hasil crossover|crossover rate|mutation rate|pergerakan skor fitness|faktor pertumbuhan fitness|controller adaptif|adaptive controller/.test(text)) {
    return "Fuzzy Logic dipakai sebagai pengendali adaptif parameter GA. Crossover rate membaca diversity dan stagnansi hasil crossover untuk mengatur ruang eksplorasi; mutation rate membaca pergerakan skor fitness dari iterasi sebelumnya agar mutasi mengikuti faktor pertumbuhan fitness.";
  }
  if (/mata kuliah tatap muka|kuliah teori|konflik ruang tatap muka/.test(text)) {
    return "Dalam skripsi, konflik ruang tatap muka berarti jadwal mata praktikum bertabrakan dengan jadwal mata kuliah teori. Konflik ini dicatat sebagai pelanggaran dengan penalti menengah hingga tinggi karena mengganggu kelayakan jadwal.";
  }
  if (/classic ga|fuzzy ga|avg fitness|avg penalty|optimal run|stagnansi maksimum|perbandingan classic/.test(text)) {
    return "Perbandingan hasil digunakan untuk membaca performa Classic GA dan Fuzzy GA. Classic GA lebih kuat pada mayoritas metrik akhir, sedangkan Fuzzy GA membantu membaca stagnansi dan mengatur parameter selama proses evolusi.";
  }
  if (/algoritma genetika|genetic algorithm/.test(text) && !/classic|fuzzy ga/.test(text)) {
    return "Algoritma Genetika dipakai sebagai metode pencarian kombinasi jadwal. Populasi, fitness, seleksi, crossover, dan mutasi membantu sistem menjelajahi banyak kandidat jadwal secara bertahap.";
  }
  if (/hasil|rekap|peserta|ruangan|kelas|prodi/.test(text)) {
    return "Dataset praktikum FST memuat skala penjadwalan yang besar: program studi, mata praktikum, kelas, peserta, ruang, serta kebutuhan asisten harus dipadukan dalam kandidat jadwal yang layak.";
  }
  if (/gui|schedule|report|generated/.test(text)) {
    return "GUI dipakai agar proses optimasi dapat dikonfigurasi, dipantau, dan dievaluasi secara visual. Tampilan ini memperlihatkan konfigurasi, grafik evolusi fitness, dan jadwal akhir.";
  }
  if (/fuzzy|controller|rule|membership|variabel linguistik/.test(text)) {
    return "Fuzzy Logic diposisikan sebagai pengendali adaptif, bukan pengganti GA. Nilai linguistik dan rule base membantu mengubah kondisi proses pencarian menjadi pengaturan parameter yang lebih responsif.";
  }
  if (/kromosom|\bgen\b|representasi|populasi|seeder/.test(text)) {
    return "Dalam skripsi, satu kromosom merepresentasikan satu kandidat jadwal lengkap. Setiap gen menyimpan satu sesi praktikum beserta atribut mata praktikum, prodi, semester, peserta, ruang, hari, waktu, kelompok, dan asisten.";
  }
  if (/crossover|rekombinasi|parent|offspring/.test(text)) {
    return "Crossover merekombinasi dua parent untuk membentuk kandidat baru. Tujuannya mempertahankan bagian jadwal yang baik sambil membuka kombinasi ruang dan waktu yang lebih luas.";
  }
  if (/mutasi|keragaman|diversity/.test(text)) {
    return "Mutasi menjaga proses pencarian agar tidak cepat mandek. Sebagian atribut jadwal dapat diubah supaya populasi tetap beragam dan tidak terjebak pada solusi lokal.";
  }
  if (/konflik|validasi/.test(text)) {
    return "Validasi menjaga kandidat jadwal tetap layak setelah operator evolusi menghasilkan perubahan. Tahap ini memeriksa konflik ruang, kelompok, asisten, slot waktu, serta benturan mata praktikum dengan mata kuliah tatap muka/teori.";
  }
  if (/fitness|evaluasi|penalty/.test(text)) {
    return "Fitness function mengubah konflik jadwal menjadi nilai evaluasi. Konflik ruang, asisten, kelompok, serta benturan mata praktikum dengan mata kuliah tatap muka/teori menaikkan penalty; semakin kecil penalty, semakin tinggi kualitas kandidat jadwal.";
  }
  if (/pipeline|alur|kerangka/.test(text)) {
    return "Alur sistem menghubungkan data praktikum, representasi gen, pembentukan populasi, evaluasi fitness, operator GA, controller fuzzy, dan jadwal akhir yang ditampilkan melalui GUI.";
  }
  return "Konteks ini diambil dari struktur skripsi: penjadwalan praktikum diperlakukan sebagai masalah optimasi karena ruang, waktu, peserta, durasi, dan asisten harus dipadukan secara layak.";
}

function assetFor(seedText, slide) {
  const title = SLIDES[current].title;
  const text = (seedText + " " + title).toLowerCase();
  const clickedImage = slide.querySelector("img:hover, .image-box img, .screen-frame img");
  if (clickedImage && !/logo-unja\.png/i.test(clickedImage.getAttribute("src") || "")) {
    return normalizeAsset(clickedImage.getAttribute("src"));
  }
  const slideImages = SLIDES[current].images || [];
  if (slideImages.length) return normalizeAsset(slideImages[0]);
  if (/gui|schedule|jadwal akhir|report/.test(text)) return "../assets/gui-schedule-crop.jpg";
  if (/fitness|konvergensi|parameter|evolusi/.test(text)) return "../assets/gui-fitness-crop.jpg";
  if (/agenda presentasi/.test(title.toLowerCase())) return "../assets/isometric-scheduling.png";
  if (/kromosom|\bgen\b|crossover|mutation|mutasi|populasi/.test(text)) return "../assets/reference-html-images/ref-slide-28-img-36.webp";
  if (/fuzzy|controller|cr|mr/.test(text)) return "../assets/isometric-fuzzy-controller.png";
  if (/repair|konflik|validasi/.test(text)) return "../assets/reference-html-images/ref-slide-02-img-05.webp";
  if (/hasil|dashboard|rekap/.test(text)) return "../assets/reference-html-images/ref-slide-34-img-43.webp";
  if (/jadwal|penjadwalan|praktikum/.test(text)) return "../assets/isometric-scheduling.png";
  return "";
}

function tableFor(seedText, slideTitle) {
  const text = (seedText + " " + slideTitle).toLowerCase();
  if (/agenda presentasi/.test(slideTitle.toLowerCase())) {
    return {
      headers: ["Sesi", "Fokus"],
      rows: [
        ["Pendahuluan", "Masalah, tujuan, manfaat, dan kontribusi"],
        ["Tinjauan", "Penjadwalan, GA, fuzzy controller, dan penelitian terkait"],
        ["Metodologi", "Representasi gen, populasi, fitness, operator, dan pipeline"],
        ["Hasil", "Dataset, GUI, perbandingan Classic GA vs Fuzzy GA"],
        ["Penutup", "Kesimpulan, saran, dan tanya jawab"]
      ]
    };
  }
  if (/classic|fuzzy ga|perbandingan/.test(text)) {
    return {
      headers: ["Metrik", "Classic GA", "Fuzzy GA"],
      rows: [
        ["Optimal run", "19/20", "18/20"],
        ["Avg fitness", "0.9750", "0.9254"],
        ["Avg penalty", "0.05", "0.30"],
        ["Stagnansi", "16.75", "13.55"]
      ]
    };
  }
  if (/rekap|dataset|peserta|ruangan|prodi|kelas/.test(text)) {
    return {
      headers: ["Komponen", "Jumlah", "Makna"],
      rows: [
        ["Program studi", "15", "Sumber variasi kebutuhan praktikum"],
        ["Mata praktikum", "129", "Aktivitas yang perlu dijadwalkan"],
        ["Kelas", "216", "Unit kelompok peserta"],
        ["Peserta", "4.513", "Skala beban jadwal"],
        ["Ruangan", "32", "Sumber daya terbatas"]
      ]
    };
  }
  if (/fuzzy|cr|mr|rule/.test(text)) {
    return {
      headers: ["Parameter", "Input fuzzy", "Peran"],
      rows: [
        ["Crossover rate (Cr)", "Avg fitness, diversity, stagnansi crossover", "Mengatur intensitas rekombinasi dan eksplorasi"],
        ["Mutation rate (Mr)", "Delta fitness iterasi sebelumnya", "Menambah eksplorasi saat pertumbuhan fitness melemah"],
        ["Output", "Nilai crisp", "Dipakai kembali oleh operator GA"]
      ]
    };
  }
  if (/fitness|penalty|konflik/.test(text)) {
    return {
      headers: ["Konflik", "Dampak", "Arah penalty"],
      rows: [
        ["Bentrok ruang", "Ruang dipakai bersamaan", "Penalty naik"],
        ["Bentrok asisten", "Asisten bertugas di slot sama", "Penalty naik"],
        ["Mata kuliah tatap muka/teori", "Mata praktikum berbenturan dengan jadwal kuliah teori", "Penalty menengah-tinggi"],
        ["Slot tidak valid", "Waktu tidak sesuai batas operasional", "Penalty naik"]
      ]
    };
  }
  if (/kromosom|\bgen\b|representasi/.test(text)) {
    return {
      headers: ["Atribut gen", "Isi"],
      rows: [
        ["Mata praktikum", "Identitas subject praktikum"],
        ["Ruang dan hari", "Lokasi serta tanggal pelaksanaan"],
        ["Waktu", "Slot awal dan durasi"],
        ["Kelompok dan asisten", "Peserta serta pendamping praktikum"]
      ]
    };
  }
  return null;
}

function iconFor(seedText) {
  const text = seedText.toLowerCase();
  if (/fitness|hasil|metric|rekap|classic|fuzzy ga/.test(text)) return ICONS.chart;
  if (/fuzzy|controller|cr|mr|rule/.test(text)) return ICONS.sliders;
  if (/data|dataset|gui|report/.test(text)) return ICONS.database;
  if (/konflik|repair|validasi|penalty/.test(text)) return ICONS.shield;
  if (/kromosom|\bgen\b|crossover|mutasi|populasi/.test(text)) return ICONS.spark;
  return ICONS.calendar;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function renderTable(table) {
  if (!table) return "";
  return '<table class="detail-table"><thead><tr>' +
    table.headers.map((h) => '<th>' + escapeHtml(h) + '</th>').join("") +
    '</tr></thead><tbody>' +
    table.rows.map((row) => '<tr>' + row.map((cell) => '<td>' + escapeHtml(cell) + '</td>').join("") + '</tr>').join("") +
    '</tbody></table>';
}

function referenceKey(ref) {
  return String(ref || "").replace(/[()]/g, "").replace(/\s+/g, " ").trim();
}

function referenceEntryFor(ref, slideNo) {
  const key = referenceKey(ref);
  const entry = REFERENCE_PDFS[key] || REFERENCE_PDFS[key.replace(/&/g, "&amp;")];
  if (!entry) return null;
  const slideEntry = entry.bySlide && (entry.bySlide[String(slideNo)] || entry.bySlide[slideNo]);
  return Object.assign({}, entry, slideEntry || {}, {
    citation: entry.citation,
    title: entry.title,
    file: entry.file,
    sourceIndex: entry.sourceIndex,
    status: (slideEntry && slideEntry.status) || entry.status || "available",
    note: (slideEntry && slideEntry.note) || entry.note || "",
    page: (slideEntry && slideEntry.page) || entry.page || null,
    image: (slideEntry && slideEntry.image) || entry.image || null,
    articleUrl: entry.articleUrl || "",
    slideTitle: (slideEntry && slideEntry.slideTitle) || entry.slideTitle || ""
  });
}

function referencePreviewsFor(refs, slideNo) {
  const seen = new Set();
  return refs
    .map((ref) => referenceEntryFor(ref, slideNo))
    .filter(Boolean)
    .filter((entry) => (entry.status || "available") !== "missing" && entry.image)
    .filter((entry) => {
      const id = [entry.citation, entry.status, entry.page, entry.image].join("|");
      if (seen.has(id)) return false;
      seen.add(id);
      return true;
    });
}

function renderReferencePreviews(refs, slideNo) {
  const previews = referencePreviewsFor(refs, slideNo);
  if (!previews.length) return "";
  return '<h4>Halaman PDF rujukan sesuai slide ini</h4><div class="pdf-preview-grid">' +
    previews.map((entry) => {
      const status = entry.status || "available";
      const slideBadge = "Slide " + pad(slideNo) + (entry.page ? " · Hal. " + entry.page : "");
      const title = entry.title || entry.file || "Artikel referensi";
      const pageImage = '<img src="' + escapeHtml(entry.image) + '" alt="Preview halaman PDF ' + escapeHtml(entry.citation || "referensi") + ' untuk slide ' + pad(slideNo) + '">';
      const pageContent = entry.articleUrl
        ? '<a class="pdf-preview-link" href="' + escapeHtml(entry.articleUrl) + '" target="_blank" rel="noopener noreferrer" title="Buka artikel PDF lengkap">' + pageImage + '</a>'
        : pageImage;
      return '<article class="pdf-preview-card' + (entry.articleUrl ? ' clickable' : '') + '">' +
        '<div class="pdf-preview-head">' +
          '<div class="pdf-preview-meta">' +
            '<div class="pdf-preview-cite">' + escapeHtml(entry.citation || "") + '</div>' +
            '<div class="pdf-preview-slide">' + escapeHtml(slideBadge) + '</div>' +
          '</div>' +
          '<div class="pdf-preview-title">' + escapeHtml(title) + '</div>' +
        '</div>' +
        '<div class="pdf-preview-page">' + pageContent + '</div>' +
        (entry.score ? '<div class="pdf-preview-score">Halaman dipilih dari analisis teks PDF per slide. Kata kunci cocok: ' + escapeHtml((entry.hits || []).slice(0, 8).join(", ") || "umum") + '</div>' : '') +
      '</article>';
    }).join("") +
    '</div>';
}

function renderSlideEvidence(seed, slideMeta) {
  const slideNo = slideMeta.index || current + 1;
  const quote = seed.length > 260 ? seed.slice(0, 260).trim() + "..." : seed;
  return '<div class="slide-evidence">' +
    '<div class="slide-evidence-page">' +
      '<div class="slide-page-label">Lokasi teks</div>' +
      '<div class="slide-page-number">' + pad(slideNo) + '</div>' +
      '<div class="slide-page-title">' + escapeHtml(slideMeta.title || "Slide presentasi") + '</div>' +
    '</div>' +
    '<div class="slide-evidence-quote">' +
      '<strong>Paragraf/item yang diklik</strong>' +
      '<p>' + escapeHtml(quote || slideMeta.title || "Konten slide") + '</p>' +
    '</div>' +
  '</div>';
}

function openDetail(target) {
  const slide = activeSlide();
  const slideMeta = SLIDES[current];
  const seed = textOf(target) || slideMeta.title;
  const title = seed.length > 78 ? seed.slice(0, 78).trim() + "..." : seed;
  const refs = refsFor(slide, seed);
  const asset = assetFor(seed, slide);
  const table = tableFor(seed, slideMeta.title);
  detailIcon.innerHTML = iconFor(seed + " " + slideMeta.title);
  detailKicker.textContent = slideMeta.chapter + " - slide " + pad(current + 1);
  detailTitle.textContent = title || slideMeta.title;
  detailBody.innerHTML = [
    renderSlideEvidence(seed, slideMeta),
    '<h4>Konteks skripsi</h4>',
    '<p>' + escapeHtml(contextFor(seed, slideMeta.title)) + '</p>',
    refs.length ? '<h4>Rujukan APA</h4><div class="ref-row">' + refs.map((ref) => '<span class="ref-chip">' + escapeHtml(ref) + '</span>').join("") + '</div>' : '',
    renderReferencePreviews(refs, current + 1),
    table ? '<h4>Informasi terkait</h4>' + renderTable(table) : '',
    asset ? '<h4>Gambar pendukung slide</h4><div class="detail-media"><img src="' + escapeHtml(asset) + '" alt="Gambar pendukung slide"></div>' : '',
    '<div class="detail-tip">Klik area kanan atau kiri slide untuk pindah halaman. Tekan Esc untuk menutup panel detail.</div>'
  ].join("");
  backdrop.classList.add("open");
  panel.classList.add("open");
}

function closeDetail() {
  backdrop.classList.remove("open");
  panel.classList.remove("open");
}

const detailSelector = [
  ".subdesc", ".card", ".metric", ".step", ".flow-node", ".pipeline-stage", ".gene",
  ".controller-card", ".gui-callout", ".screen-frame", ".image-box", ".comparison",
  ".result-table", ".kpi-card", ".agenda-card", ".cite"
].join(", ");

stage.addEventListener("click", (event) => {
  const target = event.target;
  if (target.closest(".stage-nav, button, a, input, textarea, select")) return;
  const interactive = target.closest(detailSelector);
  if (interactive && activeSlide().contains(interactive)) {
    event.preventDefault();
    event.stopPropagation();
    openDetail(interactive);
    return;
  }
  const paragraph = target.closest("p");
  if (paragraph && activeSlide().contains(paragraph) && !paragraph.closest(".footer, .topbar, .brand")) {
    event.preventDefault();
    event.stopPropagation();
    openDetail(paragraph);
    return;
  }
  const rect = stage.getBoundingClientRect();
  const x = event.clientX - rect.left;
  if (x < rect.width * .38) prevSlide();
  if (x > rect.width * .62) nextSlide();
});

document.addEventListener("click", (event) => {
  if (panel.classList.contains("open")) return;
  if (event.target.closest(".detail-panel, .detail-backdrop, .stage-nav, .floating-control, button, a, input, textarea, select")) return;
  if (stage.contains(event.target)) return;
  if (event.clientX < window.innerWidth * .18) prevSlide();
  if (event.clientX > window.innerWidth * .82) nextSlide();
});

document.getElementById("nextBtn").addEventListener("click", nextSlide);
document.getElementById("prevBtn").addEventListener("click", prevSlide);
document.getElementById("edgeNext").addEventListener("click", nextSlide);
document.getElementById("edgePrev").addEventListener("click", prevSlide);
document.getElementById("detailClose").addEventListener("click", closeDetail);
backdrop.addEventListener("click", closeDetail);
navButtons.forEach((button) => button.addEventListener("click", () => chapterStart(button.dataset.chapter)));

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeDetail();
    return;
  }
  if (panel.classList.contains("open")) return;
  if (["ArrowRight", "PageDown", " "].includes(event.key)) {
    event.preventDefault();
    nextSlide();
  }
  if (["ArrowLeft", "PageUp"].includes(event.key)) {
    event.preventDefault();
    prevSlide();
  }
  if (event.key === "Home") setSlide(0, -1);
  if (event.key === "End") setSlide(SLIDES.length - 1, 1);
});

window.addEventListener("resize", () => {
  fitStage();
  setNav(SLIDES[current].chapter);
});

window.addEventListener("popstate", () => {
  const next = readInitialSlide();
  setSlide(next, next > current ? 1 : -1, true);
});

fitStage();
slideEls.forEach((slide, index) => {
  slide.classList.toggle("active", index === current);
  slide.setAttribute("aria-hidden", index === current ? "false" : "true");
});
syncUi(true);
requestAnimationFrame(() => setNav(SLIDES[current].chapter));
if (new URLSearchParams(location.search).get("qaDetail") === "1") {
  window.setTimeout(() => {
    const target = activeSlide().querySelector(".subdesc, .cite, p:not(.kicker)");
    if (target) openDetail(target);
  }, 320);
}
`;
}

build();
