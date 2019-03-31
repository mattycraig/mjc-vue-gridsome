<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-annehepfer.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li CMS
                  li E-Commerce
                  li Wordpress
                h1 Anne Hepfer
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/annehepfer/hero.png', alt='Anne Hepfer')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Known for her keen artistry and tireless devotion to clients, interior design entrepreneur Anne Hepfer hails from a long line of female artists. The New York native draws inspiration from her repertoire of cosmopolitan experiences, fusing elements from a range of periods and cultures while maintaining a style that is both distinctive and timeless.
            p Needing an online presense including a store for her new line of home furniture, Anne Hepfer came to us to deliver a unique website, blog, and e-commerce solution that matched her clean minimal branding. We created and developed a custom built CMS to match her specific needs which inlcuded a portfolio, and an inventory system controlled via a user-friendly back-end solution. We also developed a blog built with Wordpress and connected to her custom CMS so she could post relevant news, events, and inspriation for her home decor projects.
            a.btn.btn-primary(href='http://www.annehepfer.com', target='_blank') Visit Website
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
              li Portfolio
              li Wordpress Blog
              li E-Commerce Solution
              li Inventory System
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
                  img(src='/images/projects/annehepfer/gallery-1.jpg', alt='Anne Hepfer')
              li
                .area
                  img(src='/images/projects/annehepfer/gallery-2.jpg', alt='Anne Hepfer')
              li
                .area
                  img(src='/images/projects/annehepfer/gallery-3.jpg', alt='Anne Hepfer')
              li
                .area
                  img(src='/images/projects/annehepfer/gallery-4.jpg', alt='Anne Hepfer')
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
