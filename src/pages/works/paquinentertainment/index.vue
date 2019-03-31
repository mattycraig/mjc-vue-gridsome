<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-paquinentertainment.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li CMS
                  li Responsive
                  li User Interface
                h1 Paquin Entertainment
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/paquinentertainment/hero.png', alt='Paquin Entertainment')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Paquin Entertainment Group is one of Canada's leading entertainment companies operating in Winnipeg, Toronto, and most recently, Los Angeles. From its roots in artist representation, the Company is currently home to four divisions: Artist Management, Artists Agency, Theatre & Film and Corporate Services. Founded in 1985, Paquin Entertainment Group's core vision remains unchanged: build a company that respects the creative process while maximizing earnings and fiscal responsibility.
            a.btn.btn-primary(href='http://www.paquinentertainment.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
              li Email Marketing
            h4 Notable Details
            ul
              li Custom CMS
              li Mobile-first Responsive Design
              li Custom News Module
              li Newsletter Module
            p
              small
                | Agency:
                a(href='http://www.mouthmedia.com', target='_blank') Mouth Media Inc.
    section#gallery
      .title
        span Gallery
      .contain
        .wrapper
          img(src='/images/gallery-upper.png', alt='Gallery')
          .flexslider
            ul.slides
              li
                .area
                  img(src='/images/projects/paquinentertainment/gallery-1.jpg', alt='Paquin Entertainment')
              li
                .area
                  img(src='/images/projects/paquinentertainment/gallery-2.jpg', alt='Paquin Entertainment')
              li
                .area
                  img(src='/images/projects/paquinentertainment/gallery-3.jpg', alt='Paquin Entertainment')
              li
                .area
                  img(src='/images/projects/paquinentertainment/gallery-4.jpg', alt='Paquin Entertainment')
          img(src='/images/gallery-lower.png', alt='Gallery')
      a.viewmore(href='/works')
        | Looking for More?
        i.fa.fa-chevron-circle-right
</template>

<script>
const pageName = 'My Work';
const pageDesc =
  'An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.';
const pageSlug = 'works';

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
