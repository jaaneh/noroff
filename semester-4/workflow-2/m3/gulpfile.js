const gulp = require('gulp');
const less = require('gulp-less');
const imgmin = require('gulp-imagemin');
const browserSync = require('browser-sync').create();

gulp.task('less', () => {
	gulp
		.src('./styles/less/*.less')
		.pipe(less())
		.pipe(gulp.dest('./styles/css'));
});

gulp.task('minify-img', () => {
	gulp
		.src('./src/images/*')
		.pipe(imgmin())
		.pipe(gulp.dest('./src/minified-images'));
});

gulp.task('browser-sync', () => {
	browserSync.init(['styles/less/*'], {
		server: {
			baseDir: './'
		}
	});
});

gulp.task('default', ['less', 'minify-img', 'browser-sync'], () => {
	gulp.watch('./styles/less/*.less', ['less']).on('change', browserSync.reload);
});
