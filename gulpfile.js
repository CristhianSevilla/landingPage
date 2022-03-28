//GULP
const { src, dest, whatch, parallel, watch } = require('gulp');
//css
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer'); //se asegura de que la hoja de estilos funcionen bien en el navegador
const cssnano = require('cssnano'); //comprime el codigo de css
const postcss = require('gulp-postcss'); //hace algunos ajustes mas
const sourcemaps = require('gulp-sourcemaps'); //

//javaScript
const terser = require('gulp-terser-js');
//imagenes
const cache = require('gulp-cache');
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp');
const avif = require('gulp-avif');


//css
function css(done) {
    src('src/scss/**/*.scss') //Identificar archivo sass (scss) a compilar
        .pipe(sourcemaps.init()) //inicia
        .pipe(plumber()) //para que no se detenga cada que hay un error
        .pipe(sass()) //compilar el archivo
        .pipe(postcss([autoprefixer(), cssnano()]))
        .pipe(sourcemaps.write('.')) //. para que se guarde en la misma ubicación)
        .pipe(dest('build/css')) //guardar el nuevo archivo css
    done();
}

//javaScript
function javaScript(done) {
    src('src/js/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('build/js'));
    done();
}

//imagenes webp
function versionWebp(done) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{jpg,png}') //Todas las imagenes tengan el formato dentro de la carpeta y subcarpetas de img
        .pipe(webp(opciones)) //convertirlas al formato webp
        .pipe(dest('build/img')) //guardarlas en esta ruta
    done();
}

//imagenes avif
function versionAvif(done) {
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{jpg,png}') //Busca todas las imagenes que tengan esos dos formatos
        .pipe(avif(opciones)) //convirte las imagenes a webp
        .pipe(dest('build/img')) //almacena las imagenes en el disco duro
    done();
}

//aligerar imagenes
function imagenes(done) {
    const opciones = {
        optimizationLevel: 3
    }
    src('src/img/**/*.{png,jpg}')
        .pipe(cache(imagemin(opciones)))
        .pipe(dest('build/img'))
    done();
    done();
}

//watch para escuchar cambios y aplicar automaticamente 
function dev(done) {
    //cuando suceda un cambio en cualquier archivo scss manda llamar la funcion css
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javaScript);
    done();
}
//hacer visibles las funciones
exports.css = css;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.imagenes = imagenes;
exports.javaScript = javaScript;


exports.dev = parallel(css, versionWebp, versionAvif, javaScript, dev);