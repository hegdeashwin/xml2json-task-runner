'use strict';

var gulp = require('gulp');
var xml2json = require('gulp-xml2json');
var rename = require('gulp-rename');

gulp.task('default', function () {
    gulp.src('xml/**/*.xml')
        .pipe(xml2json())
        .pipe(rename({extname: '.json'}))
        .pipe(gulp.dest('json'));
});
