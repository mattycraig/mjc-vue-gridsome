<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-commercecourt.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Responsive
                  li CMS
                h1 Commerce Court
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/commercecourt/hero.png', alt='Commerce Court')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Commerce Court is a rare complex that intersects and inspires the worlds of business and architecture. Its history reaches back to 1931 when at that time, The North Tower, designed by the firm Pearson and Darling, was the tallest building in the British Empire and today remains a historical Beaux-Arts jewel. The other three modern buildings, Commerce Court West, East and South, were designed by I.M. Pei, who is one of the most influential architects of modern era and recipient of numerous international awards.
            p Commerce Court came to us looking to rebrand their current website using a custom built CMS solution in which they could easily update themselves. We started with a mobile-first responsive design & front-end development that matched their new branding standards. Next we built a custom CMS with various modules including galleries and newsletters that could easily be implemented throughout the site.
            a.btn.btn-primary(href='http://www.commerce-court.com', target='_blank') Visit Website
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
                  img(src='/images/projects/commercecourt/gallery-1.jpg', alt='Commerce Court')
              li
                .area
                  img(src='/images/projects/commercecourt/gallery-2.jpg', alt='Commerce Court')
              li
                .area
                  img(src='/images/projects/commercecourt/gallery-3.jpg', alt='Commerce Court')
              li
                .area
                  img(src='/images/projects/commercecourt/gallery-4.jpg', alt='Commerce Court')
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
