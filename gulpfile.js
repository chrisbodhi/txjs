var jshint   = require('gulp-jshint'),
    stylish  = require('jshint-stylish'),
    jscs     = require('gulp-jscs'),
    mocha    = require('gulp-mocha'),
    gulp     = require('gulp');

// 'lint' is an arbitrary name for this task
gulp.task('lint', function() {
  // Get the files...
  return gulp.src([
    './intro-to-node/*.js',
    './intro-to-hapi/*.js',
    './intro-to-testing/*.js',
    './intro-to-dbs/*.js'
  ]).pipe(jshint({ lookup: true })) // ...look up the jshint settings
    .pipe(jscs())
    .pipe(jshint.reporter(stylish))
  // We want to add our sources (remember to use the * wildcard!)
  // then, we want to pipe to jshint with the stylish reporter
  // finally, pipe to jscs
});

// Let's set the default task to be our linting task
gulp.task('default', ['lint']);
// In the testing section, we're going to add a test task
gulp.task('test', function(){
  return gulp.src(['intro-to-testing/*.js'])
             .pipe(mocha({ reporter: 'nyan' }))
});
    // We'll want to add our sources like before
    // then we want to pipe to to mocha with the 'nyan' reporter