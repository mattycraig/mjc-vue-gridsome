<template lang="pug">
  //- section#contact
  //-   .wrapper
  //-     a#contact-close(href='#')
  //-       i.fa.fa-times
  //-     h2 Contact
  //-     .copy
  //-       .area
  //-         p
  //-           | Need to get in touch?
  //-           br
  //-           | I'm
  //-           strong not available
  //-           | for contract & full-time work but I would still love to hear from you.
  //-       form#contact-form(method='post', action='/mailer.php')
  //-         .clearfix
  //-           div
  //-             label(for='name')
  //-               | Your Name
  //-               span.required *
  //-             input#name(type='text', name='name', tabindex='1', required='')
  //-             i.fa.fa-user
  //-           div
  //-             label(for='email')
  //-               | Your Email
  //-               span.required *
  //-             input#email(type='email', name='email', tabindex='2', required='')
  //-             i.fa.fa-envelope
  //-         div
  //-           label(for='message')
  //-             | Your Message
  //-             span.required *
  //-           textarea#message(cols='40', rows='4', name='message', tabindex='3', required='')
  //-           i.fa.fa-comment
  //-         div
  //-           button.btn.btn-primary.g-recaptcha(type='submit', data-sitekey='6LfvrisUAAAAAO1EHssw-4-z2Zj1dEgQ7-gLyEWX', data-callback='onSubmit')
  //-             | Submit Form
  //-             i.fa.fa-spinner.fa-spin
  //-         #form-messages
</template>

<script>
export default {
  name: 'SiteContact'
};
</script>

<style lang="scss">
</style>

