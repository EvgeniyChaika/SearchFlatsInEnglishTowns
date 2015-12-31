//https://github.com/gulpjs/gulp/blob/master/docs/API.md
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var ngAnnotate = require("gulp-ng-annotate");


// задача по умолчанию
gulp.task('default', function () {
    console.log('default task');
});

// просто объект с данными о путях
var CONFIG = {
    src: {
        html: "src/app/**/*.template.html",
        styles: ["bower_components/bootstrap/dist/css/bootstrap.css", 'src/assets/css/style.css'],

        scripts: [
            'src/app/app.js',
            "src/app/search_form/search_form.controller.js",
            "src/app/search_results/search_results.controller.js",
            "src/app/property_listing/property_listing.controller.js",
            "src/utils/data.service.js",
            "src/utils/network.service.js"
        ]
    },
    build: {
        templates : 'build/app',
        css       : 'build/css',
        js        : 'build/js'
    }
};


// задача по сборке темплейтов
gulp.task('html', function () {
    return gulp.src(CONFIG.src.html)
        .pipe(gulp.dest(CONFIG.build.templates)); //взять темплейты из CONFIG.src.html и положить в папку CONFIG.build.templates

});




// задача по сборке стилей
gulp.task('styles', function () {
    return gulp.src(CONFIG.src.styles)
        .pipe(concat( 'style.css' ))
        .pipe(gulp.dest( CONFIG.build.css ));

});


// задача по сборке скриптов
gulp.task('scripts',  function () {
    return gulp.src(CONFIG.src.scripts)
        .pipe(concat('script.min.js'))
        .pipe(ngAnnotate({
            add: true
        }))
        .pipe(uglify({
            preserveComments: 'all'
        }))
        .pipe(gulp.dest(CONFIG.build.js));

});


// задача сборки проекта, до запуска build будут выполнены задачи из массива
gulp.task('build', [ 'html', 'styles', 'scripts' ], function () {
    console.log('builded!');
});