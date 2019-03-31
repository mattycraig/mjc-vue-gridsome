<template lang="pug">
  LayoutDefault
    section#intro.intro-home
      .flexslider
        ul.slides
          li#panel-molsoncoors.panel-port
            .wrapper
              .copy
                ul.sub
                  li Featured Projects
                h2 Molson Coors
                p ...a multinational brewing company, formed in 2005 by the merger of Molson of Canada, and Coors of the United States. Molson Coors has spent centuries defining brewing greatness.
                a.btn.btn-primary(href='/works/molsoncoors')
                  | Project Details
                  .btn-icon
                    unicon(name="arrow-circle-right")
            img.thumbnail(src='images/projects/molsoncoors/hero.png', alt='Molson Coors')
          li#panel-fountaintire.panel-port
            .wrapper
              .copy
                ul.sub
                  li Featured Projects
                h2 Fountain Tire
                p ...offers a wide range of car, SUV, CUV, minivan, truck, and trailer tires, as well as complete automotive services, for any make and model of vehicle.
                a.btn.btn-primary(href='/works/fountaintire')
                  | Project Details
                  .btn-icon
                    unicon(name="arrow-circle-right")
            img.thumbnail(src='images/projects/fountaintire/hero.png', alt='Fountain Tire')
          li#panel-paquinartists.panel-port
            .wrapper
              .copy
                ul.sub
                  li Featured Projects
                h2 Paquin Artists Agency
                p ...proudly representing world-class artists on a national and international level. Spanning from music to theatre to dance and moving seamlessly between genres.
                a.btn.btn-primary(href='/works/paquinartists')
                  | Project Details
                  .btn-icon
                    unicon(name="arrow-circle-right")
            img.thumbnail(src='images/projects/paquinartists/hero.png', alt='Paquin Artists Agency')
          li#panel-purplefig.panel-port
            .wrapper
              .copy
                ul.sub
                  li Featured Projects
                h2 The Purple Fig
                p ... an online women’s blogazine with an emphasis on realistic and inspiring personal stories from women of all age groups, lifestyles, and nationalities.
                a.btn.btn-primary(href='/works/purplefig')
                  | Project Details
                  .btn-icon
                    unicon(name="arrow-circle-right")
            img.thumbnail(src='images/projects/purplefig/hero.png', alt='The Purple Fig')
          li#panel-glitterbay.panel-port
            .wrapper
              .copy
                ul.sub
                  li Featured Projects
                h2 Royal Glitter Bay Villas
                p ... more than just an accommodation for a holiday in Barbados - it’s a lifestyle that lazes and reclines, ebbing indoors and out.
                a.btn.btn-primary(href='/works/glitterbay')
                  | Project Details
                  .btn-icon
                    unicon(name="arrow-circle-right")
            img.thumbnail(src='images/projects/glitterbay/hero.png', alt='Royal Glitter Bay Villas')
    section#works
      .title
        span Selected Works
      .row.first
        .item.full.prj-molsoncoors
          .overlay
            .copy
              ul.sub
                li Sitecore CMS
                li Responsive
                li Angular JS
              h2 Molson Coors
              a.btn.btn-primary(href='/works/molsoncoors')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
        .item.full.prj-fountaintire
          .overlay
            .copy
              .clearfix
                ul.sub
                  li Umbraco CMS
                  li Responsive
                  li Angular JS
                h2 Fountain Tire
              a.btn.btn-primary(href='/works/fountaintire')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
      .row
        .item.prj-likeforlike
          .overlay
            .copy
              ul.sub
                li E-Commerce
                li Web
                li User Interface
              h2 Like for Like
              a.btn.btn-primary(href='/works/likeforlike')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
        .item.prj-leatherfoot
          .overlay
            .copy
              ul.sub
                li CMS
                li E-Commerce
                li Wordpress
              h2 Leatherfoot
              a.btn.btn-primary(href='/works/leatherfoot')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
        .item.full.prj-pridetoronto
          .overlay
            .copy
              .clearfix
                .area-left
                  ul.sub
                    li Web
                    li Mobile
                    li CMS
                  h2 Pride Toronto
                .area-right
                  p Pride Toronto exists to celebrate the history and future of Toronto's LGBTTIQQ2SA* communities.
              a.btn.btn-primary(href='/works/pridetoronto')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
      .row
        .item.full.prj-commercecourt
          .overlay
            .copy
              .clearfix
                .area-left
                  ul.sub
                    li CMS
                    li Responsive
                  h2 Commerce Court
                .area-right
                  p Commerce Court is a rare complex that intersects and inspires the worlds of business and architecture.
              a.btn.btn-primary(href='/works/commercecourt')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
        .item.prj-urbansun
          .overlay
            .copy
              ul.sub
                li Wordpress
                li Responsive
              h2 Urbansun
              a.btn.btn-primary(href='/works/urbansun')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
        .item.prj-preventchildinjury
          .overlay
            .copy
              ul.sub
                li WCAG 2.0 Compliant
                li CMS
                li Responsive
              h2 Prevent Child Injury
              a.btn.btn-primary(href='/works/preventchildinjury')
                | Project Details
                .btn-icon
                  unicon(name="arrow-circle-right")
      a.viewmore(href='/works')
        | Looking for More?
        i.fa.fa-chevron-circle-right

</template>

<script>
const pageName = 'Homepage';
const pageDesc =
  'An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.';
const pageSlug = '';

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
