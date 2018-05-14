const gulp = require('gulp');
const watch = require('gulp-watch');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const concat = require('gulp-concat');
const minifyjs = require('gulp-js-minify');
const cleanCSS = require('gulp-clean-css');
const path = require('path');

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
      // proxy: 'http://mmaza.darwoft.com/projects/ect'
      // server: './'
      // browser: ['firefox', 'chromium']
    });
    gulp.watch('./scss/**/*.scss', ['general']);
    gulp.watch([
      '*.html',
      '*.js'
    ]).on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('general', function() {
    return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(sourcemaps.write('./scss/maps'))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
