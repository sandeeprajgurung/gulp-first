var gulp         = require('gulp');
var minifyCss     = require("gulp-minify-css");
var minifyJS     = require("gulp-uglify");
var concat = require('gulp-concat');

// gulp compressCSS
gulp.task('compressCSS', function () {
   return gulp.src('./public/css/*.css') // path to your file
   .pipe(concat('app.css'))
   .pipe(minifyCss())
   .pipe(gulp.dest('./minify-css'));
});

// gulp compressJS
gulp.task('compressJS', function () {
   return gulp.src('./public/js/*.js') // path to your file
   .pipe(concat('app.js'))
   .pipe(minifyJS())
   .pipe(gulp.dest('./minify-js'));
});

// gulp watch
function watch() {
   gulp.watch('./public/css/*.css', gulp.series('compressCSS'));
   gulp.watch('./public/js/*.js', gulp.series('compressJS'));
}

exports.watch = watch;