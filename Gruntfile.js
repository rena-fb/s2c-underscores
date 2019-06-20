const sass = require('node-sass');
module.exports = function (grunt){
    //configuration grunt js
    
    grunt.initConfig({
        //pass in options to plugins, references to files
        sass:{
            options:{
                implementation: sass,
                sourceMap: false
            },
            build:{
                files:[{
                    src: 'assets/sass/style.scss',
                    dest: 'assets/css/style.css'
                }]
            }
        },
        concat:{ 
            js:{
                src: ['assets/js/*.js'],
                dest: 'assets/build/scripts.js'
            },
            css:{
                src: ['assets/css/*.css'],
                dest: 'assets/build/styles.css'
            }

        },
        uglify:{
            build:{
                files:[{
                    src: 'assets/build/scripts.js',
                    dest: 'assets/build/scripts.js'
                }]
            }
        }
    });
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Register tasks
    grunt.registerTask('default', ['sass', 'concat', 'uglify']);
    
};   