# Thu nhỏ ảnh dùng trong hồ sơ (cạnh dài ≤ 1100px) để file PDF nhẹ, rồi trỏ HTML sang bản thu nhỏ.
import re, sys, os, hashlib
from PIL import Image, ImageOps
html_path, cache = sys.argv[1], sys.argv[2]
os.makedirs(cache, exist_ok=True)
html = open(html_path, encoding='utf-8').read()
def small(m):
    src = m.group(1)
    if src.endswith('.png') and 'information1' in src:  # bảng số liệu: giữ nét chữ
        limit, fmt = 1600, 'PNG'
    else:
        limit, fmt = 1100, 'JPEG'
    name = hashlib.md5(src.encode()).hexdigest()[:10] + ('.png' if fmt == 'PNG' else '.jpg')
    dst = os.path.join(cache, name)
    if not os.path.exists(dst):
        im = ImageOps.exif_transpose(Image.open(src))
        if fmt == 'JPEG' and im.mode in ('RGBA', 'LA', 'P'):
            # PNG nền trong suốt (logo): phủ nền trắng, nếu không JPEG sẽ ra nền đen
            im = im.convert('RGBA')
            bg = Image.new('RGB', im.size, 'white')
            bg.paste(im, mask=im.split()[3])
            im = bg
        im = im.convert('RGBA' if fmt == 'PNG' else 'RGB')
        im.thumbnail((limit, limit), Image.LANCZOS)
        im.save(dst, fmt, **({'optimize': True} if fmt == 'PNG' else {'quality': 78, 'optimize': True, 'progressive': True}))
    return 'file://' + dst
html = re.sub(r'file://(/[^"\']+\.(?:jpe?g|png|webp))', small, html)
open(html_path, 'w', encoding='utf-8').write(html)
