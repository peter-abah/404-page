const { src, dest, watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');

const generateCSS = (callback) => {
  const processors = [
    require('autoprefixer'),
    //require('cssnano'),
  ];

  src('./src/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(processors))
    .pipe(dest('./css'));

  callback();
};

const watchFiles = (callback) => {
  watch('src/sass/*.scss', generateCSS);
  callback();
}

exports.generateCSS = generateCSS;
exports.watch = watchFiles;