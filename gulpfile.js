
var gulp         = require('gulp');
    browserSync  = require('browser-sync').create();
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync',  async function() {

    browserSync.init({
        server: "./build"
    });    

    gulp.watch("app/sass/*.scss", gulp.series('sass'));
    gulp.watch("app/**/*.+(htm|html)", gulp.series('html'));
    gulp.watch("app/**/*.js", gulp.series('js'));
    gulp.watch("app/img/*.*", gulp.series('img'));
});

gulp.task('sass', async function(){
    gulp.src('app/sass/**/*.+(scss|sass)')
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', async function(){
    gulp.src('app/**/*.+(htm|html)')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', async function(){
    gulp.src('app/**/*.js')
    .pipe(gulp.dest('build'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('img', async function(){
    gulp.src('app/img/*.*')
    .pipe(gulp.dest('build/img'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', gulp.series('browser-sync'));