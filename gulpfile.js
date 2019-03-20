
var gulp         = require('gulp');
    browserSync  = require('browser-sync').create();
    sass         = require('gulp-sass');
    autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync',  async function() {

    browserSync.init({
        server: "./docs"
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
    .pipe(gulp.dest('docs/css'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('html', async function(){
    gulp.src('app/**/*.+(htm|html)')
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('js', async function(){
    gulp.src('app/**/*.js')
    .pipe(gulp.dest('docs'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('img', async function(){
    gulp.src('app/img/*.*')
    .pipe(gulp.dest('docs/img'))
    .pipe(browserSync.reload({stream:true}));
});

gulp.task('default', gulp.series('browser-sync'));