module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        mangle: false
      },
      build: {
        src: 'app/**/*.js',
        dest: 'js/min/ajs-app.min.js'
      }
    },
    cssmin: {
    	build: {
    		src: 'css/styles.css',
    		dest: 'css/min/styles.min.css'
    	}
    },
    watch: {
    	files: ['css/styles.css', 'js/ajs-app.js'],
    	tasks: ['uglify', 'cssmin']
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('default', ['uglify', 'cssmin']);

};