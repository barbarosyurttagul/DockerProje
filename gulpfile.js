// gulpfile.js

const gulp = require('gulp');
const shell = require('gulp-shell');

// Docker Compose komutunu çalıştıracak görev
gulp.task('docker-up', shell.task([
  'docker compose up --build'
]));

// Docker Compose konteynerlerini durduracak görev
gulp.task('docker-down', shell.task([
  'docker compose down'
]));

// Frontend ve Backend uygulamalarını başlatacak genel bir görev
gulp.task('start', gulp.series('docker-up'));

// Uygulamaları durduracak genel bir görev
gulp.task('stop', gulp.series('docker-down'));
