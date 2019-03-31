<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-purplefig.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Blog
                  li Wordpress
                  li Responsive
                h1 The Purple Fig
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/purplefig/hero.png', alt='The Purple Fig')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p The Purple Fig is an online women’s blogazine with an emphasis on realistic and inspiring personal stories from women of all age groups, lifestyles, and nationalities. Having used an already established Wordpress site with a typical purchasable theme, they signed on for a completely customized design & development solution for the next iteration of their blog. We started out with a few things in mind: a mobile-first responsive design that would enable the blog to work on multiple devices and platforms and a brand that would be on target with their demographic & audience.
            p The end result was a completely customized theme tailored to their specific needs including the need for social media interaction, an area for their contributors to be known, and a unique custom authoring solution for visitors to post their own stories via their Letters section.
            a.btn.btn-primary(href='http://www.thepurplefig.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
              li Email Marketing
            h4 Notable Details
            ul
              li Wordpress Blog
              li Mobile-first Responsive Design
              li Custom Authors
              li RSS to Email Newsletter
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
                  img(src='/images/projects/purplefig/gallery-1.jpg', alt='The Purple Fig')
              li
                .area
                  img(src='/images/projects/purplefig/gallery-2.jpg', alt='The Purple Fig')
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
