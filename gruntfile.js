module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    clean: ["public/js"],

    uglify: {
      my_target: {
        options: {
          compress: {
            drop_debugger: true, // false for debugging
            sequences: true  // false for debugging
          },
          beautify: false  // true for debugging
        },
        files: {
          'public/js/script.js': ['source_js/script.js'],
        } // files
      } // my_target
    }, // uglify

    compass: {
      dev: {
        options: {
          config: 'compass_config.rb'
        } // options
      } // dev
    }, // compass

    watch: {
      options: { livereload: true },
      scripts: {
        files: ['source_js/*.js'],
        tasks: ['clean','uglify'],
      }, // script
      sass: {
        files: ['source_sass/*.scss', 'source_sass/foundation/*.scss'],
        tasks: ['compass:dev']
      }, // sass
      html: {
        files: ['public/*.html']
      }
    }, // watch

    express: {
      options: {
        // Override defaults here
      },
      dev: {
        options: {
          script: 'app.js'
        }
      }
    }
  }) // initConfig

  grunt.registerTask('default', ['uglify', 'compass:dev', 'express:dev', 'watch']);

} // exports
