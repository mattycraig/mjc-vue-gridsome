<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-urbansun.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Wordpress
                  li Responsive
                h1 Urbansun
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/urbansun/hero.png', alt='Urbansun')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Urbansun offers leading tanning equipment and products complemented with professionally trained staff.
            a.btn.btn-primary(href='http://www.urbansun.ca', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Project Management
              li Prototype & Wireframing
              li Creative Design
              li Front-end & Back-end Development
              li Email Marketing
            h4 Notable Details
            ul
              li Wordpress Driven
              li Responsive Design
              li Email Newsletters & Promotions
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
                  img(src='/images/projects/urbansun/gallery-1.jpg', alt='Urbansun')
              li
                .area
                  img(src='/images/projects/urbansun/gallery-2.jpg', alt='Urbansun')
              li
                .area
                  img(src='/images/projects/urbansun/gallery-3.jpg', alt='Urbansun')
              li
                .area
                  img(src='/images/projects/urbansun/gallery-4.jpg', alt='Urbansun')
          img(src='/images/gallery-lower.png', alt='Gallery')
      a.viewmore(href='/works')
        | Looking for More?
        i.fa.fa-chevron-circle-right
</template>

<script>
const pageName = "My Work";
const pageDesc =
  "An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.";
const pageSlug = "works";

import { siteAuthor, siteTagline, siteUrl } from "@/vars.js";
const pageUrl = siteUrl + "/" + pageSlug;
const pageTitle = pageName + siteAuthor + siteTagline;

export default {
  metaInfo: {
    title: pageTitle,
    meta: [
      {
        key: "description",
        name: "description",
        content: pageDesc
      },
      {
        property: "og:title",
        content: pageTitle
      },
      {
        property: "og:url",
        content: pageUrl
      },
      {
        property: "og:image",
        content: siteUrl + "/images/og-home.jpg"
      },
      {
        property: "og:description",
        content: pageDesc
      },
      {
        property: "twitter:title",
        content: pageTitle
      },
      {
        property: "twitter:description",
        content: pageDesc
      },
      {
        property: "twitter:image",
        content: siteUrl + "/images/tw-home.jpg"
      },
      {
        property: "twitter:url",
        content: pageUrl
      }
    ]
  }
};
</script>

<style lang="scss">
</style>
