# Triển khai Hưng Phát Elevator

## Tổng quan

```
GitHub (push)
   │
   ├─ PR / mọi push ──► job "build": yarn install + yarn build trên GitHub
   │                    (lỗi thì dừng, không deploy)
   │
   ├─ push master  ──► SSH vào server ──► scripts/deploy.sh master  elevator          3000
   │                                      → https://hungphatelevator.com
   │
   └─ push staging ──► SSH vào server ──► scripts/deploy.sh staging elevator-staging  3001
                                          → https://staging.hungphatelevator.com
```

Trên cùng 1 server:

| | Production | Staging (subdomain) |
|---|---|---|
| Domain | hungphatelevator.com | staging.hungphatelevator.com |
| Branch | `master` | `staging` |
| Thư mục | `$SERVER_PATH` (đang dùng) | `/var/www/elevator-staging` |
| systemd service | `elevator` (đang dùng) | `elevator-staging` |
| Port nội bộ | 3000 | 3001 |
| Google index | Có | Không (robots + header `noindex`, có mật khẩu) |

`scripts/deploy.sh` làm các bước: `git merge --ff-only` → `yarn install --frozen-lockfile`
→ build vào `.nuxt-next` (site cũ vẫn chạy) → đổi thành `.nuxt` → restart service
→ kiểm tra `http://127.0.0.1:<port>/` → nếu lỗi tự rollback về bản build trước.

## Cài đặt subdomain staging (làm 1 lần)

Các lệnh dưới đây giả định server Ubuntu dùng nginx, user deploy tên `deploy`.
Đổi tên user / thư mục cho đúng với server.

### 1. DNS

Tại nơi quản lý tên miền hungphatelevator.com, thêm bản ghi:

```
Loại: A     Tên: staging     Giá trị: <IP server production>
```

Kiểm tra: `dig +short staging.hungphatelevator.com` trả về IP server.

### 2. Clone source cho staging

```bash
sudo mkdir -p /var/www/elevator-staging
sudo chown deploy:deploy /var/www/elevator-staging
git clone -b staging https://github.com/meodiemvuong1609/elevatorfe.git /var/www/elevator-staging
# (repo private: dùng cùng cách xác thực như thư mục production, ví dụ deploy key)

cd /var/www/elevator-staging
cp .env.example .env
nano .env
```

Nội dung `.env` cho staging:

```
SITE_URL=https://staging.hungphatelevator.com
ALLOW_INDEXING=false
ACCESS_TOKEN_MAP_BOX=pk....   # cùng token với production
PORT=3001
HOST=127.0.0.1
```

> `.env` được đọc cả lúc build lẫn lúc chạy. Sửa `.env` xong cần chạy lại
> `bash scripts/deploy.sh ...` để build lại.

### 3. systemd service

```bash
sudo cp deploy/systemd/elevator-staging.service /etc/systemd/system/
sudo nano /etc/systemd/system/elevator-staging.service   # sửa User, WorkingDirectory
sudo systemctl daemon-reload
sudo systemctl enable elevator-staging
```

User deploy cần chạy được `sudo systemctl restart` không hỏi mật khẩu
(production hiện đã như vậy với service `elevator`). Thêm cho staging:

```bash
sudo visudo -f /etc/sudoers.d/elevator-deploy
```

```
deploy ALL=(root) NOPASSWD: /usr/bin/systemctl restart elevator, /usr/bin/systemctl restart elevator-staging, /usr/bin/journalctl -u elevator *, /usr/bin/journalctl -u elevator-staging *
```

### 4. Build lần đầu

```bash
cd /var/www/elevator-staging
bash scripts/deploy.sh staging elevator-staging 3001
curl -I http://127.0.0.1:3001/   # phải ra 200
```

### 5. nginx + HTTPS

```bash
sudo cp deploy/nginx/staging.hungphatelevator.com.conf /etc/nginx/sites-available/
sudo ln -s /etc/nginx/sites-available/staging.hungphatelevator.com.conf /etc/nginx/sites-enabled/

# mật khẩu xem staging (bỏ 2 dòng auth_basic trong file conf nếu muốn public)
sudo apt install -y apache2-utils
sudo htpasswd -c /etc/nginx/.htpasswd-staging hungphat

sudo nginx -t && sudo systemctl reload nginx
sudo certbot --nginx -d staging.hungphatelevator.com
```

Mở https://staging.hungphatelevator.com để kiểm tra.

### 6. GitHub

Settings → Secrets and variables → Actions:

| Loại | Tên | Giá trị |
|---|---|---|
| Secret (đã có) | `SERVER_HOST`, `SERVER_USER`, `SSH_PASSWORD`, `SERVER_PATH` | giữ nguyên |
| Secret (mới) | `STAGING_PATH` | `/var/www/elevator-staging` |
| Secret (khuyến nghị) | `SSH_PRIVATE_KEY` | private key SSH, sau đó có thể xoá `SSH_PASSWORD` |
| Variable (tùy chọn) | `PROD_PORT` | port production nếu khác 3000 |
| Variable (tùy chọn) | `STAGING_PORT` | port staging nếu khác 3001 |

Tạo branch `staging` từ `master` và push — workflow sẽ tự deploy lên subdomain.

## Quy trình làm việc đề xuất

1. Tạo branch tính năng → mở PR vào `staging` → GitHub build thử.
2. Merge vào `staging` → tự deploy lên staging.hungphatelevator.com để duyệt.
3. Duyệt xong mở PR `staging` → `master` → merge → tự deploy production.

## Lưu ý cho production

- Lần deploy production đầu tiên với workflow mới sẽ kiểm tra
  `http://127.0.0.1:3000/` sau khi restart. Nếu service `elevator` chạy ở
  port khác, đặt variable `PROD_PORT` trước khi merge vào `master`.
- Nên thêm vào `.env` của production: `SITE_URL=https://hungphatelevator.com`
  (mặc định đã là giá trị này) và `ACCESS_TOKEN_MAP_BOX` nếu chưa có.
- Server cần Node.js 18 hoặc 20 (`.nvmrc` = 20) và yarn 1.x.
- Nếu deploy lỗi, xem log: `sudo journalctl -u elevator -n 100`.
