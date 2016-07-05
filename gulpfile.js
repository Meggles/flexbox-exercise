var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('styles',function() {
  gulp.src('css/styles5.css')
    .pipe(autoprefixer())
    .pipe(gulp.dest('build'))

});

gulp.task('watch',function() {
  gulp.watch('css/styles5.css', ['styles']);
});
