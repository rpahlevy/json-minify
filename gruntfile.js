module.exports = function (grunt) {
    grunt.initConfig({

    // define source files and their destinations
    // uglify: {
        // files: { 
            // src: 'json/*.json',  // source files mask
            // dest: 'json-min/',    // destination folder
            // expand: true,    // allow dynamic building
            // flatten: true,   // remove all unnecessary nesting
            // ext: '.min.js'   // replace .js to .min.js
        // }
    // },
	'json-minify': {
		build: {
			files: 'json/*.json'
		}
	},
    watch: {
        js:  { files: 'json/*.json', tasks: [ 'uglify' ] },
    }
});

// load plugins
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-json-minify');

// register at least this one task
grunt.registerTask('default', [ 'json-minify' ]);


};