<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-leatherfoot.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li CMS
                  li E-Commerce
                  li Wordpress
                h1 Leatherfoot
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/leatherfoot/hero.png', alt='Leatherfoot')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Leatherfoot is the first store to bring the world’s most exceptional footwear brands to Canada for discerning men who appreciate true quality and exquisite craftsmanship. With the store front located in the heart of downtown Toronto already established, Leatherfoot came to us looking for an online e-commerce solution to match the look and feel of their high end brand. A custom built CMS solution was provided to allow visitors of the website to purchase footwear brands not found anywhere else in Canada as well as custom made to order footwear. Similarly, a Wordpress enabled blog was created with a matching theme to allow for Leatherfoot to engage with it's customers via news blasts and events.
            a.btn.btn-primary(href='http://www.leatherfoot.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Project Management
              li Creative Design
              li Front-end Development
              li Training & Education
              li Email Marketing
            h4 Notable Details
            ul
              li Wordpress Blog
              li E-Commerce Solution
              li Custom CMS
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
                  img(src='/images/projects/leatherfoot/gallery-1.jpg', alt='Leatherfoot')
              li
                .area
                  img(src='/images/projects/leatherfoot/gallery-2.jpg', alt='Leatherfoot')
              li
                .area
                  img(src='/images/projects/leatherfoot/gallery-3.jpg', alt='Leatherfoot')
              li
                .area
                  img(src='/images/projects/leatherfoot/gallery-4.jpg', alt='Leatherfoot')
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
