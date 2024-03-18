import Vue from 'vue';

Vue.mixin({
  methods: {
    convertMoney(value) {
      const x = value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' });
      return x;
    },

    convertTime(value) {
      let time = value.split('T')
      return time[0];
    },

    closeNavigationBar() {
      const elmNav = document.getElementsByClassName('navbar__wrapper')
      if(elmNav && elmNav.length > 0) elmNav[0].classList.add('hidden-navigation')
    },

    openNavigationBar() {
      const elmNav = document.getElementsByClassName('navbar__wrapper')
      if(elmNav && elmNav.length > 0) elmNav[0].classList.remove('hidden-navigation')
    },
  }
})