var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source= require('vinyl-source-stream');
//tendra sass y lo preprocesara
gulp.task('styles', function(){
     gulp
    .src('index.scss')
    .pipe(rename('app.css'))
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('publico'));
})
gulp.task('assets',function(){
    gulp
        .src('assets/*')
        .pipe(gulp.dest('publico'));
})

gulp.task('scripts', function(){
    browserify('./src/index.js')
    .transform(babel)
    .bundle()
    //transform lo que devuelve el bundle a algo que entienda gulp
    //necesita instalar vinyl-source-stream
    .pipe(source('index.js'))
    .pipe(rename('app.js'))
    .pipe(gulp.dest('publico'));
})
gulp.task('default',['styles','assets','scripts']);