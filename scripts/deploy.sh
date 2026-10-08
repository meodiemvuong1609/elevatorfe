#!/usr/bin/env bash
# Deploy Nuxt app trên server: cập nhật code, build vào thư mục tạm, đổi sang
# bản build mới, restart service và kiểm tra health. Nếu health check lỗi thì
# tự quay lại bản build trước.
#
# Cách dùng (chạy trong thư mục chứa source trên server):
#   bash scripts/deploy.sh <branch> <systemd-service> <port>
# Ví dụ:
#   bash scripts/deploy.sh master  elevator          3000   # production
#   bash scripts/deploy.sh staging elevator-staging  3001   # subdomain staging
set -euo pipefail

BRANCH="${1:?Thiếu tên branch}"
SERVICE="${2:?Thiếu tên systemd service}"
PORT="${3:?Thiếu port}"
HEALTH_URL="http://127.0.0.1:${PORT}/"

log() { echo "[deploy $(date '+%H:%M:%S')] $*"; }

cd "$(dirname "$0")/.."

log "Cập nhật code từ origin/${BRANCH}"
git fetch --prune origin "$BRANCH"
git checkout -q "$BRANCH"
git merge --ff-only "origin/${BRANCH}"
log "Commit: $(git log -1 --format='%h %s')"

log "Cài dependencies"
yarn install --frozen-lockfile --non-interactive

log "Build vào .nuxt-next (server hiện tại vẫn chạy bình thường)"
rm -rf .nuxt-next
NUXT_BUILD_DIR=.nuxt-next yarn build

log "Chuyển sang bản build mới"
rm -rf .nuxt-prev
if [ -d .nuxt ]; then mv .nuxt .nuxt-prev; fi
mv .nuxt-next .nuxt

log "Restart ${SERVICE}"
sudo systemctl restart "$SERVICE"

healthy=false
for _ in $(seq 1 30); do
  if curl -fsS -o /dev/null "$HEALTH_URL"; then healthy=true; break; fi
  sleep 2
done

if [ "$healthy" = true ]; then
  log "OK: ${HEALTH_URL} phản hồi 200"
  exit 0
fi

log "LỖI: ${HEALTH_URL} không phản hồi, rollback về bản build trước"
if [ -d .nuxt-prev ]; then
  rm -rf .nuxt-failed
  mv .nuxt .nuxt-failed
  mv .nuxt-prev .nuxt
  sudo systemctl restart "$SERVICE"
fi
sudo journalctl -u "$SERVICE" -n 50 --no-pager || true
exit 1
