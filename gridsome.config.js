const purgeCss = require('@fullhuman/postcss-purgecss');
const postcssPresetEnv = require('postcss-preset-env');

const postcssPlugins = [
  postcssPresetEnv({
    stage: 3
  })
  //  purgeCss
];

if (process.env.NODE_ENV === 'production') postcssPlugins.push(purgeCss());

module.exports = {
  siteName: 'Matthew Jason Craig',
  siteDescription:
    'An Ottawa based web designer &amp; front-end developer who inspires, creates, and implements beauty through pixels.',
  siteUrl: 'https://www.matthewjasoncraig.com',
  titleTemplate: '%s - Matthew Jason Craig - UI Designer & Frontend Web Developer',
  css: {
    loaderOptions: {
      postcss: {
        plugins: postcssPlugins
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-plain-loader')
      .loader('pug-plain-loader');

    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  }
};
