<template>
  <div>
    <div class="grid gap-4">
      <Banner/>
      <Introduce/>
      <Feature/>
      <div data-aos="zoom-in" data-aos-duration="5000" class="px-[10%] bg-gray-light-1 py-20 max-sm:p-4">
        <div class="flex flex-col gap-4">
          <div data-aos="zoom-in" class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            GIÁ TRỊ CỐT LỖI CỦA CHÚNG TÔI
          </div>
          <div data-aos="zoom-in" class="flex items-center justify-center p-4">
            <div class="line"></div>
          </div>
          <div data-aos="fade-up" data-aos-delay="500" class="content grid grid-cols-3 mx-auto gap-4 mt-4 max-sm:grid-cols-1 max-sm:w-full">
            <div class="bg-white p-6 border border-gray-light boxshadow flex flex-col justify-between items-center gap-4" >
              <p class=" text-xl font-bold text-center">Chất lượng vượt trội</p>
              <div class="text-center">
                Chúng tôi sử dụng công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để đảm bảo mỗi thang máy đều đạt tiêu chuẩn chất lượng cao nhất trên thị trường.
              </div>
              <icons-quatity/>
            </div>
            <div class="bg-white p-6 border border-gray-light boxshadow flex flex-col justify-between items-center gap-4">
              <p class=" text-xl font-bold text-center">An toàn tuyệt đối</p>
              <div class="text-center">Thang máy của Hưng Phát được trang bị hệ thống an toàn tiên tiến như phanh khẩn cấp, cảm biến va chạm, đảm bảo an toàn tuyệt đối cho người sử dụng trong mọi tình huống.</div>
              <icons-safe/>
            </div>

            <div class="bg-white p-6 border border-gray-light boxshadow flex flex-col justify-between items-center gap-4">
              <p class=" text-xl font-bold text-center">Thiết kế hiện đại</p>
              <div class="text-center">Thang máy Hưng Phát có thiết kế hiện đại, sang trọng, phù hợp với nhiều kiểu kiến trúc khác nhau, mang đến vẻ đẹp và sự hài hòa cho không gian sống.</div>
              <icons-modern/>
            </div>
          </div>
        </div>
      </div>
      <Products/>
      <ProjectCard />
    </div>

  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  mounted() {
    // Khởi tạo lại AOS mỗi khi thành phần được mount

  }
}
</script>

