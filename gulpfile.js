var gulp = require('gulp');  
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifycss = require('gulp-minify-css');
var gutil = require('gulp-util');

gulp.task('main-sass', function () {  
    gulp.src('./assets/scss/main.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(prefix(
			'last 1 version', '> 1%', 'ie 8', 'ie 7'
		))
        .pipe(minifycss())
        .pipe(gulp.dest('./assets/css'));
});

gulp.task('sass', function () {  
    gulp.src('./scss/simple-hover.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(prefix(
            'last 1 version', '> 1%', 'ie 8', 'ie 7'
        ))
        .pipe(minifycss())
        .pipe(gulp.dest('dist'));
});

gulp.task('default', ['sass', 'main-sass'], function () {  
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('assets/scss/*.scss', ['main-sass']);
});