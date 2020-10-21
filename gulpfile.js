const { src, dest, watch, series } = require('gulp');
const babel = require('gulp-babel');
const minify = require('gulp-minify');
const browserSync = require('browser-sync').create();

const watcher = watch(['./src/**/*.{html,js,css}', 'src/*.{html,js,css}']);

function serve(){
    browserSync.init({
        server: {
            baseDir: "src"
        },
        port: 4000
    });
}
function reload(){
    browserSync.reload();
}
watcher.on('change', function(path, stats) {
    reload();
});
function hero(){
    return src('src/hero/*.js')
    .pipe(babel())
    .pipe(minify())
    .pipe(dest('dist/hero'));
}
function carousel(){
    return src('src/carousel/*.js')
    .pipe(babel())
    .pipe(minify())
    .pipe(dest('dist/carousel'));
}
function tiles(){
    return src('src/tiles/*.js')
    .pipe(babel())
    .pipe(minify())
    .pipe(dest('dist/tiles'));
}

exports.serve = serve;
exports.hero = hero;
exports.tiles = tiles;
exports.carousel = carousel;
exports.default = serve;