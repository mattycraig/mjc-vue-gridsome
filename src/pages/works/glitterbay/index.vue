<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-glitterbay.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Responsive
                  li CMS
                h1 Royal Glitter Bay Villas
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/glitterbay/hero.png', alt='Royal Glitter Bay Villas')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Royal Glitter Bay Villas is more than just an accommodation for a holiday in Barbados - it’s a lifestyle that lazes and reclines. Royal Glitter Bay Villas in Barbados evoke all the senses with its rich palette of tropical colors and amazing light. Vibrant, rich greens fringed by warm white sand and turquoise shallows is softened by coral pink reefs under a canopy of blue skies. Located on Glitter Bay which is one of the most beautiful beaches you will find not only in Barbados but the world. This magnificent white sandy beach is just steps aways your villa and always free of crowds and noise.
            p Royal Glitter Bay Villas came to us looking to create an online presense for the rentable villas that match the look and feel of the island of Barbados. Using a seafoam green and sky blue, we were able to present a unique and engaging website that would excite and entice visitors to want to book and visit. We provided a mobile-first responsive design in order to allow multiple devices the best view of the website, as well as a custom CMS to allow the site to be updated easily.
            a.btn.btn-primary(href='http://www.royalglitterbay.com', target='_blank') Visit Website
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
                  img(src='/images/projects/glitterbay/gallery-1.jpg', alt='Royal Glitter Bay Villas')
              li
                .area
                  img(src='/images/projects/glitterbay/gallery-2.jpg', alt='Royal Glitter Bay Villas')
              li
                .area
                  img(src='/images/projects/glitterbay/gallery-3.jpg', alt='Royal Glitter Bay Villas')
              li
                .area
                  img(src='/images/projects/glitterbay/gallery-4.jpg', alt='Royal Glitter Bay Villas')
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
