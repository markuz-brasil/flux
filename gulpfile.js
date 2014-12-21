"use strict"
var path = require('path')

var gulp = require('gulp')
require('tau-wsk')(gulp, {
  tmp: 'tmp',
  es6: {
    src: ['./{src,tests,components}/**/*.{js,jsx,es6,ajs}', './index.{js,jsx,es6,ajs}'],
    commonjs: {},
    browserify: {
      // standalone: 'FLUX',
      entries: ['./index.es6', './tests/index.js'],
      sourcemaps: true,
      dest: 'tmp',
      aliases: {
        famous: 'famous/commonjs',
      },
    },
  },
  jade: {
    src: [
      './index.jade',
      './{views,tests,components}/**/*.jade',
    ],
    opt: {pretty: true,},
  },
  less: {
    src: [
      './index.less',
      './{views,tests,components}/**/*.less'
    ],
    opt: {
      compress: false,
      paths: [
        './node_modules/bootstrap/less',
        './node_modules/famous/dist',
      ],
    },
  },
  browserSync: {
    server: {
      baseDir: [
        './build',
        './tmp',
        './public',
        // CFG.src,
      ],
      middleware: [
        function (req, res, next) {
          // TODO: explain the reason for this middleware

          var base = path.basename(req.url)
          var dir = path.dirname(req.url)

          if ('/tests/tests' === dir) {
            req.url = path.join('/tests', base)
          }

          next()
        },
      ]
    },

    logFileChanges: true,
    ghostMode: false,
    notify: false,
    port: 3000,
    browser: 'skip',
    // browser: 'chrome',

    // forces full page reload on css changes.
    injectChanges: false,

    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
  }
})



