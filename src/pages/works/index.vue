<template lang="pug">
  LayoutDefault
    section#intro
      .flexslider
        ul.slides
          li#panel-works.panel-port.port-page
            .wrapper
              .copy
                ul.sub
                  li View my most recent work
                h1 Works
                p From design to development, check out some of my most recent work below.
                a.btn.btn-primary(href='#works') See My Work
            img.thumbnail(src='/images/works-hero.png', alt='Works')
    section#works
      .title
        span Works
      .row.first
        .item.full.prj-molsoncoors
          .overlay
            .copy
              ul.sub
                li Sitecore CMS
                li Responsive
                li Angular JS
              h2 Molson Coors
              a.btn.btn-primary(href='/works/molsoncoors') Project Details
        .item.full.prj-fountaintire
          .overlay
            .copy
              .clearfix
                ul.sub
                  li Umbraco CMS
                  li Responsive
                  li Angular JS
                h2 Fountain Tire
              a.btn.btn-primary(href='/works/fountaintire') Project Details
      .row
        .item.prj-purplefig
          .overlay
            .copy
              ul.sub
                li Blog
                li Wordpress
                li Responsive
              h2 The Purple Fig
              a.btn.btn-primary(href='/works/purplefig') Project Details
        .item.prj-leatherfoot
          .overlay
            .copy
              ul.sub
                li CMS
                li E-Commerce
                li Wordpress
              h2 Leatherfoot
              a.btn.btn-primary(href='/works/leatherfoot') Project Details
        .item.prj-pridetoronto
          .overlay
            .copy
              .clearfix
                ul.sub
                  li Web
                  li Mobile
                  li CMS
                h2 Pride Toronto
              a.btn.btn-primary(href='/works/pridetoronto') Project Details
        .item.prj-commercecourt
          .overlay
            .copy
              .clearfix
                ul.sub
                  li CMS
                  li Responsive
                h2 Commerce Court
              a.btn.btn-primary(href='/works/commercecourt') Project Details
      .row
        .item.prj-glitterbay
          .overlay
            .copy
              ul.sub
                li CMS
                li Responsive
              h2 Royal Glitter Bay Villas
              a.btn.btn-primary(href='/works/glitterbay') Project Details
        .item.prj-likeforlike
          .overlay
            .copy
              ul.sub
                li E-Commerce
                li Web
                li User Interface
              h2 Like for Like
              a.btn.btn-primary(href='/works/likeforlike') Project Details
        .item.prj-preventchildinjury
          .overlay
            .copy
              ul.sub
                li WCAG 2.0 Compliant
                li CMS
                li Responsive
              h2 Prevent Child Injury
              a.btn.btn-primary(href='/works/preventchildinjury') Project Details
        .item.prj-paquinartists
          .overlay
            .copy
              ul.sub
                li CMS
                li Responsive
                li User Interface
              h2 Paquin Artists Agency
              a.btn.btn-primary(href='/works/paquinartists') Project Details
      .row
        .item.prj-annehepfer
          .overlay
            .copy
              ul.sub
                li CMS
                li E-Commerce
                li Wordpress
              h2 Anne Hepfer
              a.btn.btn-primary(href='/works/annehepfer') Project Details
        .item.prj-livingstonstudios
          .overlay
            .copy
              ul.sub
                li Web
              h2 Livingston Studios
              a.btn.btn-primary(href='/works/livingstonstudios') Project Details
        .item.prj-urbansun
          .overlay
            .copy
              ul.sub
                li Wordpress
                li Responsive
              h2 Urbansun
              a.btn.btn-primary(href='/works/urbansun') Project Details
        .item.prj-paquinentertainment
          .overlay
            .copy
              ul.sub
                li CMS
                li Responsive
                li User Interface
              h2 Paquin Entertainment
              a.btn.btn-primary(href='/works/paquinentertainment') Project Details
      .title
        span Other Work
      .wrapper.otherwork
        .row.first
          .item.prj-paradigmquest
            .overlay
              .copy
                h2 Paradigm Quest
                a.btn.btn-primary(href='http://www.paradigmquest.com', target='_blank') Visit Website
          .item.prj-astilivingston
            .overlay
              .copy
                h2 Asti Livingston
                a.btn.btn-primary(href='http://www.astilivingston.com', target='_blank') Visit Website
          .item.prj-snowsmart
            .overlay
              .copy
                .clearfix
                  h2 Snowsmart
                a.btn.btn-primary(href='http://www.snowsmart.ca', target='_blank') Visit Website
          .item.prj-isitworthit
            .overlay
              .copy
                .clearfix
                  h2 Is It Worth It?
                a.btn.btn-primary(href='http://www.isitworthit.ca', target='_blank') Visit Website
        .row
          .item.prj-decadehomes
            .overlay
              .copy
                h2 Decade Homes
                a.btn.btn-primary(href='http://www.decadehomes.ca', target='_blank') Visit Website
          .item.prj-leslievilletree
            .overlay
              .copy
                h2 Leslieville Tree
                a.btn.btn-primary(href='http://www.leslievilletreeproject.com', target='_blank') Visit Website
          .item.prj-silentjoe
            .overlay
              .copy
                .clearfix
                  h2 Silent Joe
                a.btn.btn-primary(href='http://www.silentjoe.ca', target='_blank') Visit Website
          .item.prj-dkleadership
            .overlay
              .copy
                .clearfix
                  h2 DK Leadership
                a.btn.btn-primary(href='http://www.dkleadership.org', target='_blank') Visit Website
      a.viewmore(href='/images/resume/mjc-resume.pdf')
        | Download my Resume
        i.fa.fa-file-pdf-o
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
