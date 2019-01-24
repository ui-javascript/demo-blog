var gulp = require('gulp');
var shell = require('gulp-shell')
var del = require('del');
var ghPages = require('gulp-gh-pages');

// 删除之前生成的dist目录
gulp.task('clean', function (cb) {
  return del([
    'dist/',
    '.publish/'
  ], cb);
});

// shell中执行命令生成文件
gulp.task('build', ['clean'], () => {
  return gulp.src('*.js', {
      read: false
    })
    .pipe(shell([
      'nodeppt generate _nodeppt dist -a'
    ]))
})

// 部署到github pages上
gulp.task('deploy', ['build'], () => {
  return gulp.src('./dist/**/*')
    .pipe(ghPages({
      // origin: 'gh-pages',
      remoteUrl: 'git@github.com:luo0412/ppt-web.git',
      force: true
    }))
});

// gulp.task('deploy', shell.task('npm run deploy:nodeppt'));

gulp.task('default', ['deploy']);
