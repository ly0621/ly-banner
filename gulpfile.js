var gulp = require('gulp');
var loader = require('gulp-load-plugins')();
var fs = require('fs');
var path = require('path');
var url = require('url');
gulp.task('webserver', function() {
    gulp.src('./src/')
        .pipe(loader.webserver({
            port: 8000,
            open: true,
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') { return };
                var pathname = url.parse(req.url).pathname;
                pathname = pathname === '/' ? 'index.html' : pathname;
                res.end(fs.readFileSync(path.join(__dirname, 'src', pathname)))
            }
        }))
})