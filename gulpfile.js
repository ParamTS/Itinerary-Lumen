const { gulp, src, dest, watch, series, parallel } = require('gulp');
var autoprefixer = require('autoprefixer');
var postcss = require('gulp-postcss');
var pxtorem = require('postcss-pxtorem');
var exec = require('child_process').exec;

const assetsLocation = "src/Frontend/Layout/_resources/assets"

let HELPERS = {
  execute: (command) => {
    const process = exec(command);
    process.stdout.on('data', (data) => { console.log(data.toString()); })
    process.stderr.on('data', (data) => { console.log(data.toString()); })
    process.on('exit', (code) => { 
      console.log('Process exited with code ' + code.toString()); 
    })
    return process;
  }
}

function remify(cb) {
  var processors = [
    autoprefixer({
        browsers: 'last 1 version'
    }),
    pxtorem({
        rootValue: 16,
        propList: ['*']
    })
  ];
  
  src([assetsLocation + '/main.b.css'])
  .pipe(postcss(processors))
  .pipe(dest(assetsLocation));

  cb();
}

function assets() {
  return HELPERS.execute('npm run build');
}

function serve() {
  return HELPERS.execute('./cubex serve');
}

function watcher() {
  watch(['src/Frontend/**/*.ts', 'src/Frontend/**/*.scss'], series(assets))
}

exports.assets = series(assets);
exports.remify = series(remify);
exports.watcher = series(watcher);
exports.build = parallel(assets, watcher, serve);