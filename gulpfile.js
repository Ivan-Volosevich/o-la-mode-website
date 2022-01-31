const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpPug = require('gulp-pug');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');

function fonts() {
    return gulp.src('src/assets/fonts/**/*')
        .pipe(gulp.dest('./public/assets/fonts/'))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp.src('src/assets/scss/main.scss')
        .pipe(gulpSass())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(browserSync.stream());
}

function templates() {
    return gulp.src('./src/assets/pug/pages/*.pug')
        .pipe(gulpPug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());
}

function webpackConf() {
    return gulp.src('src/assets/js/index.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(gulp.dest('./public/assets/js'))
        .pipe(browserSync.stream());
}

function images() {
    return gulp.src('src/assets/images/**/*')
        .pipe(gulp.dest('./public/assets/images'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './public',
            index: 'index.html'
        }
    });
    fonts();
    styles();
    webpackConf();
    images();
    gulp.watch('src/assets/images/**/*', images);
    gulp.watch('src/assets/js/**/*.js', webpackConf);
    gulp.watch('src/assets/scss/**/*.scss', styles);
    gulp.watch('src/assets/pug/**/*.pug', templates);
    gulp.watch('public/index.html').on('change', browserSync.reload);
}


exports.fonts = fonts;
exports.images = images;
exports.templates = templates;
exports.webpackConf = webpackConf;
exports.watch = watch;