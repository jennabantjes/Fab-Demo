module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jekyll: {
      dist: {
        src: 'app/jekyll',
        dest: 'app/jekyll/_site'
      }
    },

    copy: {
      main: {
        files: [
          {
            'expand': true,
            'cwd': 'app/jekyll/_site',
            'src': ['**/*.html'],
            'dest': 'public/'
          }
        ]
      }
    },

    sass: {
      dev: {
        src: 'app/sass/style.scss',
        dest: 'public/stylesheets/app.css',
        options: {
          style: 'expanded',
          lineNumbers: true
        }
      },
      prod: {
        src: 'app/sass/style.scss',
        dest: 'public/stylesheets/app.min.css',
        options: {
          style: 'compressed'
        }
      }
    },

    jshint: {
      files: ['Gruntfile.js', 'app/javascripts/**/*.js', '!app/javascripts/plugins/*.js'],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },

    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['app/javascripts/plugins/*.js', 'app/javascripts/modules/*.js', 'app/javascripts/app.js'],
        dest: 'public/javascripts/app.js'
      }
    },

    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("yyyy-mm-dd") %>' +
          'Author: <%= pkg.author %> */'
      },
      my_target: {
        files: {
          'public/javascripts/app.min.js': ['app/javascripts/plugins/*.js', 'app/javascripts/modules/*.js', 'app/javascripts/app.js']
        }
      }
    },

    watch: {
      stylesheets: {
        files: 'app/sass/**/*.scss',
        tasks: 'sass:dev'
      },
      javascript: {
        files: ['Gruntfile.js'],
        tasks: ['jshint']
      },
      jsBuilder: {
        files: ['app/javascripts/**/*.js'],
        tasks: ['jshint', 'concat']
      },
      jekyll: {
        files: ['app/jekyll/**/*.html','!app/jekyll/_site/**/*.html'],
        tasks: ['jekyll', 'copy']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-jekyll');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['jekyll', 'copy', 'sass', 'jshint', 'concat', 'uglify']);
  grunt.registerTask('html', ['jekyll', 'copy']);

};
