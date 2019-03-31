<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-paquinartists.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li CMS
                  li Responsive
                  li User Interface
                h1 Paquin Artists Agency
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/paquinartists/hero.png', alt='Paquin Artists Agency')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Paquin Artists Agency proudly represent world-class artists on a national and international level. Their roster covers a wide spectrum of art forms, spanning from music to theatre to dance, and they move seamlessly between these genres. Whatever the genre, as agents, Paquin Artists Agency is charged with developing their artists' careers through innovative solutions and hard work; and they take this responsibility seriously. Working hand-in-hand with their clients, they develop and implement tour strategies proven to create successful and sustainable careers.
            a.btn.btn-primary(href='http://www.paquinartistsagency.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
            h4 Notable Details
            ul
              li Custom CMS
              li Mobile-first Responsive Design
              li Agent Area Login
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
                  img(src='/images/projects/paquinartists/gallery-1.jpg', alt='Paquin Artists Agency')
              li
                .area
                  img(src='/images/projects/paquinartists/gallery-2.jpg', alt='Paquin Artists Agency')
              li
                .area
                  img(src='/images/projects/paquinartists/gallery-3.jpg', alt='Paquin Artists Agency')
              li
                .area
                  img(src='/images/projects/paquinartists/gallery-4.jpg', alt='Paquin Artists Agency')
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
