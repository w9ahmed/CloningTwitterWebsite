module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    ngtemplates: {
      options: {
        htmlmin: {
          // collapseWhitespace: true,
          removeComments: true,
          collapseBooleanAttributes: true
        },
        bootstrap: function(module, script) {
          return module + ".run(['$templateCache', function($templateCache) {\n "+ script + " }]);";
        },
        url: function(url) { return url.replace('.html', ''); }
      },
      app: {
        src: 'app/**/*.html',
        dest: 'js/templates/templates.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: ['app/**/*.js', 'pages/**/*.js'],
        dest: 'js/min/ajs-app.min.js'
      },
      templates: {
        src: 'js/templates/templates.js',
        dest: 'js/min/templates.min.js'
      }
    },
    sass: {
      options: {
        style: 'expanded'
      },
      build: {
        expand: true,
        cwd: 'css',
        src: ['*.scss'],
        dest: 'css/',
        ext: '.css'
      }
    },
    cssmin: {
      options: {
        root: './'
      },
    	build: {
    		src: 'css/styles.css',
    		dest: 'css/min/styles.min.css'
    	}
    },
    watch: {
    	files: ['app/**/*', 'pages/**/*.js',
        'js/templates/templates.js', 'css/styles.scss','css/styles.css'],
    	tasks: ['ngtemplates', 'uglify', 'sass', 'cssmin']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['ngtemplates', 'uglify', 'sass', 'cssmin']);
  grunt.registerTask('dev', ['ngtemplates', 'uglify', 'sass', 'cssmin', 'watch']);
};