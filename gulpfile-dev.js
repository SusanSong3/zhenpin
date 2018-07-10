const gulp = require('gulp')

const server = require('gulp-webserver')

const sass = require('gulp-sass')

const webpack = require('webpack-stream')

const proxy = require('http-proxy-middleware')

const babel = require('gulp-babel')

const watch = require('gulp-watch')
// require("babel-core").transform("code", {
//   plugins: ["transform-runtime"]
// });

gulp.task('server', () => {
  return gulp.src('./dev')
    .pipe(server({
      host: 'localhost',
      port: 8001,
      livereload: true,
      directoryListing: {
        enable: true,
        path: './dev'
      },
      middleware: [
        proxy('/api', {
          target: 'http://localhost:9000',
          //   target: '10.9.166.32:8080/api',
          changeOrigin: true
        }),
        proxy('/ceshi', {
            target: 'http://10.9.164.156:8080/',
              changeOrigin: true,
              pathRewrite: {
                  '^/ceshi': ''
              }
        }),
        // proxy('/plate', {
        //   target: 'http://m.banggo.com',
        //   changeOrigin: true,
          // pathRewrite:{
          //   "/plate":""
          // }
        // }),
        // proxy('/showList', {
        //   target: 'http://m.banggo.com',
        //   changeOrigin: true,
        //   pathRewrite:{
        //     "/showList":""
        //   }
        // }),
      ]
    }))
})

gulp.task('scss', () => {
  return gulp.src('./src/styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dev/styles'))
})

gulp.task('js', () => {
  return gulp.src('./src/scripts/*.js')
    .pipe(webpack({
      entry: {
        'index': './src/scripts/index.js',
        'new': './src/scripts/new.js',
        'furniture': './src/scripts/furniture.js',
        'decoration': './src/scripts/decoration.js',
        'bed': './src/scripts/bed.js',
        'fabric': './src/scripts/fabric.js',
        'userhome': './src/scripts/userhome.js',
        'shoppingcart': './src/scripts/shoppingcart.js',
      },
      output: {
        filename: '[name].js'
      },
      module: {
        loaders: [
          { test: /\.html$/, loader: 'string-loader' },
        ],
      }
    }))
    // .pipe(babel({
    //   presets: ['env', 'stage-0']
    // }))
    .pipe(gulp.dest('./dev/scripts'))
})

gulp.task('copyhtml', () => {
  return gulp.src(['./*.html'])
    .pipe(gulp.dest('./dev/'))
})
gulp.task('copyimages', () => {
  return gulp.src(['./src/images/**/*'])
    .pipe(gulp.dest('./dev/images/'))
})
gulp.task('copycss', () => {
  return gulp.src(['./src/styles/lib/*.css'])
    .pipe(gulp.dest('./dev/styles'))
})
gulp.task('copylibs', () => {
  return gulp.src(['./src/libs/*.js'])
    .pipe(gulp.dest('./dev/libs'))
})

gulp.task('copyicon', () => {
  return gulp.src(['./src/iconfonts/**/*'])
    .pipe(gulp.dest('./dev/iconfonts'))
})

gulp.task('watch', () => {
  watch('./*.html',() => {
    gulp.start('copyhtml')
  })
  watch('./src/styles/**/*.scss',() => {
    gulp.start('scss')
  })
  watch('./src/scripts/**/*',() => {
    gulp.start('js')
  })
  watch('./src/images/**/*',() => {
    gulp.start('copyimages')
  })
})

gulp.task('default',['js', 'scss', 'copyhtml','copyimages', 'copylibs', 'copyicon','copycss' ,'server', 'watch'], () => {
  console.log('done.');
})
