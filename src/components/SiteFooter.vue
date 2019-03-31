<template lang="pug">
  footer#footer
    .wrapper
      .col.copyright
        | &copy; 2019
        a(href='/') Matthew Jason Craig
      .col.meta
        a(href='/')
          //- img(src='/images/logo-ftr.png', alt='Matthew Jason Craig - UI Designer & Frontend Web Developer', width='30')
          img(src='/images/matthew-jason-craig-logo-footer.png', alt='Matthew Jason Craig - UI Designer & Frontend Web Developer' width="100")
        nav
          ul
            li
              a(href='/about') About
            li
              a(href='/works') Work
            li
              a(href='/contact') Contact
            li
              a(href='/blog') Blog
      .col.social
        nav
          ul
            li
              a(href='https://www.linkedin.com/in/matthewjasoncraig')
                | LinkedIn
            li
              a(href='https://www.github.com/matthewjasoncraig')
                | Github
            li
              a(href='https://www.twitter.com/matthewjasoncraig')
                | Twitter

</template>

<script>
export default {
  name: 'SiteFooter'
};
</script>

<style lang="scss">
</style>

