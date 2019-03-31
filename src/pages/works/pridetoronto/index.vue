<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-pridetoronto.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Web
                  li Mobile
                  li CMS
                h1 Pride Toronto
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/pridetoronto/hero.png', alt='Pride Toronto')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Pride Toronto exists to celebrate the history, courage, diversity and future of Ottawa's LGBTTIQQ2SA* communities. Pride Toronto is the not-for-profit organization that hosts Pride Week, one of the premier arts and cultural festivals in Canada. Pride Week is also one of the largest Pride celebrations in the world, with an estimated attendance of over 1.2 million people celebrating the history, courage, diversity and future of Ottawa's LGBTTIQQ2SA communities.
            p Pride Toronto came to us looking for a way to showcase the festival and events for their yearly Pride celebration in Ottawa. We provided a custom built CMS solution that can be reused from year to year as well as a mobile solution to allow visitors and festival goers the ability to access events easily. Similarly we provided a facebook campaign and other social media intergration to allow the conversation to continue throughout the entire year.
            a.btn.btn-primary(href='http://www.pridetoronto.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
              li Facebook Campaign
              li Email Marketing
            h4 Notable Details
            ul
              li Custom CMS
              li Mobile Design & Development
              li Newsletter Module
              li Social Media Integration
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
                  img(src='/images/projects/pridetoronto/gallery-1.jpg', alt='Pride Toronto')
              li
                .area
                  img(src='/images/projects/pridetoronto/gallery-2.jpg', alt='Pride Toronto')
              li
                .area
                  img(src='/images/projects/pridetoronto/gallery-3.jpg', alt='Pride Toronto')
              li
                .area
                  img(src='/images/projects/pridetoronto/gallery-4.jpg', alt='Pride Toronto')
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
