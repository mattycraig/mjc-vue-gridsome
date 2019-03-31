<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-fountaintire.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li Umbraco CMS
                  li Responsive
                  li Angular JS
                h1 Fountain Tire
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/fountaintire/hero.png', alt='Fountain Tire')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p As a highly recognized tire retailer in Canada, Fountain Tire offers a wide range of car, SUV, CUV, minivan, truck, and trailer tires, as well as complete automotive services, for any make and model of vehicle. They combine experienced owners, licensed automotive technicians, and high-quality products to form a company dedicated to excellent service.
            p Today, Fountain Tire has stores that span the country from British Columbia to Ontario.
            a.btn.btn-primary(href='http://www.fountaintire.com', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
              li Email Marketing
              li Custom Analytics
            h4 Notable Details
            ul
              li Appointment Requests
              li Quoting System
              li Comparison Tool
              li Tire Search
              li Umbraco CMS
              li Angular JS Driven
              li Responsive
              li Desktop & Mobile Experiences
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
