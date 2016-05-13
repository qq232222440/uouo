// 引入 gulp
// npm install --save-dev gulp-babel babel-preset-es2015 引入babel
var gulp = require('gulp');
 
// 引入组件
var htmlmin = require('gulp-htmlmin'), //html压缩
    imagemin = require('gulp-imagemin'),//图片压缩
    pngcrush = require('imagemin-pngcrush'),
    minifycss = require('gulp-minify-css'),//css压缩
    md5 = require('gulp-md5-plus'),
    os = require('os'),
    sass = require('gulp-ruby-sass'),
    gulpOpen = require('gulp-open'),
    babel = require('gulp-babel'),//es6转换
    clean = require('gulp-clean'),//文件清除
    jshint = require('gulp-jshint'),//js检测
    uglify = require('gulp-uglify'),//js压缩
    concat = require('gulp-concat'),//文件合并
    rename = require('gulp-rename'),//文件更名
    connect = require('gulp-connect'),
    notify = require('gulp-notify');//提示信息
var host = {
    path: 'dest/',
    port: 3000,
    html: 'index.html'
};
//mac chrome: "Google chrome", 
var browser = os.platform() === 'linux' ? 'Google chrome' : (
  os.platform() === 'darwin' ? 'Google chrome' : (
  os.platform() === 'win32' ? 'chrome' : 'firefox'));
var pkg = require('./package.json'); 
// 压缩html
gulp.task('html', function() {
  return gulp.src('src/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./dest'))
      .pipe(connect.reload())
    .pipe(notify({ message: 'html task ok' }));
 
});
 
// 压缩图片
gulp.task('img', function() {
  return gulp.src('src/images/*')
    .pipe(imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}],
        use: [pngcrush()]
    }))
    .pipe(gulp.dest('./dest/images/'))
    .pipe(notify({ message: 'img task ok' }));
});
 
// 合并、压缩、重命名css
gulp.task('css', function() {
    var cssSrc='src/sass/*.scss',
        cssDst = 'dest/css';
    return gulp.src('src/css/*.css')
    // .pipe(sass({ style: 'compressed'}))
    .pipe(gulp.dest(cssDst))
    // .pipe(rename({ suffix: '.min' }))
    .pipe(minifycss())
    .pipe(gulp.dest(cssDst))
        .pipe(connect.reload())
    .pipe(notify({ message: 'css task ok' }));
});
 
// 检查js
gulp.task('lint', function() {
  return gulp.src('src/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(notify({ message: 'lint task ok' }));
});
 
// 合并、压缩js文件
gulp.task('js', function() {
  return gulp.src('src/js/*.js')
    .pipe(babel({presets:['es2015']}))
   // .pipe(concat('all.js'))
    .pipe(gulp.dest('dest/js'))
    // .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dest/js'))
      .pipe(connect.reload())
    .pipe(notify({ message: 'js task ok' }));
});
//将js加上10位md5,并修改html中的引用路径，该动作依赖js
gulp.task('md5:js', ['js'],function (done) {
    gulp.src('dest/js/*.js')
        .pipe(md5(10, 'dest/*.html'))
        .pipe(gulp.dest('dest/js'))
        .on('end', done);
});
//将css加上10位md5，并修改html中的引用路径，该动作依赖css
gulp.task('md5:css',['css'] ,function (done) {
    gulp.src('dest/css/*.css')
        .pipe(md5(10, 'dest/*.html'))
        .pipe(gulp.dest('dest/css'))
        .on('end', done);
});

 gulp.task('clean', function (done) {
    gulp.src(['dest'])
        .pipe(clean())

});
 gulp.task('open', function (done) {
    gulp.src('')
        .pipe(gulpOpen({
            app: browser,
            uri: 'http://localhost:3000/'
        }))
        .on('end', done);
});
 gulp.task('connect', function () {
    console.log('connect------------');
    connect.server({
        root: host.path,
        port: host.port,
        livereload: true
    });
});
// 默认任务
gulp.task('default',['clean'], function(){
  gulp.run('connect','img', 'css','lint', 'js', 'html', 'md5:css', 'md5:js','open');
 
  // 监听html文件变化
  gulp.watch('src/*.html', function(){
    gulp.run('html');
  });
 
  // Watch .css files
  gulp.watch('src/css/*.css', ['css']);
 
  // Watch .js files
  gulp.watch('src/js/*.js', ['lint', 'js']);
 
  // Watch image files
  gulp.watch('src/images/*', ['img']);
});
// 默认任务
gulp.task('dev',function(){
    gulp.run('connect','img', 'css','lint', 'js', 'html','open');

    // 监听html文件变化
    gulp.watch('src/*.html', function(){
        gulp.run('html');
    });

    // Watch .css files
    gulp.watch('src/css/*.css', ['css']);

    // Watch .js files
    gulp.watch('src/js/*.js', ['lint', 'js']);

    // Watch image files
    gulp.watch('src/images/*', ['img']);
});
