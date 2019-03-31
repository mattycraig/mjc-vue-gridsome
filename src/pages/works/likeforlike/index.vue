<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-likeforlike.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li E-Commerce
                  li Web
                  li User Interface
                h1 Like for Like
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/likeforlike/hero.png', alt='Like for Like')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Like for Like is an online marketplace for trading women’s luxury items - choose the value of your items to trade with other members for like value or donate them to recognized charities to improve the lives of women and children. Like for Like Members maximize the value of their used luxury goods by trading for "like value" items with other members. You control the trade by choosing the items you want to trade, setting their trade value, and the parameters of the trade.
            a.btn.btn-primary(href='http://www.likeforlike.ca', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Project Management
              li Strategy
              li Prototyping & Wireframe
              li Creative Design
              li Front-end Development
            h4 Notable Details
            ul
              li E-Commerce Solution
              li Custom CMS
              li Inventory System
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
                  img(src='/images/projects/likeforlike/gallery-1.jpg', alt='Like for Like')
              li
                .area
                  img(src='/images/projects/likeforlike/gallery-2.jpg', alt='Like for Like')
              li
                .area
                  img(src='/images/projects/likeforlike/gallery-3.jpg', alt='Like for Like')
              li
                .area
                  img(src='/images/projects/likeforlike/gallery-4.jpg', alt='Like for Like')
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
