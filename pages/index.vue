<template>
  <div>
    <div class="grid gap-4">
      <Banner />
      <Introduce />
      <Feature />
      <div class="px-6 bg-gray-light-1 py-20 max-sm:p-4">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            GIÁ TRỊ CỐT LỖI CỦA CHÚNG TÔI
          </div>
          <div class="flex items-center justify-center p-4">
            <div class="line"></div>
          </div>
          <div class="content grid grid-cols-3 w-3/4 mx-auto gap-4 mt-4 max-sm:grid-cols-1 max-sm:w-full">
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
      <ProjectCard />
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  created() {
  }
}
</script>

<style>
.line {
  background: #004c84;
  width: 100px;
  height: 2px;
}
.boxshadow{
  box-shadow: 0 1px 3px -2px rgba(0, 0, 0, .12), 0 1px 2px rgba(0, 0, 0, .24);
}
</style>
