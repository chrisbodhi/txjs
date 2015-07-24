var gulp     = require('gulp'),
    jshint   = require('gulp-jshint'),
    stylish  = require('jshint-stylish'),
    jscs     = require('gulp-jscs'),
    mocha    = require('gulp-mocha');
 
gulp.task('lint', function() {
  return gulp.src([
    'server.js',
    'user-data.js'
  ]).pipe(jshint({ lookup: true }))
    .pipe(jscs())
    .pipe(jshint.reporter(stylish))
});

gulp.task('test', function() {
  return gulp.src('tests/*.js')
    .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('default', ['lint', 'test']);