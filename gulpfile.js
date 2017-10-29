var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('update', function() {
  return gulp.src('app/**/*.*')
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('run', ['browserSync', 'sass', 'update'], function() {
  gulp.watch('app/scss/**/*.scss', ['sass']);
  gulp.watch('app/**/*.*', ['update']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  });
});
