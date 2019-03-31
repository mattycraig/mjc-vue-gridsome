<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-preventchildinjury.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li WCAG 2.0 Compliant
                  li CMS
                  li Responsive
                h1 Prevent Child Injury
                a.btn.btn-primary(href='#details') Project Details
            img.thumbnail(src='/images/projects/preventchildinjury/hero.png', alt='Prevent Child Injury')
    section#details
      .title
        span Details
      .contain
        .wrapper
          .copy
            p Prevent Child Injury is a place where parents can learn helpful hints on child safety: preventing falls, poisonings & burns. Children grow and learn so much during their early years of life. They are learning to do new things all the time by playing and exploring in their home. They also learn from you. As they learn, they may also be at risk for an injury. Prevent Child Injury is designed to guide you through the many ways to create a safer home for your child 0-36 months of age.
            a.btn.btn-primary(href='http://www.preventchildinjury.ca', target='_blank') Visit Website
          .services
            h4 Services Provided
            ul
              li Strategy
              li Creative Design
              li Front-end Development
              li Email Marketing
              li Fully WCAG 2.0 Compliant
            h4 Notable Details
            ul
              li Custom CMS
              li Mobile-first Responsive Design
              li Parent & Professional Logins
              li Responsive Email Campaigns
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
                  img(src='/images/projects/preventchildinjury/gallery-1.jpg', alt='Prevent Child Injury')
              li
                .area
                  img(src='/images/projects/preventchildinjury/gallery-2.jpg', alt='Prevent Child Injury')
              li
                .area
                  img(src='/images/projects/preventchildinjury/gallery-3.jpg', alt='Prevent Child Injury')
              li
                .area
                  img(src='/images/projects/preventchildinjury/gallery-4.jpg', alt='Prevent Child Injury')
          img(src='/images/gallery-lower.png', alt='Gallery')
      a.viewmore(href='/works')
        | Looking for More?
        i.fa.fa-chevron-circle-right
</template>

<script>
const pageName = 'My Work';
const pageDesc =
  'An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.';
const pageSlug = 'works';

import { siteAuthor, siteTagline, siteUrl } from '@/vars.js';
const pageUrl = siteUrl + '/' + pageSlug;
const pageTitle = pageName + siteAuthor + siteTagline;

export default {
  metaInfo: {
    title: pageTitle,
    meta: [
      {
        key: 'description',
        name: 'description',
        content: pageDesc
      },
      {
        property: 'og:title',
        content: pageTitle
      },
      {
        property: 'og:url',
        content: pageUrl
      },
      {
        property: 'og:image',
        content: siteUrl + '/images/og-home.jpg'
      },
      {
        property: 'og:description',
        content: pageDesc
      },
      {
        property: 'twitter:title',
        content: pageTitle
      },
      {
        property: 'twitter:description',
        content: pageDesc
      },
      {
        property: 'twitter:image',
        content: siteUrl + '/images/tw-home.jpg'
      },
      {
        property: 'twitter:url',
        content: pageUrl
      }
    ]
  }
};
</script>

<style lang="scss">
</style>
