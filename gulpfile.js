const {src, dest, parallel, series, watch} = require('gulp');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify-es').default;
const autoprefixer = require('gulp-autoprefixer');
const cleanСss = require('gulp-clean-css')
// const browserSync = require('browser-sync').create();

// function browsersync() {
//     browserSync.init({
//         server: {baseDir: 'app/'},
//         notify: false
//     })
// }

function scripts() {
    return src('./src/js/**/*.js')
    .pipe(concat('app.min.js'))
    .pipe(dest('app/'))
}

function startwatch() {
    watch('./src/js/**/*.js', scripts)
    watch('./src/sass/**/*.sass', styles)
}

function styles() {
    return src('./src/sass/app.min.sass')
    // .pipe(concat('style.css'))
    .pipe(sass({
        outputStyle: "expanded"
    }))
    .pipe(dest('app/'))
}

// exports.browsersync = browsersync;
exports.scripts = scripts;
exports.styles = styles;
exports.default = parallel(scripts, styles, startwatch);