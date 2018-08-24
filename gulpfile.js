const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync').create()
const historyFallback = require('connect-history-api-fallback')
const useref = require('gulp-useref')
const uglify = require('gulp-uglify')
const gulpIf = require('gulp-if')
const concat = require('concat')
const cssnano = require('gulp-cssnano')
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const del = require('del');
const runSequence = require('run-sequence');



gulp.task('sass', function () {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('browserSync', function () {
  browserSync.init({
    server: {
      baseDir: 'app',
      middleware: [
        historyFallback()
      ]
    },
  })
})

gulp.task('useref', function () {
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
})

gulp.task('images', function () {
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
    .pipe(imagemin({
      interlaced: true
    }))
    .pipe(gulp.dest('dist/images'))
});

gulp.task('clean:dist', function () {
  return del.sync('dist');
})

gulp.task('default', ['browserSync', 'sass'], function () {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/**/**/*.js', browserSync.reload);
});

gulp.task('build', function (callback) {
  runSequence('clean:dist',
    ['sass', 'useref', 'images'],
    callback
  )
})