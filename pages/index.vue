<template>
  <div>
    <div class="grid gap-4">
      
      <Banner />
      <Introduce />
      <Feature />
      <div class="px-6 bg-gray-light-1 py-12">
        <div>
          <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            GIÁ TRỊ CỐT LỖI CỦA CHÚNG TÔI
          </div>
          <div class="flex items-center justify-center p-4">
            <div class="line"></div>
          </div>
          <div class="content grid grid-cols-3 w-3/4 mx-auto gap-4 mt-4">
            <div class="bg-white p-6 border border-gray-light" >
              <p class=" text-xl font-bold text-center pb-4">Chất lượng vượt trội</p>
              <div class="text-center">
                Chúng tôi sử dụng công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để đảm bảo mỗi thang máy đều đạt tiêu chuẩn chất lượng cao nhất trên thị trường.
              </div>
            </div>
            <div class="bg-white p-6 border border-gray-light">
              <p class=" text-xl font-bold text-center pb-4">An toàn tuyệt đối</p>
              <div class="text-center">Thang máy của Hưng Phát được trang bị hệ thống an toàn tiên tiến như phanh khẩn cấp, cảm biến va chạm, đảm bảo an toàn tuyệt đối cho người sử dụng trong mọi tình huống.</div>
            </div>

            <div class="bg-white p-6 border border-gray-light">
              <p class=" text-xl font-bold text-center pb-4">Thiết kế hiện đại</p>
              <div class="text-center">Thang máy Hưng Phát có thiết kế hiện đại, sang trọng, phù hợp với nhiều kiểu kiến trúc khác nhau, mang đến vẻ đẹp và sự hài hòa cho không gian sống.</div>
            </div>
          </div>
        </div>
      </div>
      <!-- <Project /> -->
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>
