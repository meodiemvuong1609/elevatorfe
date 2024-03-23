<template>
  <div class="w-full">
    <div class=" relative map__container border-radius-m mt1">
      <div id="map"></div>
    </div>
  </div>
</template>

<script>
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css'
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder'
import mapboxgl from 'mapbox-gl';


export default {
  name: 'MapGetLocation',
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
      default: false,
    },
    draggable: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log(this.$config.ACCESS_TOKEN_MAP_BOX);
    const accessToken = this.$config.ACCESS_TOKEN_MAP_BOX
    this.map = new mapboxgl.Map({
      accessToken: accessToken,
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v12', // Specify the map style here
      center: [105.6894529, 19.87015], // Specify the center of the map
      zoom: 10 // Specify the zoom level
    });

    const geocoder = new MapboxGeocoder({
      accessToken: accessToken,
      mapboxgl: mapboxgl
    });
    this.map.addControl(geocoder);

    // Add marker at [0, 0]
    new mapboxgl.Marker().setLngLat([105.6894529, 19.87015]).addTo(this.map);
  },
}
</script>

<style lang="scss">
.map__container {
  overflow: hidden;
  &:before {
    content: '';
    display: block;
    padding-top: calc(167 / 335 * 100%);
  }
}

.mapboxgl-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
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
