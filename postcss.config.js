const cssnano = require('cssnano')

module.exports = {
  plugins: [
    cssnano({
      preset: 'default',
    }),
    require('autoprefixer'),
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
}