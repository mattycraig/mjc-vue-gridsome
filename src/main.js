// APP ASSETS
require('typeface-oswald');
require('typeface-poppins');
import $ from 'jquery';
import Unicon from 'vue-unicons';
import {
  uniAlignCenterAlt,
  uniTimes,
  uniArrowCircleDown,
  uniArrowCircleRight,
  uniShieldQuestion,
  uniCommentAltImage,
  uniNewspaper,
  uniCommentDots
} from 'vue-unicons/src/icons';
Unicon.add([
  uniAlignCenterAlt,
  uniTimes,
  uniArrowCircleDown,
  uniArrowCircleRight,
  uniShieldQuestion,
  uniCommentAltImage,
  uniNewspaper,
  uniCommentDots
]);

// APP SPECIFIC
import '@/assets/scss/layout.scss';
import LayoutDefault from '~/layouts/LayoutDefault.vue';

export default function(Vue, { head }) {
  head.htmlAttrs = {
    itemscope: '',
    itemtype: 'http://schema.org/Person',
    class: 'no-js'
  };
  Vue.use(Unicon);
  Vue.component('LayoutDefault', LayoutDefault);
}
