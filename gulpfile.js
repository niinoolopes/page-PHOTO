// Gulp
var gulp        = require('gulp'); 

// browser-sync
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload; 

// gulp-concat
var concat      = require('gulp-concat');

// gulp-sass
var sass = require('gulp-sass');

// gulp-rename
var rename      = require('gulp-rename');

// gulp-concat
var concat      = require('gulp-concat');

// gulp-autoprefixer
var autoprefixer = require('gulp-autoprefixer');
// -- /// --



// task - browser-sync
gulp.task('serve', function () { //task serve
    browserSync.init({
        server: {
            baseDir: "app/" // pasta rais
        }
    }); 
}); 
 


// task - gulp-sass
gulp.task('styles', function(){
    gulp.src('app/css/src/**/*.scss') // Caminho de entrada
    .pipe(concat('app/css/*css')) // Cancatenando todos
    .pipe(rename('estilo.css' )) // Renomeando-o
    .pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		})) // Colocando prefixe para o css funcionar em todos os browser
    // .pipe(sass())
    .pipe(gulp.dest('app/css/')); // Caminho de saida
});
  
 

// task - script
gulp.task('script', function(){
    gulp.src('app/js/src/**/*.js') // Caminho de entrada
    .pipe(concat('app/js/*js')) // Cancatenando todos
    .pipe(rename('app.js' ))  // Renomeando-o
    .pipe(gulp.dest('app/js/')); // Caminho de saida
});
  


// task - watch
gulp.task('watch', function() {
    gulp.watch('app/css/src/**/*.scss',['styles']).on("change", reload);
    gulp.watch('app/js/src/**/*.js',['script']).on("change", reload);
    gulp.watch('app/**/*.html').on("change", reload);
});
  
  

// task - Gulp
gulp.task('default', ['serve','styles','script','watch'], function() {
});