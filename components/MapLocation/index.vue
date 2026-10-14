<template>
  <div class="w-full">
    <div v-if="hasToken" class="relative map__container border-radius-m mt1" :style="styleMap">
      <div ref="map" class="map" :style="`height: ${height}`"></div>
    </div>
    <!-- Chưa cấu hình Mapbox: dẫn sang Google Maps thay vì để khung trống -->
    <a
      v-else
      :href="fallbackUrl"
      target="_blank"
      rel="noopener"
      class="flex flex-col items-center justify-center gap-3 text-center bg-stone border border-line hover:border-ink p-6"
      :style="styleMap"
    >
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5" /></svg>
      <span class="font-semibold">Xem vị trí {{ firstOffice.title.toLowerCase() }} trên Google Maps</span>
      <span class="text-sm text-muted">{{ firstOffice.address }}</span>
    </a>
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
    hasToken() {
      return Boolean(this.$config.ACCESS_TOKEN_MAP_BOX);
    },
    firstOffice() {
      return OFFICES[0];
    },
    fallbackUrl() {
      const [lng, lat] = OFFICES[0].coordinates;
      return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
    },
    styleMap() {
      return {
        width: this.width,
        height: this.height,
        borderRadius: this.isBorderRadius ? "12px" : 0,
      };
    },
  },
  mounted() {
    if (!this.hasToken) return;
    const accessToken = this.$config.ACCESS_TOKEN_MAP_BOX;

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
      new mapboxgl.Marker({ color: "#B8302A" })
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
