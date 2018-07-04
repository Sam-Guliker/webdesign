var gulp = require("gulp")
var sass = require("gulp-ruby-sass")
var browserify = require("browserify")
var reactify = require("reactify")
var babelify = require("babelify")
var vinylSource = require("vinyl-source-stream")
var browserSync = require("browser-sync").create()
var autoprefixer = require("gulp-autoprefixer")
var cssnano = require("gulp-cssnano")
var uglify = require("gulp-uglify")
var buffer = require("vinyl-buffer");
var notifier = require("node-notifier")
var fs = require("fs")

var source = {
  script: ["src/**/*.js", "src/**/*.jsx"],
  style: "sass/**/*.sass",
};

var dest = {
  script: "js/",
  style: "css/",
};

var pages = ["dashboard", "data-analysis", "login", "campaign-overall"]
var current = "reporting"

gulp.task("serve", ["sass", "browserify"], function () {
  browserSync.init({
    ghostMode: false,
    server: "./",
  });
  gulp.watch(source.style, ["sass"]);
  gulp.watch(source.script, ["script-watch"]);
  gulp.watch(["./*.html"], function () {
    browserSync.reload();
  });
});

gulp.task("sass", function () {
  return sass("sass/" + current + ".sass", { style: "expanded" })
    .on("error", function (err) {
      console.error("Error!", err.message);
    })
    .pipe(browserSync.stream())
    .pipe(gulp.dest(dest.style));
});

gulp.task("script-watch", ["browserify"], function () {
  browserSync.reload();
});

gulp.task("browserify", function () {
  return browserify("./src/" + current + ".jsx")
    .transform(babelify)
    .transform(reactify)
    .bundle()
    .on("error", function (err) {
      var reg = /(.*\/)(.*)(?= while)/
      if (reg.test(err.message)) {
        notifier.notify({
          title: "Browserify Error!",
          message: err.message.match(reg)[2],
        })
      }

      console.log("[Error]: " + err.message);
      this.emit("end");
    })
    .pipe(vinylSource(current + ".js"))
    .pipe(gulp.dest(dest.script))
});

gulp.task("build-js", function () {
  pages.map(function (name, index) {
    var filename = "./src/" + name + ".jsx"
    if (!fs.existsSync(filename)) {
      return
    }

    return browserify(filename)
      .transform(babelify)
      .transform(reactify)
      .bundle()
      .pipe(vinylSource(name + ".js"))
      .pipe(buffer())
      .pipe(uglify())
      .pipe(gulp.dest(dest.script))
  })
})

gulp.task("build-css", function () {
  pages.map(function (name) {
    var filename = "./sass/" + name + ".sass"
    if (!fs.existsSync(filename)) {
      return
    }

    return sass(filename, { style: "expanded" })
      .on("error", function (err) {
        console.error("Error!", err.message);
      })
      .pipe(autoprefixer({
        browsers: ["last 2 versions"],
        cascade: false,
      }))
      .pipe(cssnano())
      .pipe(gulp.dest(dest.style));
  })
})

gulp.task("build", ["build-js", "build-css"])
gulp.task("default", ["serve"]);