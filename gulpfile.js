const gulp = require('gulp');
const sass = require('gulp-sass');

// gulp.task = Define tasks
// gulp.src = Point to files to use
// gulp.dest = Points to folder to output
// gulp.watch = Watch files and folders for changes


// logs message
// USAGE:   gulp message
gulp.task('message', function(){
  return console.log('Gulp is running...');
});

// USAGE:   gulp
// gulp.task('default', function(){
//   return console.log('Gulp is running...');
// });


// Compile SASS
// USAGE: gulp sass

gulp.task('sass', function(){
  gulp.src('scss/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('dist/css'));
    // .pipe(gulp.watch('scss/*.scss'));
});


// Watching changes in sass files
// USAGE: gulp watch

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['sass']);
});
