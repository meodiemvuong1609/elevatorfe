// Sinh hồ sơ giới thiệu công ty (HTML khổ A4) từ dữ liệu trong common/lib của repo.
// Cách dùng: bash scripts/ho-so/build.sh (gọi file này cùng shrink.py và Chrome để in PDF)
const fs = require('fs')
const path = require('path')
const vm = require('vm')

const repo = path.resolve(process.argv[2])
const out = process.argv[3]

// Nạp file ES module của Nuxt: thay require('~/...') bằng đường dẫn file:// và export thành module.exports
function loadLib(name) {
  let src = fs.readFileSync(path.join(repo, 'common/lib', name), 'utf8')
  src = src.replace(/require\((['"])~\/([^'"]+)\1\)/g, (_, q, p) => JSON.stringify('file://' + path.join(repo, p)))
  // require(`~/...${x}...`) trong projects.js → giữ template literal, chỉ đổi tiền tố
  src = src.replace(/require\(`~\/([^`]+)`\)/g, (_, p) => `(${JSON.stringify('file://' + repo + '/')} + \`${p}\`)`)
  src = src.replace(/^import .*$/gm, '')
  const names = [...src.matchAll(/^export const (\w+)/gm)].map((m) => m[1])
  src = src.replace(/^export const /gm, 'const ') + `\nmodule.exports = { ${names.join(', ')} }`
  const ctx = { module: { exports: {} } }
  vm.runInNewContext(src, ctx)
  return ctx.module.exports
}

const company = loadLib('company.js')
const { CABINS, STANDARD_CABIN_COUNT } = loadLib('cabins.js')
const { PRODUCT_LINES, SAFETY_FEATURES } = loadLib('products.js')
const { PROJECTS, PROJECT_TYPES } = loadLib('projects.js')
const { SHOWROOM } = loadLib('showroom.js')
const { FAQS } = loadLib('faqs.js')
const img = (p) => 'file://' + path.join(repo, 'assets/img', p)

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const check = '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#1E7A46" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12l5 5 9-10"/></svg>'
const { LEGAL, BANK_ACCOUNTS, OFFICES, FACTORY, HOTLINE_DISPLAY, EMAIL, FACEBOOK_URL, FOUNDED_YEAR } = company

let pageNo = 0
const footer = () => `<div class="foot"><span>Thang máy Hưng Phát · Hotline ${HOTLINE_DISPLAY} · ${EMAIL}</span><span>${String(++pageNo).padStart(2, '0')}</span></div>`
const page = (body, cls = '') => `<section class="page ${cls}">${body}${cls.includes('cover') ? '' : footer()}</section>`
const head = (eyebrow, title, desc = '') =>
  `<div class="head"><div class="eyebrow">${eyebrow}</div><h2>${title}</h2>${desc ? `<p class="lead">${desc}</p>` : ''}</div>`

const pages = []

// 1. Bìa
pages.push(page(`
  <div class="cover-top">
    <div class="logo-box"><img src="${img('hungphat.png')}" alt=""></div>
    <div class="badge">▲ ${FOUNDED_YEAR}</div>
  </div>
  <div class="cover-title">
    <div class="eyebrow light">Hồ sơ giới thiệu công ty</div>
    <h1>Thang máy<br>Hưng Phát</h1>
    <p>Cung cấp · Lắp đặt · Bảo trì thang máy cho nhà ở, biệt thự, tòa nhà và công trình chuyên dụng.</p>
  </div>
  <div class="cover-photo"><img src="${img('cong-trinh/anh-tuan-anh-bac-ninh/01.jpg')}" alt=""></div>
  <div class="cover-foot">
    <div><span>Hotline / Zalo</span><b>${HOTLINE_DISPLAY}</b></div>
    <div><span>Email</span><b>${EMAIL}</b></div>
    <div><span>Mã số thuế</span><b>${LEGAL.taxCode}</b></div>
  </div>`, 'cover'))

// 2. Về chúng tôi
pages.push(page(`
  ${head('Về chúng tôi', esc(LEGAL.name), esc(LEGAL.internationalName))}
  <div class="two">
    <div>
      <p>Bắt đầu từ những chiếc thang máy gia đình có trải nghiệm tốt nhất, an toàn nhất, thẩm mỹ cá nhân hóa với giá cả cạnh tranh, Thang máy Hưng Phát không ngừng nỗ lực và cải tiến để mang đến cho khách hàng trải nghiệm mua hàng tốt nhất, dịch vụ sau bán hàng chất lượng và tận tâm.</p>
      <p>Hưng Phát luôn xác định và hiểu rõ nhu cầu của khách hàng, cung cấp giải pháp cá nhân hóa nhanh chóng, phù hợp với thiết kế của từng ngôi nhà cũng như nhu cầu sử dụng của mỗi gia đình.</p>
    </div>
    <div class="stats">
      <div><b>${FOUNDED_YEAR}</b><span>Năm bắt đầu hoạt động</span></div>
      <div><b>4 + 1</b><span>Văn phòng khu vực và nhà máy</span></div>
      <div><b>24/7</b><span>Trực cứu hộ và bảo trì</span></div>
      <div><b>8</b><span>Dòng thang máy cung cấp</span></div>
    </div>
  </div>
  <figure class="photo team"><img src="${img('activities/tat-nien-2.jpg')}" alt=""><figcaption>Đội ngũ cán bộ, kỹ sư và kỹ thuật viên Hưng Phát</figcaption></figure>
  <h3 class="sub">Giá trị cốt lõi — Uy tín · Chuyên nghiệp · Tận tâm</h3>
  <div class="three">
    <div class="card"><h4>Chất lượng vượt trội</h4><p>Công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để mỗi thang máy đều đạt tiêu chuẩn chất lượng cao.</p></div>
    <div class="card"><h4>An toàn tuyệt đối</h4><p>Hệ thống an toàn tiên tiến như phanh khẩn cấp, cảm biến va chạm, bảo vệ người sử dụng trong mọi tình huống.</p></div>
    <div class="card"><h4>Thiết kế hiện đại</h4><p>Thiết kế hiện đại, sang trọng, phù hợp nhiều kiểu kiến trúc, mang đến vẻ đẹp và sự hài hòa cho không gian sống.</p></div>
  </div>`))

// 3. Nhà máy & mạng lưới
pages.push(page(`
  ${head('Nhà máy sản xuất', 'Sản xuất tại Thiệu Trung, Thanh Hóa', `Không chỉ phân phối, Hưng Phát có nhà máy sản xuất riêng đặt tại ${esc(FACTORY.address)}.`)}
  <div class="factory">
    <div class="dark-card">
      <div class="eyebrow light">Địa chỉ nhà máy</div>
      <div class="addr">Khu phố Trà Thượng,<br>xã Thiệu Trung,<br>tỉnh Thanh Hóa</div>
    </div>
    <ul class="checks">
      <li>${check}<div><b>Kiểm soát chất lượng tại nguồn</b><span>Thiết bị được gia công và kiểm tra tại nhà máy trước khi vận chuyển đến công trình.</span></div></li>
      <li>${check}<div><b>Chủ động tiến độ</b><span>Ít phụ thuộc nguồn hàng bên ngoài, lịch lắp đặt bám sát tiến độ xây dựng của bạn.</span></div></li>
      <li>${check}<div><b>Linh hoạt theo từng công trình</b><span>Kích thước và hoàn thiện được điều chỉnh theo hố thang và kiến trúc thực tế.</span></div></li>
    </ul>
  </div>
  <figure class="photo team2"><img src="${img('activities/tat-nien-1.jpg')}" alt=""><figcaption>Tiệc tất niên — tập thể Hưng Phát tổng kết một năm làm việc</figcaption></figure>
  <h3 class="sub">Văn phòng &amp; nhà máy</h3>
  <table class="list">${OFFICES.map((o) => `<tr><th>${esc(o.title)}</th><td>${esc(o.address)}</td></tr>`).join('')}</table>`))

// 4. Dòng sản phẩm
pages.push(page(`
  ${head('Dòng sản phẩm', '8 dòng thang máy Hưng Phát', 'Mỗi công trình được khảo sát, thiết kế bản vẽ và chọn tải trọng riêng.')}
  <div class="products">${PRODUCT_LINES.map((p, i) => `
    <div class="prod">
      ${p.img ? `<img src="${p.img}" alt="">` : `<div class="ph"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#5A5F66" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="${p.icon}"/></svg></div>`}
      <div><span class="num">0${i + 1}</span><h4>${esc(p.title)}</h4><p>${esc(p.desc)}</p></div>
    </div>`).join('')}
  </div>`))

// 5. Thông số + an toàn
pages.push(page(`
  ${head('Thông số kỹ thuật', 'Kích thước thang máy tải khách', 'Tải trọng 200 kg, 300 kg, 400 kg, 450 kg, 500 kg, nhập khẩu nguyên chiếc từ Châu Âu. Kích thước thực tế được xác nhận sau khi khảo sát hố thang.')}
  <img class="table-img" src="${img('products/information1.png')}" alt="">
  <h3 class="sub">8 tính năng an toàn tiêu chuẩn</h3>
  <div class="safety">${SAFETY_FEATURES.map((f) => `<div><h4>${esc(f.title)}</h4><p>${esc(f.desc)}</p></div>`).join('')}</div>`))

// 6–9. Cabin: 6 mẫu/trang
const spec = (c) => `<dl>
  <dt>Vách</dt><dd>${esc(c.wall)}</dd><dt>Cửa</dt><dd>${esc(c.door)}</dd><dt>Trần</dt><dd>${esc(c.ceiling)}</dd>
  <dt>Sàn</dt><dd>${esc(c.floor)}</dd><dt>Tay vịn</dt><dd>${esc(c.handrail)}</dd><dt>Bảng ĐK</dt><dd>${esc(c.controlPanel)}</dd></dl>`
const cabinPages = (list, eyebrow, title, desc) => {
  for (let i = 0; i < list.length; i += 6) {
    const chunk = list.slice(i, i + 6)
    pages.push(page(`
      ${head(eyebrow, title + (i ? ' (tiếp)' : ''), i ? '' : desc)}
      <div class="cabins">${chunk.map((c) => `<div class="cabin"><img src="${c.img}" alt=""><h4>${esc(c.code)}</h4>${spec(c)}</div>`).join('')}</div>`))
  }
}
cabinPages(CABINS.slice(0, STANDARD_CABIN_COUNT), 'Mẫu cabin', 'Cabin tiêu chuẩn', 'Vách inox sọc nhuyễn kết hợp inox gương tông bạc — bền, dễ vệ sinh, hợp với phần lớn công trình nhà ở và văn phòng.')
cabinPages(CABINS.slice(STANDARD_CABIN_COUNT), 'Mẫu cabin', 'Cabin lựa chọn', 'Inox chạm khắc, inox màu vàng, màu đồng, kính cường lực và tranh kính trang trí cho biệt thự và công trình cần điểm nhấn.')

// 10. Dịch vụ + quy trình
pages.push(page(`
  ${head('Dịch vụ', 'Lắp đặt, bảo trì và hỗ trợ trọn gói', 'Một đầu mối chịu trách nhiệm cho cả vòng đời thang máy.')}
  <div class="two svc">
    <div class="card"><h4>Lắp đặt thang máy</h4>
      <p>Thang máy là sản phẩm kết tinh của hàng ngàn cấu kiện, thiết bị. Để một cỗ máy vận hành êm ái, tất cả các chi tiết đều phải được lắp đặt chính xác và thực sự hoàn hảo.</p>
      <p>Đào tạo đội ngũ lắp đặt, vận hành là yếu tố thiết yếu để Thang máy Hưng Phát không ngừng nâng cao chất lượng — hướng tới mục tiêu thang luôn vận hành an toàn, êm ái và bền lâu.</p></div>
    <div class="card"><h4>Bảo trì thang máy 24/7</h4>
      <p>Thang máy hoạt động với cường độ cao nên khó tránh khỏi những lúc gặp sự cố. Dịch vụ bảo trì, bảo dưỡng 24/7 của Hưng Phát luôn lắng nghe và sẵn sàng đáp ứng mọi yêu cầu của Quý khách hàng.</p>
      <p>Luôn đồng hành, phục vụ kịp thời và nhanh chóng là phương châm hành động của chúng tôi.</p></div>
  </div>
  <h3 class="sub">Dịch vụ hỗ trợ</h3>
  <div class="three">
    <div class="card"><h4>Tư vấn miễn phí</h4><p>Khảo sát nhu cầu sử dụng, tư vấn giải pháp thang máy phù hợp với nhu cầu và ngân sách của khách hàng.</p></div>
    <div class="card"><h4>Thiết kế bản vẽ</h4><p>Bản vẽ thiết kế chi tiết cho hố thang máy, phòng máy và các chi tiết kỹ thuật khác.</p></div>
    <div class="card"><h4>Báo giá chi tiết</h4><p>Báo giá gồm giá sản phẩm, chi phí lắp đặt, thuế VAT, bảo hành.</p></div>
  </div>
  <h3 class="sub">Quy trình 5 bước</h3>
  <ol class="steps">
    ${[['Tư vấn & khảo sát', 'Kỹ thuật viên đến tận công trình đo hố thang, tư vấn miễn phí.'], ['Bản vẽ & báo giá', 'Thiết kế bản vẽ kỹ thuật, báo giá chi tiết từng hạng mục.'], ['Sản xuất & lắp đặt', 'Gia công tại nhà máy, đội thợ lắp đặt đúng tiến độ cam kết.'], ['Kiểm định & bàn giao', 'Chạy thử, kiểm định an toàn và hướng dẫn sử dụng.'], ['Bảo trì 24/7', 'Bảo trì định kỳ, sửa chữa và cứu hộ bất kể ngày đêm.']]
      .map(([t, d], i) => `<li><span class="floor">0${i + 1} ▲</span><h4>${esc(t)}</h4><p>${esc(d)}</p></li>`).join('')}
  </ol>`))

// 11. Showroom
pages.push(page(`
  ${head(esc(SHOWROOM.title), 'Đến xem và đi thử thang thật trước khi quyết định', 'Thang trưng bày giúp khách hàng tận mắt thấy chất liệu kính, khung inox vàng, cabin và bảng điều khiển — rồi tự đi thử để cảm nhận độ êm khi thang vận hành.')}
  <div class="showroom">${SHOWROOM.photos.map((ph) => `<img src="${ph.img}" alt="">`).join('')}</div>
  <div class="dark-card show-cta"><span>Gọi hẹn lịch xem thang tại showroom${SHOWROOM.address ? ' — ' + esc(SHOWROOM.address) : ''}</span><b>${HOTLINE_DISPLAY}</b></div>`))

// 12–13. Công trình: 8 công trình/trang
const typeLabel = (id) => (PROJECT_TYPES.find((t) => t.id === id) || {}).label || ''
for (let i = 0; i < PROJECTS.length; i += 8) {
  const chunk = PROJECTS.slice(i, i + 8)
  pages.push(page(`
    ${head('Dự án', 'Công trình Hưng Phát đã thực hiện' + (i ? ' (tiếp)' : ''), i ? '' : `${PROJECTS.length} công trình thang máy gia đình, tân cổ điển và thang tải hàng tại Hà Nội, Thanh Hóa, Bắc Ninh, Hưng Yên.`)}
    <div class="works">${chunk.map((p) => `
      <div class="work"><img src="${p.photos[0].img}" alt="">
        <div><span class="type">${esc(typeLabel(p.type))}</span><h4>${esc(p.name)}</h4>
        <span class="spec">${[p.floors, p.load, p.speed].filter(Boolean).map(esc).join(' · ')}</span></div>
      </div>`).join('')}
    </div>`))
}

// 12. Hỏi đáp
pages.push(page(`
  ${head('Câu hỏi thường gặp', 'Trước khi lắp thang máy, khách hàng thường hỏi')}
  <div class="faq">${FAQS.map((f) => `<div><h4>${esc(f.q)}</h4><p>${esc(f.a)}</p></div>`).join('')}</div>`))

// 13. Liên hệ
pages.push(page(`
  ${head('Liên hệ', 'Thông tin liên hệ &amp; thanh toán')}
  <div class="contact-top">
    <div class="dark-card"><span>Hotline / Zalo — 24/7</span><b>${HOTLINE_DISPLAY}</b></div>
    <div class="card"><span>Email</span><b>${EMAIL}</b></div>
    <div class="card"><span>Facebook</span><b>${FACEBOOK_URL.replace('https://', '')}</b></div>
  </div>
  <h3 class="sub">Thông tin doanh nghiệp</h3>
  <table class="list">
    <tr><th>Tên công ty</th><td>${esc(LEGAL.name)}</td></tr>
    <tr><th>Tên quốc tế</th><td>${esc(LEGAL.internationalName)}</td></tr>
    <tr><th>Mã số thuế</th><td>${esc(LEGAL.taxCode)}</td></tr>
    <tr><th>Người đại diện</th><td>${esc(LEGAL.representative)} — ${esc(LEGAL.representativeTitle)}</td></tr>
    <tr><th>Địa chỉ</th><td>${esc(LEGAL.registeredAddress)}</td></tr>
    <tr><th>Hoạt động từ</th><td>${esc(LEGAL.activeSince)}</td></tr>
  </table>
  <h3 class="sub">Tài khoản công ty</h3>
  <p class="small">Chủ tài khoản: <b>${esc(LEGAL.name)}</b></p>
  <div class="banks">${BANK_ACCOUNTS.map((a) => `<div class="card"><span>${esc(a.bank)} — ${esc(a.branch)}</span><b>${esc(a.number)}</b></div>`).join('')}</div>
  <h3 class="sub">Văn phòng &amp; nhà máy</h3>
  <table class="list">${OFFICES.map((o) => `<tr><th>${esc(o.title)}</th><td>${esc(o.address)}</td></tr>`).join('')}</table>`))

const css = fs.readFileSync(path.join(__dirname, 'brochure.css'), 'utf8')
fs.writeFileSync(out, `<!doctype html><html lang="vi"><head><meta charset="utf-8"><title>Hồ sơ giới thiệu — Thang máy Hưng Phát</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap">
<style>${css}</style></head><body>${pages.join('\n')}</body></html>`)
console.log('Đã ghi', out, '—', pageNo + 1, 'trang')
