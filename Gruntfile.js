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
        src: ['app/**/*.html', 'components/**/*.html'],
        dest: 'js/templates/templates.js'
      }
    },
    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: ['app/**/*.js', 'pages/**/*.js', 'components/**/*.js'],
        dest: 'js/min/ajs-app.min.js'
      },
      templates: {
        src: 'js/templates/templates.js',
        dest: 'js/min/templates.min.js'
      }
    },
    concat: {
      dist: {
        src: ['server/config/config.js', 'server/models/*.js', 'server/routes/*.js', 'server/config/config2.js'],
        dest: 'server.js',
      },
    },
    sass: {
      options: {
        style: 'expanded'
      },
      build: {
        expand: true,
        cwd: 'styles',
        src: ['*.scss'],
        dest: 'styles/',
        ext: '.css'
      }
    },
    cssmin: {
      options: {
        root: './'
      },
    	build: {
    		src: 'styles/styles.css',
    		dest: 'styles/min/styles.min.css'
    	}
    },
    karma: {
      unit: {
        configFile: 'karma.config.js'
      }
    },
    reload: {
      port: 5000,
      proxy: {
          host: 'localhost',
      }
    },
    watch: {
      app: {
        options: {
          livereload: true
        },
        files: ['app/**/*.*', 'pages/**/*.js', 'components/**/*.*', 'server/**/*.js'],
        tasks: ['ngtemplates', 'uglify']
      },
      scss: {
        options: {
          livereload: true
        },
        files: ['styles/styles.scss'],
        tasks: ['sass', 'cssmin']
      },
      server: {
        files: ['server/**/*.js'],
        tasks: ['concat']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-angular-templates');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-reload');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['ngtemplates', 'uglify', 'concat', 'sass', 'cssmin', 'karma']);
  grunt.registerTask('dev', ['ngtemplates', 'uglify', 'concat', 'sass', 'cssmin', 'karma', 'watch']);
  grunt.registerTask('test', ['karma']);
};