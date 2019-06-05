# gulp-first
Minify multiple css and js file in one delicated file by using gulp 

SETUP GUIDE
1) npm install gulp-cli -g
2) npm install gulp -D
3) npm install –save-dev gulp-minify-css gulp-uglify gulp-concat

To compress css:
  gulp compressCSS

To compress js:
  gulp compressJS
  
To watch:
  gulp watch
  
FOR BROWSER SYNC live reload
required to run $ npm i browser-sync

example for browser-sync:

const gulp = require('gulp');
const sass = require('gulp-sass');
const uglifycss = require('gulp-uglifycss');
const browserSync = require('browser-sync').create();
 
gulp.task('sass', function () {
  return gulp.src('./sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.stream());
});

gulp.task('css', function () {
    return gulp.src('./css/*.css')
      .pipe(sass().on('error', sass.logError))
      .pipe(uglifycss({
            "uglyComments": true
        }))
      .pipe(gulp.dest('./dist'))
      .pipe(browserSync.stream());
  });


function watch(){
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./sass/*.sass', gulp.series('sass'));
    gulp.watch('./css/*.css', gulp.series('css'));
}

exports.watch = watch;