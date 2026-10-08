<template>
  <div>
    <div class="grid gap-4">
      <div class="bg-banner">
        <div class="fill w-full h-full flex justify-center items-center">
          <p class="font-bold text-2xl sm:text-3xl text-white text-center px-4">VỀ CHÚNG TÔI</p>
        </div>
      </div>
      <div class="p-6 max-sm:p-4">
        <div class="flex items-center justify-center  text-center">
          <p class="font-bold text-2xl max-sm:text-xl">HUNG PHAT ELEVATOR</p> 
        </div>
        <div class="flex items-center justify-center p-4">
          <div class="line"></div>
        </div>
        <div class=" w-3/5 mx-auto text mt-4 max-sm:w-full max-sm:px-4">
          <div class=" text-gray-1 text-center">
            Bắt đầu từ những chiếc thang máy gia đình có trải nghiệm tốt nhất, an toàn nhất, thẩm mỹ cá nhân hóa với giá cả cạnh tranh. Thang máy Hưng Phát không ngừng nỗ lực và cải tiến để mang đến cho khách hàng trải nghiệm mua hàng tốt nhất, dịch vụ sau mua hàng chất lượng và tận tâm.
          </div>
        </div>
      </div>

      <div class="px-6 bg-gray-light-1 py-20 max-sm:p-4">
        <div class="flex flex-col gap-4">
          <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            GIÁ TRỊ CỐT LỖI
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

      <div class="px-6 py-12 max-sm:p-4">
        <div>
          <div class="flex items-center justify-center font-bold text-2xl max-sm:text-xl text-center">
            TẦM NHÌN VÀ SỨ MỆNH
          </div>
          <div class="flex items-center justify-center p-4">
            <div class="line"></div>
          </div>
          <div class="content grid grid-cols-2 w-3/4 mx-auto gap-4 mt-4 max-sm:grid-cols-1 max-sm:w-full">
            <div class="bg-white pb-6 border border-gray-light" >
              <div class="h-[300px]">
                <img src="~/assets/img/feature3.jpeg" class="w-full h-full object-cover" alt="Tầm nhìn Thang máy Hưng Phát">
              </div>
              <p class=" text-xl font-bold text-center py-4">Tầm nhìn</p>
              <div class="text-center">
                Chúng tôi sử dụng công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để đảm bảo mỗi thang máy đều đạt tiêu chuẩn chất lượng cao nhất trên thị trường.
              </div>
            </div>
            <div class="bg-white pb-6 border border-gray-light" >
              <div class="h-[300px]">
                <img src="https://www.psychologicalscience.org/redesign/wp-content/uploads/2017/01/PAFF_012516_businesspeoplehands-1024x683.jpg" class="w-full h-full object-cover" alt="">
              </div>
              <p class=" text-xl font-bold text-center py-4">Sứ mệnh</p>
              <div class="text-center">
                Chúng tôi sử dụng công nghệ hiện đại, vật liệu cao cấp và quy trình sản xuất nghiêm ngặt để đảm bảo mỗi thang máy đều đạt tiêu chuẩn chất lượng cao nhất trên thị trường.
              </div>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "Giới thiệu",
      meta: [{ hid: "description", name: "description", content: "Hơn 10 năm trong lĩnh vực thang máy gia đình: Hưng Phát tư vấn, cung cấp, lắp đặt và bảo trì thang máy cho biệt thự, nhà phố, văn phòng, chung cư." }],
    };
  },
  name: 'Introduce',

}
</script>

<style lang="scss" scoped>

.carousel-cell {
  width: 100%;
  margin-right: 10px;
  border-radius: 5px;
  overflow: hidden;
  img {
    width: 100%;
    height: 500px;
  }
}


</style>