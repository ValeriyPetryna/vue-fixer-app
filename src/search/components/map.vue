<template>
  <div>
    <gmap-map :center="center" :zoom="15" style="width: 100%; height: 500px">
      <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen = false" />

      <gmap-marker v-for="(m, i) in markers" :key="i" :position="m.position" :clickable="true" @click="toggleInfoWindow(m, i)" />
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',

  data() {
    return {
      center: {
        lat: 47.376332,
        lng: 8.547511,
      },
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      infoOptions: {
        content: '',
        // optional: offset infowindow so it visually sits nicely on top of our marker
        pixelOffset: {
          width: 0,
          height: -35,
        },
      },
      markers: [
        {
          position: {
            lat: 47.376332,
            lng: 8.547511,
          },
          infoText: '<strong>Marker 1</strong>',
        },
        {
          position: {
            lat: 47.374592,
            lng: 8.548867,
          },
          infoText: '<strong>Marker 2</strong>',
        },
        {
          position: {
            lat: 47.379592,
            lng: 8.549867,
          },
          infoText: '<strong>Marker 3</strong>',
        },
      ],
    };
  },

  methods: {
    // receives a place object via the autocomplete component
    setPlace(place) {
      this.currentPlace = place;
    },
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng(),
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    geolocate() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    },
    openInfoWindowTemplate(item) {
      this.setInfoWindowTemplate(item);
      this.infoWindow.position = this.getCoordinates(item);
      this.infoWindow.open = true;
    },
    toggleInfoWindow(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoOptions.content = marker.infoText;
      // check if its the same marker that was selected if yes toggle
      if (this.currentMidx === idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      // if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
  },
};
</script>