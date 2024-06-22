// plugins/aos.js
import AOS from 'aos';
import 'aos/dist/aos.css';

export default ({ app }) => {
  if (process.client) {
    app.AOS = new AOS.init({ once: true });
  }
};
