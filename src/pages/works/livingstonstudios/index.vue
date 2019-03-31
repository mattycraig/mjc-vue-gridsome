<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-livingstonstudios.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Web
                h1 Livingston Studios
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/livingstonstudios/hero.png', alt='Livingston Studios')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Livingston Studios exists to connect, create and innovate - a place where all artist in the industry could gather, train and share knowledge and experiences. Asti Livingston founded Livingston Studios in August 2013. From the start of Asti entering into the world of voice over, she wanted a place where new talents could be discovered and creativity could flow and flourish. It is a sanctuary where voice over actors and actresses could go when they needed assistance in improving their craft, honing their skills, or just being around fellow artists. Livingston Studios is welcomes children and senior voice talents alike, also features a sound pod that is handicap accessible.
            a.btn.btn-primary(href='http://www.livingstonstudios.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
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
                  img(src='/images/projects/livingstonstudios/gallery-1.jpg', alt='Livingston Studios')
              li
                .area
                  img(src='/images/projects/livingstonstudios/gallery-2.jpg', alt='Livingston Studios')
              li
                .area
                  img(src='/images/projects/livingstonstudios/gallery-3.jpg', alt='Livingston Studios')
              li
                .area
                  img(src='/images/projects/livingstonstudios/gallery-4.jpg', alt='Livingston Studios')
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
