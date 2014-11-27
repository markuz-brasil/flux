module.exports = {
  // standalone: 'BundleNamespace.flux',
  sourcemaps: true,
  entry:'./index.js',
  // basename: 'flux-namespace',
  basename: 'flux-closure',
  dest: 'build',
  title: 'flux',
  jade: {
    src: [
      './public/**/*.{jade,html}',
      './src/views/**/*.{jade,html}',
    ],
    // TODO: use this opt intead of having it hard coded on assets
    opt: {},
  },
  less: {
    src: [
      './public/**/*.{css,less}',
      './src/views/**/*.{css,less}',
    ],
    // TODO: use this opt intead of having it hard coded on assets
    opt: {}
  },
  js: {
    src: [
      './index.{js,jsx}',
      './src/**/*.{js,jsx}',
    ],
    // TODO: use this opt intead of having it hard coded on assets
    // use this for browserify
    opt: {},
  }
}

