<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-about.panel-port
            .wrapper
              .copy
                ul.sub
                  li Say Hello!
                h1 Contact Me
                p Need to get in touch? I would love to hear from you.
                a.btn.btn-primary(href='#contact2') Contact Information
    section#contact2
      .wrapper
        | Coming Soon
      a.viewmore(href='/images/resume/mjc-resume.pdf')
        | Download my Resume
        i.fa.fa-file-pdf-o
</template>

<script>
const pageName = 'About';
const pageDesc =
  'An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.';
const pageSlug = 'about';

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
