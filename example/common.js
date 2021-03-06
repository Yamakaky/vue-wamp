
import 'jquery';
import { options, TOP_1, TOP_2, RPC_1, RPC_2 } from './config'
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueWamp from '../lib/vue-wamp.js'
import ComMessage from './components/message.vue'
import ComLabel from './components/label.vue'
import ComSize from './components/size.vue'

import './app.scss';

Vue.use(VueResource);

Vue.use(VueWamp, options({
  debug: false,
  lazy_open: false,
  onopen(session, details) {
    console.log('WAMP client connected', session, details);
  },
  onclose(reason, details) {
    console.log('WAMP client closed: ' + reason, details);
  }
}));

export default Vue
export { Vue, ComLabel, ComMessage, ComSize, TOP_1, TOP_2, RPC_1, RPC_2 }