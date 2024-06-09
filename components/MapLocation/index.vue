<template>
  <div class="w-full">
    <div class="relative map__container border-radius-m mt1" :style="styleMap">
      <div id="map" :style="`height: ${height}`"></div>
    </div>
  </div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";

export default {
  name: "MapGetLocation",
  props: {
    data: {
      type: Object,
      default: () => {},
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    hasSearchBox: {
      type: Boolean,
      default: true,
    },
    draggable: {
      type: Boolean,
      default: true,
    },
    width: {
      type: String,
      default: () => "100%",
    },
    height: {
      type: String,
      default: () => "30vh",
    },
    isBorderRadius: {
      type: Boolean,
      default: () => false,
    },
  },
  data() {
    return {};
  },
  computed: {
    styleMap() {
      return {
        width: this.width,
        height: this.height,
        borderRadius: this.isBorderRadius ? "12px" : 0,
      };
    },
  },
  mounted() {
    const accessToken = this.$config.ACCESS_TOKEN_MAP_BOX;
    this.map = new mapboxgl.Map({
      accessToken: accessToken,
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12", // Specify the map style here
      center: [106.81316, 16.923992], // Specify the center of the map
      zoom: 4.8, // Specify the zoom level
    });

    106.81316;

    const geocoder = new MapboxGeocoder({
      accessToken: accessToken,
      mapboxgl: mapboxgl,
      placeholder: "Tìm kiếm...",
      marker: false,
    });
    this.map.addControl(geocoder);

    const locations = [
      { name: "Địa chỉ 1", coordinates: [105.797144, 21.033671] }, // Số 8, ngõ 9, Dương Quảng Hàm, Quan Hoa, Cầu Giấy, Hà Nội
      { name: "Địa chỉ 2", coordinates: [107.025327, 20.964033] }, // Số 100, Đ. Đội Cấn, Tổ 7, Khu 5, P.Giếng Đáy, TP.Hạ Long, T.Quảng Ninh
      { name: "Địa chỉ 3", coordinates: [105.764289, 19.799502] }, // Số 22 đường Phú Thứ, Phường Phú Sơn, Thành phố Thanh Hóa
      { name: "Địa chỉ 4", coordinates: [106.672826, 10.819282] }, // Số 497/73/14 Phan Văn Trí, Phường 5, Quận Gò Vấp, Thành phố Hồ Chí Minh
      { name: "Địa chỉ 5", coordinates: [105.630921, 19.757815] }, // KCN Thiệu Hóa, Tiểu Khu 13, Thị trấn Thiệu Hóa, Huyện Thiệu Hóa, Tỉnh Thanh Hóa
    ];

    locations.forEach((location) => {
      new mapboxgl.Marker()
        .setLngLat(location.coordinates)
        .addTo(this.map)
        .setPopup(new mapboxgl.Popup().setHTML(`<p>${location.name}</p>`));
    });
  },
};
</script>

<style lang="scss" scoped>
.map__container {
  overflow: hidden;
  // width: 80%;
  height: 120%;
  &:before {
    content: "";
    display: block;
    padding-top: calc(167 / 335 * 100%);
  }
}
.mapboxgl-map {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.mapboxgl-ctrl-geocoder--input {
  border-radius: 8px !important;
  height: 40px !important;
  font-size: 14px;
}
.mapboxgl-ctrl-geocoder--icon-search {
  top: 8px;
}

.mapboxgl-ctrl-geocoder--icon-close {
  margin-top: 3px;
}
</style>
