#!/usr/bin/env bash
# Xuất hồ sơ giới thiệu công ty ra PDF từ dữ liệu trong common/lib.
# Cần: Node 20, Python 3 + Pillow, Google Chrome (macOS).
# Cách dùng: bash scripts/ho-so/build.sh [file-pdf-dau-ra]
set -euo pipefail
DIR="$(cd "$(dirname "$0")" && pwd)"
REPO="$(cd "$DIR/../.." && pwd)"
OUT="${1:-$HOME/Desktop/Ho-so-Thang-may-Hung-Phat.pdf}"
TMP="$(mktemp -d)"
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

node "$DIR/gen.js" "$REPO" "$TMP/ho-so.html"
python3 "$DIR/shrink.py" "$TMP/ho-so.html" "$TMP/img"
"$CHROME" --headless=new --disable-gpu --allow-file-access-from-files --no-pdf-header-footer \
  --virtual-time-budget=15000 --print-to-pdf="$OUT" "file://$TMP/ho-so.html" 2>/dev/null
rm -rf "$TMP"
echo "Đã xuất: $OUT"
