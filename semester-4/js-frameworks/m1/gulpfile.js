const gulp = require('gulp');
const sass = require('gulp-sass');
const cssmin = require('gulp-cssmin');
const minify = require('gulp-minify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;
sass.compiler = require('node-sass');

gulp.task('sass', () => {
	gulp
		.src('./src/sass/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(cssmin())
		.pipe(
			rename({
				suffix: '.min'
			})
		)
		.pipe(gulp.dest('./dist/css'))
		.pipe(browserSync.stream());
});

gulp.task('minify-js', () => {
	gulp
		.src('./src/js/*.js')
		.pipe(
			minify({
				ext: {
					src: '.js',
					min: '.min.js'
				}
			})
		)
		.pipe(gulp.dest('./dist/js'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['sass', 'minify-js'], () => {
	browserSync.init({
		watch: true,
		startPath: './dist',
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./src/js/*.js', ['minify-js']);
	gulp.watch('./src/sass/*.scss', ['sass']).on('change', reload);
});

gulp.task('default', ['serve']);
