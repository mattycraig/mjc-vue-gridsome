<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-404.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Whoops! Page not Found
                h1 Error 404
                p You must have taken a wrong turn somewhere, there's nothing here!
                a.btn.btn-primary(href='/') Get me Outta Here!
            img.thumbnail(src='/images/404-hero.png', alt='Error 404')

</template>

<script>
const pageName = 'Error 404';
const pageDesc =
  'An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.';
const pageSlug = '404';

import { siteAuthor, siteTagline, siteUrl } from '@/vars.js';
const pageUrl = siteUrl + '/' + pageSlug;
const pageTitle = pageName + siteAuthor + siteTagline;

export default {
  metaInfo: {
    title: pageTitle,
    meta: [
      {
        key: 'description',
        name: 'description',
        content: pageDesc
      },
      {
        property: 'og:title',
        content: pageTitle
      },
      {
        property: 'og:url',
        content: pageUrl
      },
      {
        property: 'og:image',
        content: siteUrl + '/images/og-home.jpg'
      },
      {
        property: 'og:description',
        content: pageDesc
      },
      {
        property: 'twitter:title',
        content: pageTitle
      },
      {
        property: 'twitter:description',
        content: pageDesc
      },
      {
        property: 'twitter:image',
        content: siteUrl + '/images/tw-home.jpg'
      },
      {
        property: 'twitter:url',
        content: pageUrl
      }
    ]
  }
};
</script>

<style lang="scss">
</style>
