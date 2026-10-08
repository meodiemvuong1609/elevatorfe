<template>
  <div class="w-full">
    <div class="relative map__container border-radius-m mt1" :style="styleMap">
      <div ref="map" class="map" :style="`height: ${height}`"></div>
    </div>
  </div>
</template>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import mapboxgl from "mapbox-gl";
import { OFFICES } from "~/common/lib/company";

export default {
  name: "MapGetLocation",
  props: {
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
    if (!accessToken) {
      console.warn("[MapLocation] Thiếu ACCESS_TOKEN_MAP_BOX, bỏ qua bản đồ");
      return;
    }

    // Dùng ref thay vì id="map": trang Liên hệ có 2 bản đồ (nội dung + footer),
    // id trùng khiến cả 2 instance cùng vẽ vào 1 khung.
    this.map = new mapboxgl.Map({
      accessToken,
      container: this.$refs.map,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [106.81316, 16.923992],
      zoom: 4.8,
    });

    const geocoder = new MapboxGeocoder({
      accessToken,
      mapboxgl,
      placeholder: "Tìm kiếm...",
      marker: false,
    });
    this.map.addControl(geocoder);

    OFFICES.forEach((office) => {
      const popup = new mapboxgl.Popup().setDOMContent(
        Object.assign(document.createElement("p"), {
          textContent: `${office.title}: ${office.address}`,
        })
      );
      new mapboxgl.Marker({ color: "red" })
        .setLngLat(office.coordinates)
        .setPopup(popup)
        .addTo(this.map);
    });
  },
  beforeDestroy() {
    if (this.map) this.map.remove();
  },
};
</script>

<style lang="scss" scoped>
.map__container {
  overflow: hidden;
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
