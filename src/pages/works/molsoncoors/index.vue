<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-molsoncoors.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Sitecore CMS
                  li Responsive
                  li Angular JS
                h1 Molson Coors
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/molsoncoors/hero.png', alt='Molson Coors')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p The Molson Coors Brewing Company is a multinational brewing company, formed in 2005 by the merger of Molson of Canada, and Coors of the United States. It is the world's seventh largest brewer by volume. With a story that starts in 1774, Molson Coors has spent centuries defining brewing greatness.
            a.btn.btn-primary(href='http://www.molsoncoors.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
            h4 Notable Details
            ul
              li Brands
              li Sustainability
              li Sitecore CMS
              li Angular JS Driven
              li Fully Responsive
              li Built Mobile-first
              li Third-party Integrations
            p
              small
                | Agency:
                a(href='http://www.sandboxww.com', target='_blank') Sandbox Advertising
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
