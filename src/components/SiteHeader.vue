<template lang="pug">
  div
    header.header.unfixed#appHeader
      .header-container.container
        a.header-logo(href='/')
          img.header-logo-static(src='/images/matthew-jason-craig-logo.png', alt='Matthew Jason Craig - UI Designer & Frontend Web Developer')
          img.header-logo-fixed(src='/images/matthew-jason-craig-logo-fixed.png', alt='Matthew Jason Craig - UI Designer & Frontend Web Developer')
        nav.header-nav
          a.header-toggle(href='#')#navToggle
            unicon(name="align-center-alt" width="35" height="35")

    aside.sidenav#asideNav
      a.sidenav-close(href='#')#asideNavToggle
        unicon(name="times" width="30" height="30")
      ul.sidenav-items
        li.sidenav-item
          a.sidenav-link(href='/about')
            unicon(name="shield-question" width="40" height="40")
            span Resume
            | About
        li.sidenav-item
          a.sidenav-link(href='/works')
            unicon(name="comment-alt-image" width="40" height="40")
            span Portfolio
            | Work
        li.sidenav-item
          a.sidenav-link(href='/contact')
            unicon(name="comment-dots" width="40" height="40")
            span Say Hello
            | Contact
        li.sidenav-item
          a.sidenav-link(href='/blog')
            unicon(name="newspaper" width="40" height="40")
            span Articles
            | Blog
      .sidenav-socials
        a.sidenav-social(href='https://www.linkedin.com/in/matthewjasoncraig')
          unicon(name="times" width="24" height="24")
          | LinkedIn
        a.sidenav-social(href='https://www.github.com/matthewjasoncraig')
          unicon(name="times" width="24" height="24")
          | Github
        a.sidenav-social(href='https://www.twitter.com/matthewjasoncraig')
          unicon(name="times" width="24" height="24")
          | Twitter
</template>

<script>
export default {
  name: 'SiteHeader'
};
</script>

<style lang="scss">
</style>

