import html
import json
import math
import re
import sys
from collections import Counter
from pathlib import Path


WORKSPACE = Path(r"C:\skripsi\outputs\manual-20260605-presenter-web\presentations\skripsi-presenter-web")
SOURCE_HTML = Path(r"C:\skripsi\outputs\manual-20260604-123547\presentations\skripsi-deck-revisi\output\skripsi-deck-revisi-final.html")
REFERENCE_RECAP = Path(r"C:\skripsi\outputs\manual-20260605-reference-pdfs\presentation_references_recap.json")
BLOCKER_NOTES = Path(r"C:\skripsi\outputs\manual-20260605-reference-pdfs\manual_blocker_notes.json")
ASSET_DIR = WORKSPACE / "assets" / "reference-pdf-pages"
MAP_PATH = ASSET_DIR / "reference-pdf-map.json"
ANALYSIS_PATH = ASSET_DIR / "reference-pdf-page-analysis.json"
UPDATED_RECAP_PATH = REFERENCE_RECAP
UPDATED_RECAP_MD = Path(r"C:\skripsi\outputs\manual-20260605-reference-pdfs\presentation_references_recap.md")


STOPWORDS = {
    "adalah", "agar", "akan", "akhir", "alur", "antar", "antara", "apa", "atau",
    "awal", "bab", "bagi", "bagian", "bahwa", "baik", "banyak", "baru", "berbasis",
    "berbeda", "berjalan", "berupa", "besar", "bisa", "bukan", "cara", "cukup",
    "dan", "dalam", "dapat", "dari", "dengan", "dibaca", "dibanding", "dibangun",
    "dibuat", "diperiksa", "dipakai", "diperlukan", "direpresentasikan", "ditinjau",
    "evaluasi", "fakultas", "fokus", "fst", "hasil", "hingga", "ini", "inti",
    "jambi", "juga", "kajian", "karena", "kelas", "kembali", "kerja", "ketika",
    "lain", "layak", "lebih", "lihat", "maka", "masalah", "melalui", "membantu",
    "membuat", "mencari", "mengatur", "menjadi", "menjaga", "menjelaskan",
    "menunjukkan", "menyusun", "metodologi", "nilai", "oleh", "pada", "pembahasan",
    "pendahuluan", "penelitian", "penutup", "perlu", "posisi", "proses", "prodi",
    "rujukan", "sains", "sampai", "secara", "sebagai", "sebelum", "sehingga",
    "selalu", "seminar", "sistem", "skripsi", "slide", "teknologi", "tentang",
    "terhadap", "terbatas", "tertentu", "tetap", "tinjauan", "utama", "untuk",
    "using", "with", "from", "that", "this", "into", "than", "then", "also",
    "their", "based", "study", "system", "systems", "method", "methods", "paper",
    "article", "journal", "algorithm", "algorithms", "genetic", "fuzzy",
}

IMPORTANT_WEIGHTS = {
    "penjadwalan": 3.8,
    "praktikum": 4.0,
    "laboratorium": 3.2,
    "schedule": 3.5,
    "scheduling": 4.0,
    "timetable": 4.0,
    "timetabling": 4.0,
    "genetika": 3.8,
    "genetic": 3.5,
    "algorithm": 2.2,
    "algoritma": 2.2,
    "chromosome": 4.0,
    "kromosom": 4.0,
    "gene": 3.0,
    "population": 3.2,
    "populasi": 3.2,
    "fitness": 4.0,
    "penalty": 4.0,
    "crossover": 4.0,
    "mutation": 4.0,
    "mutasi": 4.0,
    "selection": 3.0,
    "seleksi": 3.0,
    "controller": 4.0,
    "adaptive": 3.0,
    "adaptif": 3.0,
    "membership": 3.8,
    "constraint": 3.2,
    "konflik": 4.0,
    "conflict": 4.0,
    "repair": 3.5,
    "gui": 4.0,
    "dataset": 3.8,
}


SLIDE_CITATION_OVERRIDES = {
    2: {"Pangestu et al., 2023": "Pratama, 2025"},
    4: {"Pangestu et al., 2023": "Pratama, 2025"},
    5: {"Pangestu et al., 2023": "Yazid, 2025"},
    7: {"Pangestu et al., 2023": "Noptrina et al., 2024"},
    17: {
        "Hartono & Zein, 2023": "Syahputra et al., 2024",
        "Hartono &amp; Zein, 2023": "Syahputra et al., 2024",
        "Pangestu et al., 2023": "Irfan et al., 2022",
    },
    18: {"Pangestu et al., 2023": "Syahputra et al., 2024"},
    37: {"Pangestu et al., 2023": "Yazid, 2025"},
    38: {"Pangestu et al., 2023": "Yazid, 2025"},
}


def normalize_slide_citations(markup: str, slide_no: int) -> str:
    normalized = str(markup or "")
    for old, new in SLIDE_CITATION_OVERRIDES.get(slide_no, {}).items():
        normalized = normalized.replace(old, new)
    return normalized


def add_deps() -> None:
    deps = Path(r"C:\skripsi\outputs\manual-20260605-reference-pdfs\.pydeps")
    if deps.exists():
        sys.path.insert(0, str(deps))


def strip_tags(markup: str) -> str:
    text = re.sub(r"<script[\s\S]*?</script>", " ", markup, flags=re.I)
    text = re.sub(r"<style[\s\S]*?</style>", " ", text, flags=re.I)
    text = re.sub(r"<[^>]+>", " ", text)
    text = html.unescape(text)
    return re.sub(r"\s+", " ", text).strip()


def parse_slides() -> list[dict]:
    content = SOURCE_HTML.read_text(encoding="utf-8")
    sections = re.findall(r"<section class=\"slide[\s\S]*?</section>", content)
    slides = []
    for index, section in enumerate(sections, start=1):
        section = normalize_slide_citations(section, index)
        title_match = re.search(r"<h1>([\s\S]*?)</h1>", section)
        chapter_match = re.search(r"<span class=\"chip active\">([\s\S]*?)</span>", section)
        citations = [strip_tags(m) for m in re.findall(r"<span class=\"cite\">([\s\S]*?)</span>", section)]
        slides.append(
            {
                "index": index,
                "title": strip_tags(title_match.group(1)) if title_match else f"Slide {index}",
                "chapter": strip_tags(chapter_match.group(1)) if chapter_match else "",
                "citations": citations[:2],
                "bodyText": strip_tags(section),
            }
        )
    return slides


def citation_key(citation: str) -> str:
    return re.sub(r"\s+", " ", str(citation).replace("(", "").replace(")", "").strip())


def slugify(text: str) -> str:
    text = html.unescape(text)
    text = re.sub(r"[^a-zA-Z0-9]+", "-", text.lower()).strip("-")
    return text[:90] or "reference"


def tokenize(text: str) -> list[str]:
    text = html.unescape(str(text).lower())
    text = re.sub(r"\([^)]*\d{4}[^)]*\)", " ", text)
    text = re.sub(r"&amp;", " and ", text)
    words = re.findall(r"[a-zA-ZÀ-ÿ0-9][a-zA-ZÀ-ÿ0-9_-]{2,}", text)
    result = []
    for word in words:
        clean = word.strip("_-")
        if len(clean) < 4:
            continue
        if clean in STOPWORDS:
            continue
        if clean.isdigit() and len(clean) <= 4:
            continue
        result.append(clean)
    return result


def query_terms(slide: dict, citation_item: dict) -> Counter:
    title_words = tokenize(slide.get("title", ""))
    body_words = tokenize(slide.get("bodyText", ""))
    article_words = tokenize(citation_item.get("title", ""))
    counts = Counter()
    for word in title_words:
        counts[word] += 5.0
    for word in body_words:
        counts[word] += 1.0
    for word in article_words:
        counts[word] += 2.5
    for common in ["universitas", "jambi", "pendahuluan", "tinjauan", "metodologi", "hasil", "penutup"]:
        counts.pop(common, None)
    return counts


def safe_read_pdf(path: Path) -> tuple[list[str], int, list[str]]:
    from pypdf import PdfReader

    errors = []
    try:
        if path.read_bytes()[:5] != b"%PDF-":
            return [], 0, ["File does not start with %PDF-"]
    except Exception as exc:
        return [], 0, [f"Cannot read PDF header: {exc}"]

    try:
        reader = PdfReader(str(path))
        page_count = len(reader.pages)
        pages = []
        for i, page in enumerate(reader.pages):
            try:
                pages.append(page.extract_text() or "")
            except Exception as exc:
                errors.append(f"page {i + 1}: text extraction failed: {exc}")
                pages.append("")
        return pages, page_count, errors
    except Exception as exc:
        return [], 0, [f"PdfReader failed: {exc}"]


def title_overlap(expected_title: str, pages: list[str]) -> dict:
    title_terms = set(tokenize(expected_title))
    if not title_terms:
        return {"score": 0.0, "matched": [], "missing": []}
    first_text = " ".join(pages[: min(3, len(pages))]).lower()
    matched = sorted([term for term in title_terms if term in first_text])
    missing = sorted(title_terms - set(matched))
    return {
        "score": round(len(matched) / max(1, len(title_terms)), 3),
        "matched": matched[:18],
        "missing": missing[:18],
    }


def score_page(page_text: str, weighted_query: Counter, page_number: int) -> tuple[float, list[str]]:
    words = tokenize(page_text)
    if not words:
        return (0.0, [])
    page_counts = Counter(words)
    unique = set(words)
    score = 0.0
    hits = []
    for term, base_weight in weighted_query.items():
        if term not in unique:
            continue
        boost = IMPORTANT_WEIGHTS.get(term, 1.0)
        frequency_boost = math.log1p(page_counts[term])
        term_score = base_weight * boost * (1.0 + 0.18 * frequency_boost)
        score += term_score
        hits.append((term, term_score))
    # Keep first pages competitive when the article is cited broadly and page scores are close.
    score += max(0.0, 2.5 - (page_number - 1) * 0.12)
    hits = [term for term, _ in sorted(hits, key=lambda item: item[1], reverse=True)[:14]]
    return (round(score, 3), hits)


def pick_best_page(slide: dict, item: dict, pages: list[str]) -> dict:
    weighted_query = query_terms(slide, item)
    if not pages:
        return {"page": None, "score": 0.0, "hits": []}
    scored = []
    for idx, text in enumerate(pages, start=1):
        score, hits = score_page(text, weighted_query, idx)
        scored.append({"page": idx, "score": score, "hits": hits})
    best = max(scored, key=lambda row: (row["score"], -row["page"]))
    if best["score"] <= 2.6:
        best = {"page": 1, "score": best["score"], "hits": best["hits"]}
    return best


def render_page(pdf_path: Path, page_number: int, output_name: str) -> str:
    import fitz

    out = ASSET_DIR / output_name
    doc = fitz.open(str(pdf_path))
    try:
        page = doc[page_number - 1]
        matrix = fitz.Matrix(1.72, 1.72)
        pix = page.get_pixmap(matrix=matrix, alpha=False)
        pix.save(str(out))
    finally:
        doc.close()
    return "../assets/reference-pdf-pages/" + output_name


def map_key_variants(citation: str) -> list[str]:
    key = citation_key(citation)
    variants = [key]
    if "&" in key:
        variants.append(key.replace("&", "&amp;"))
    return variants


def reference_preview_title(item: dict) -> str:
    return item.get("title") or item.get("reference") or "Artikel referensi"


def normalized_recap_items(recap: dict, slides: dict[int, dict]) -> list[dict]:
    citation_slides: dict[str, list[int]] = {}
    for slide in slides.values():
        for citation in slide.get("citations", [])[:2]:
            key = citation_key(citation)
            citation_slides.setdefault(key, []).append(slide["index"])

    items = []
    for item in recap.get("items", []):
        key = citation_key(item.get("citation", ""))
        slides_for_item = citation_slides.get(key)
        if not slides_for_item:
            continue
        copied = json.loads(json.dumps(item, ensure_ascii=False))
        copied["slides"] = slides_for_item
        items.append(copied)
    return items


def build_md_report(recap: dict, blockers: dict) -> str:
    available = [x for x in recap["items"] if x.get("pdf", {}).get("status") == "available" and x.get("pdf", {}).get("path")]
    missing = [x for x in recap["items"] if x not in available]
    lines = [
        "# Presentation References PDF Recap",
        "",
        f"- Presentation HTML: `{recap.get('presentation_html')}`",
        f"- Unique citations: {recap.get('total_unique_citations')}",
        f"- Valid PDFs available: {len(available)}",
        f"- Missing/blocked PDFs: {len(missing)}",
        "- PDF folder: `C:\\skripsi\\outputs\\manual-20260605-reference-pdfs\\presentation_used_pdfs`",
        "",
        "## Available PDFs",
        "",
    ]
    for item in available:
        slides = ", ".join(str(x) for x in item.get("slides", []))
        lines.append(f"- #{item.get('source_index')}: {item.get('citation')} - {reference_preview_title(item)} | slides {slides}")
    lines += ["", "## Missing / Blocked", ""]
    for item in missing:
        source_index = str(item.get("source_index", "")).zfill(3)
        note = blockers.get(source_index, {}).get("blocker") or item.get("pdf", {}).get("source") or "No validated PDF found."
        slides = ", ".join(str(x) for x in item.get("slides", []))
        lines.append(f"- #{item.get('source_index')}: {item.get('citation')} - {reference_preview_title(item)} | slides {slides} | {note}")
    return "\n".join(lines)


def main() -> None:
    add_deps()
    ASSET_DIR.mkdir(parents=True, exist_ok=True)
    slides = {slide["index"]: slide for slide in parse_slides()}
    recap = json.loads(REFERENCE_RECAP.read_text(encoding="utf-8"))
    recap["items"] = normalized_recap_items(recap, slides)
    recap["total_unique_citations"] = len(recap["items"])
    blockers = json.loads(BLOCKER_NOTES.read_text(encoding="utf-8")) if BLOCKER_NOTES.exists() else {}

    reference_map = {}
    audit = {
        "source_html": str(SOURCE_HTML),
        "reference_recap": str(REFERENCE_RECAP),
        "items": [],
        "warnings": [],
    }

    available_count = 0
    missing_count = 0

    for item in recap["items"]:
        pdf_info = item.get("pdf", {}) or {}
        source_index = str(item.get("source_index", "")).zfill(3)
        pdf_path = Path(pdf_info.get("path") or "") if pdf_info.get("path") else None
        is_available = pdf_info.get("status") == "available" and pdf_path and pdf_path.exists()
        base_entry = {
            "citation": item.get("citation"),
            "file": pdf_path.name if pdf_path else None,
            "title": reference_preview_title(item),
            "sourceIndex": item.get("source_index"),
            "slides": item.get("slides", []),
            "status": "available" if is_available else "missing",
            "note": None,
            "page": None,
            "image": None,
            "bySlide": {},
        }

        item_audit = {
            "sourceIndex": item.get("source_index"),
            "citation": item.get("citation"),
            "title": reference_preview_title(item),
            "status": base_entry["status"],
            "slides": item.get("slides", []),
            "pdfPath": str(pdf_path) if pdf_path else None,
            "pageCount": 0,
            "titleOverlap": None,
            "pageSelections": {},
            "errors": [],
        }

        if not is_available:
            missing_count += 1
            note = blockers.get(source_index, {}).get("blocker") or "PDF belum berhasil divalidasi sebagai file %PDF-."
            base_entry["note"] = note
            for slide_no in item.get("slides", []):
                slide = slides.get(slide_no, {})
                base_entry["bySlide"][str(slide_no)] = {
                    "status": "missing",
                    "page": None,
                    "image": None,
                    "slideTitle": slide.get("title", f"Slide {slide_no}"),
                    "note": note,
                }
            item_audit["errors"].append(note)
        else:
            pages, page_count, errors = safe_read_pdf(pdf_path)
            item_audit["pageCount"] = page_count
            item_audit["errors"].extend(errors)
            overlap = title_overlap(reference_preview_title(item), pages)
            item_audit["titleOverlap"] = overlap
            if page_count == 0:
                base_entry["status"] = "missing"
                base_entry["note"] = "PDF ada, tetapi teks halaman tidak dapat dianalisis."
                missing_count += 1
            else:
                available_count += 1
                if overlap["score"] < 0.28:
                    audit["warnings"].append(
                        {
                            "sourceIndex": item.get("source_index"),
                            "citation": item.get("citation"),
                            "warning": "low-title-overlap",
                            "score": overlap["score"],
                            "matched": overlap["matched"],
                            "missing": overlap["missing"],
                        }
                    )
                first_slide_entry = None
                for slide_no in item.get("slides", []):
                    slide = slides.get(slide_no, {})
                    best = pick_best_page(slide, item, pages)
                    image = None
                    if best["page"]:
                        img_name = f"{slugify(citation_key(item.get('citation')))}-slide-{slide_no:02d}-page-{best['page']:02d}.jpg"
                        image = render_page(pdf_path, best["page"], img_name)
                    selection = {
                        "status": "available",
                        "page": best["page"],
                        "image": image,
                        "score": best["score"],
                        "hits": best["hits"],
                        "slideTitle": slide.get("title", f"Slide {slide_no}"),
                    }
                    base_entry["bySlide"][str(slide_no)] = selection
                    item_audit["pageSelections"][str(slide_no)] = selection
                    if first_slide_entry is None:
                        first_slide_entry = selection
                if first_slide_entry:
                    base_entry["page"] = first_slide_entry["page"]
                    base_entry["image"] = first_slide_entry["image"]

        for key in map_key_variants(item.get("citation", "")):
            reference_map[key] = base_entry
        audit["items"].append(item_audit)

    recap["pdf_available_or_downloaded"] = available_count
    recap["pdf_missing"] = missing_count
    recap["pdf_available_count"] = available_count
    recap["pdf_missing_count"] = missing_count
    UPDATED_RECAP_PATH.write_text(json.dumps(recap, ensure_ascii=False, indent=2), encoding="utf-8")
    UPDATED_RECAP_MD.write_text(build_md_report(recap, blockers), encoding="utf-8")
    MAP_PATH.write_text(json.dumps(reference_map, ensure_ascii=False, indent=2), encoding="utf-8")
    ANALYSIS_PATH.write_text(json.dumps(audit, ensure_ascii=False, indent=2), encoding="utf-8")
    print(json.dumps({
        "slides": len(slides),
        "references": recap["total_unique_citations"],
        "available": available_count,
        "missing": missing_count,
        "warnings": audit["warnings"],
        "map": str(MAP_PATH),
        "analysis": str(ANALYSIS_PATH),
    }, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
