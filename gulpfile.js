var gulp = require('gulp');
var sass = require('gulp-sass');

//tendra sass y lo preprocesara
gulp.task('styles', function(){
    return gulp
    .src('index.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('publico'));
})

gulp.task('default',['styles']);