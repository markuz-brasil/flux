"use strict"

var gulp = require('gulp')
require('wsk')(gulp, {
  tmp: 'tmp',
  es6: {
    src: ['./{src,views}/**/*.{js,jsx,es6,ajs}', './index.{js,jsx,es6,ajs}'],
    commonjs: {},
    browserify: {
      // standalone: 'FLUX',
      entry: './' + './index.es6',
      basename: 'flux-closure',
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
      './views/**/*.jade',
    ],
    opt: {pretty: true,},
  },
  less: {
    src: ['./views/**/*.less'],
    opt: {
      compress: false,
      paths: [
        './node_modules/bootstrap/less',
        './node_modules/famous/dist',
      ],
    },
  },
})



