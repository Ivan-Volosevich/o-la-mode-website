const gulp = require('gulp');
const gulpSass = require('gulp-sass')(require('sass'));
const gulpPug = require('gulp-pug');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const webpack = require('webpack');
const webpackStream = require('webpack-stream');
const webpackConfig = require('./webpack.config.js');
const bulk = require('gulp-sass-bulk-importer');
const prefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const minifyJs = require('gulp-minify');
const concat = require('gulp-concat');
const map = require('gulp-sourcemaps');
const htmlmin = require('gulp-htmlmin');

function fonts() {
    return gulp.src('src/assets/fonts/**/*')
        .pipe(gulp.dest('./public/assets/fonts/'))
        .pipe(browserSync.stream());
}

function styles() {
    return gulp.src('src/assets/scss/main.scss')
        .pipe(map.init())
        .pipe(bulk())
        .pipe(gulpSass())
        .pipe(prefixer())
        .pipe(cleanCss())
        .pipe(concat('styles.min.css'))
        .pipe(gulp.dest('./public/assets/css'))
        .pipe(browserSync.stream());
}

function templates() {
    return gulp.src('./src/assets/pug/pages/*.pug')
        .pipe(gulpPug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./public'))
        .pipe(browserSync.stream());
}

function templatesEn() {
    return gulp.src('./src/assets/pug/pages/en/*.pug')
        .pipe(gulpPug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('./public/en'))
        .pipe(browserSync.stream());
}

function webpackConf() {
    return gulp.src('src/assets/js/*.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(minifyJs({noSource: true}))
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
            index: '*.html'
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
    gulp.watch('src/assets/pug/**/*.pug', templatesEn);
    gulp.watch('public/*.html').on('change', browserSync.reload);
}

exports.fonts = fonts;
exports.images = images;
exports.templates = templates;
exports.webpackConf = webpackConf;
exports.watch = watch;

function fontsBuild() {
    return gulp.src('src/assets/fonts/**/*')
        .pipe(gulp.dest('build/assets/fonts/'));
}

function stylesBuild() {
    return gulp.src('src/assets/scss/main.scss')
        .pipe(map.init())
        .pipe(bulk())
        .pipe(gulpSass())
        .pipe(prefixer())
		.pipe(cleanCss())
		.pipe(concat('styles.min.css'))
		.pipe(gulp.dest('build/assets/css/'))
}

function templatesBuild() {
    return gulp.src('src/assets/pug/pages/*.pug')
        .pipe(gulpPug({
            doctype: 'html',
            pretty: true
        }))
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('build'));
}

function webpackConfBuild() {
    return gulp.src('src/assets/js/*.js')
        .pipe(webpackStream(webpackConfig), webpack)
        .pipe(minifyJs({noSource: true}))
        .pipe(gulp.dest('build/assets/js'));
}

function imagesBuild() {
    return gulp.src('src/assets/images/**/*')
        .pipe(gulp.dest('build/assets/images'));
}

async function build() {
    fontsBuild();
    templatesBuild();
    stylesBuild();
    webpackConfBuild();
    imagesBuild();
}

exports.fontsBuild = fontsBuild;
exports.imagesBuild = imagesBuild;
exports.templatesBuild = templatesBuild;
exports.webpackConfBuild = webpackConfBuild;
exports.build = build;