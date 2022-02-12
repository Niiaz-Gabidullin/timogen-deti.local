//*Установка gulp: npm install gulp --save-dev
const gulp = require('gulp');


//*Работа с Sass  и СSS: npm install sass gulp-sass --save-dev
const sass = require('gulp-sass')(require('sass'));


//*Очищение CSS кода: npm install gulp-clean-css --save-dev
const cleanCSS = require('gulp-clean-css');

//* npm install gulp-svgstore --save-dev
const svgstore = require('gulp-svgstore');

//* npm install gulp-svgmin
const svgmin = require('gulp-svgmin');

//Преобразование scss
gulp.task('build-scss', ()=>{
    return gulp.src('./assets/_scss/style.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css/'));
});

//Преобразование css
gulp.task('minify-css', ()=>{
    return gulp.src('./assets/plugins/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('svgstore', function () {
    return gulp
        .src('./assets/image/scheme/*.svg')
        .pipe(svgmin())
        .pipe(svgstore({ fileName: '_icons.svg', prefix: 'icon-' }))
        .pipe(gulp.dest('./assets/image/scheme/'));
});

gulp.task('build', gulp.parallel('build-scss'));

gulp.task('watch', ()=>{
    gulp.watch('./assets/_scss/**/*.*', gulp.parallel('build-scss'));
});

gulp.task('default', gulp.parallel('watch', 'build'));
