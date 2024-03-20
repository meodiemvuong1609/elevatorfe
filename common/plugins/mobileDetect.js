import MobileDetect from 'mobile-detect';

export default ({ app }, inject) => {
  const mobileDetect = new MobileDetect(window.navigator.userAgent);
  inject('mobileDetect', mobileDetect);
};
