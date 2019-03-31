<template lang="pug">
  div
    SiteHeader
    slot
    SiteFooter
</template>

<script>
import SiteHeader from '~/components/SiteHeader.vue';
import SiteFooter from '~/components/SiteFooter.vue';

const siteAuthor = 'Matthew Jason Craig';
const siteUrl = 'https://www.matthewjasoncraig.com';

export default {
  components: {
    SiteHeader,
    SiteFooter
  },
  metaInfo: {
    meta: [
      { name: 'author', content: siteAuthor },
      { itemprop: 'name', content: siteAuthor },
      {
        itemprop: 'image',
        content: siteUrl + '/images/og-home.jpg'
      },
      {
        name: 'google-site-verification',
        content: 'gMIgFMB-j0OK8mHYyKJutQAPlBdW-TGFXsFjQzgNqBo'
      },
      { name: 'msapplication-TileColor', content: 'msapplication-TileColor' },
      { name: 'msapplication-TileImage', content: '/images/icons/logo.png' },
      {
        property: 'og:site_name',
        content: siteAuthor
      },
      {
        property: 'twitter:card',
        content: 'summary'
      }
    ],
    link: [
      { rel: 'shortcut icon', href: '/images/icons/favicon.ico' },
      {
        rel: 'apple-touch-icon-precomposed',
        href: '/images/icons/apple-touch-icon-precomposed.png'
      },
      {
        rel: 'sitemap',
        type: 'application/xml',
        title: 'Sitemap',
        href: '/sitemap.xml'
      }
    ],
    script: [
      {
        src: '/js/libs/modernizr-2.8.0.min.js',
        async: false,
        defer: false
      },
      {
        src: 'https://www.google.com/recaptcha/api.js',
        async: false,
        defer: false,
        body: true
      }
    ]
  },
  mounted() {
    window.jQuery = require('jquery');
    window.$ = require('jquery');
    window.flexslider = require('../assets/js/scripts/jquery.flexslider.js');

    // HERO
    $('.flexslider').flexslider({
      controlNav: true,
      prevText: 'Prev',
      nextText: 'Next',
      pauseOnHover: true
    });

    // SIDENAV
    $('#navToggle').click(function(e) {
      e.preventDefault();
      $(this).toggleClass('is-active');
      $('body, #app').toggleClass('is-pushed');
      $('#asideNav').toggleClass('is-open');
    });
    $('#asideNavToggle').click(function(e) {
      e.preventDefault();
      $('#navToggle').removeClass('is-active');
      $('body, #app').removeClass('is-pushed');
      $('#asideNav').removeClass('is-open');
    });
    $('#asideNav .sidenav-link').click(function() {
      $('#navToggle').removeClass('is-active');
      $('body, #app').removeClass('is-pushed');
      $('#asideNav').removeClass('is-open');
    });

    // FIXED HDR
    var lastScrollTop = 0;
    $(window).scroll(function() {
      var windowTop = $(this).scrollTop();
      var introHeight = $('#intro').height();
      var introHeightStart = $('#intro').height() - 50;
      var introHeightEnd = $('#intro').height() + 50;

      // SCROLLING DIRECTION
      if (lastScrollTop > windowTop) {
        $('#appHeader')
          .addClass('scrolling-up')
          .removeClass('scrolling-down');
      } else {
        $('#appHeader')
          .addClass('scrolling-down')
          .removeClass('scrolling-up');
      }

      // UNFIX ON INIT
      if (windowTop < introHeightStart) {
        $('#appHeader')
          .removeClass('header-fixed')
          .addClass('header-unfixed');
      }

      // FIXED ONCE ANIMATION START
      if (windowTop >= introHeightStart) {
        $('#appHeader')
          .removeClass('header-unfixed')
          .addClass('header-fixed');
      }

      // if (windowTop >= introHeightEnd) {
      //   $('#header')
      //     .removeClass('header-unfixed')
      //     .addClass('header-fixed');
      // }

      // ANIMATION START WINDOW
      if (windowTop >= introHeightStart && windowTop < introHeight) {
        $('#appHeader').addClass('animate-start-window');
      } else {
        $('#appHeader').removeClass('animate-start-window');
      }

      // ANIMATION END WINDOW
      if (windowTop <= introHeightEnd && windowTop >= introHeight) {
        $('#appHeader').addClass('animate-end-window');
      } else {
        $('#appHeader').removeClass('animate-end-window');
      }

      // INBETWEEN BOTH ANIMATION STATES
      if (windowTop >= introHeightStart && windowTop <= introHeightEnd) {
        // $('#header').addClass('animate-window-between');
      } else {
        // $('#header').removeClass('animate-window-between');
      }

      lastScrollTop = windowTop;
    });

    // SCROLLING;
    $("a[href*='#']:not([href='#'])").click(function() {
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name='" + this.hash.slice(1) + "']");
        if (target.length) {
          $('html,body').animate(
            {
              scrollTop: target.offset().top
            },
            1000
          );
          return false;
        }
      }
    });
  }
};
</script>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<style lang="scss">
</style>
