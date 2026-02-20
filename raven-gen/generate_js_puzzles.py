"""
generate_js_puzzles.py
----------------------
Reads  static/img/puzzles/answer_key.json  and writes the const PUZZLES
block that lives at the top of  _static/js/RavensQuiz.js.

Usage
-----
    python generate_js_puzzles.py

The script rewrites only the PUZZLES array inside RavensQuiz.js; every
other line in the file is left untouched.

Paths (relative to this script's location)
-------------------------------------------
    JSON  :  ../../../_static/img/puzzles/answer_key.json
    JS    :  ../../../_static/js/RavensQuiz.js
"""

import json
import os
import re

# ---------------------------------------------------------------------------
# Paths
# ---------------------------------------------------------------------------
SCRIPT_DIR  = os.path.dirname(os.path.abspath(__file__))
BASE_DIR    = os.path.join(SCRIPT_DIR, "..", "..", "..")   # RavensMatricesQuiz/

JSON_PATH   = os.path.join(BASE_DIR, "_static", "img", "puzzles", "answer_key.json")
JS_PATH     = os.path.join(BASE_DIR, "_static", "js",  "RavensQuiz.js")

# ---------------------------------------------------------------------------
# Build the PUZZLES array string
# ---------------------------------------------------------------------------
def build_puzzles_block(records: list[dict]) -> str:
    labels = ["A", "B", "C", "D"]
    lines  = ["const PUZZLES = ["]

    for rec in records:
        pid     = rec["puzzle_id"]
        correct = rec["correct_answer"]          # e.g. "C"
        n       = rec.get("num_options", 4)

        puzzle_file = f"puzzle_{pid:03d}.png"

        # Reconstruct answer filenames from the label + correct flag
        answer_files = []
        for label in labels[:n]:
            suffix = "T" if label == correct else "F"
            answer_files.append(f"answers_{pid:03d}{label}_{suffix}.png")

        answers_js = ", ".join(f"'{f}'" for f in answer_files)
        line = (
            f"    {{ puzzle: '{puzzle_file}', "
            f"answers: [{answers_js}], "
            f"correct: '{correct}' }},"
        )
        lines.append(line)

    # Remove trailing comma from last entry
    lines[-1] = lines[-1].rstrip(",")
    lines.append("];")
    return "\n".join(lines)


# ---------------------------------------------------------------------------
# Patch the JS file in-place
# ---------------------------------------------------------------------------
def patch_js(js_path: str, new_block: str) -> None:
    with open(js_path, "r", encoding="utf-8") as fh:
        source = fh.read()

    # Match from "const PUZZLES = [" up to and including the closing "];"
    pattern = re.compile(
        r"const PUZZLES\s*=\s*\[.*?\];",
        re.DOTALL
    )

    if not pattern.search(source):
        raise ValueError("Could not find 'const PUZZLES = [...]' in the JS file.")

    patched = pattern.sub(new_block, source, count=1)

    with open(js_path, "w", encoding="utf-8") as fh:
        fh.write(patched)

    print(f"[OK] Patched: {js_path}")


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
if __name__ == "__main__":
    # --- load JSON ---
    if not os.path.exists(JSON_PATH):
        raise FileNotFoundError(f"answer_key.json not found at:\n  {JSON_PATH}")

    with open(JSON_PATH, "r", encoding="utf-8") as fh:
        records = json.load(fh)

    print(f"[OK] Loaded {len(records)} puzzles from:\n    {JSON_PATH}")

    # --- build JS block ---
    block = build_puzzles_block(records)

    # --- patch JS file ---
    if not os.path.exists(JS_PATH):
        raise FileNotFoundError(f"RavensQuiz.js not found at:\n  {JS_PATH}")

    patch_js(JS_PATH, block)
    print(f"[OK] Done -- {len(records)} puzzles written into PUZZLES array.")
