const gulp = require('gulp');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const rename = require('gulp-rename');
const imgmin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

const reload = browserSync.reload;

gulp.task('less', () => {
	gulp
		.src('./styles/less/*.less')
		.pipe(less())
		.pipe(cssmin())
		.pipe(
			rename({
				suffix: '.min'
			})
		)
		.pipe(gulp.dest('./styles/css'))
		.pipe(browserSync.stream());
});

gulp.task('minify-img', () => {
	gulp
		.src('./images/*')
		.pipe(imgmin())
		.pipe(gulp.dest('./minified-images'))
		.pipe(browserSync.stream());
});

gulp.task('serve', ['less', 'minify-img'], () => {
	browserSync.init({
		watch: true,
		startPath: './dist',
		server: {
			baseDir: './'
		}
	});

	gulp.watch('./styles/less/*.less', ['less']).on('change', reload);
});

gulp.task('default', ['serve']);
