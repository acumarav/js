module.exports = function(grunt){
    grunt.initConfig({

        watch :{
        scripts :{
            files:["*.js","*.html","scripts/*.js"],
            options: {livereload: 9090}
        }
    }
   } );

    grunt.loadNpmTasks('grunt-contrib-watch');
}