var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function() {
  gulp.src('css/styles3.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))

});

gulp.task('watch',function() {
  gulp.watch('css/styles3.css', ['styles']);
});
