"use strict";

module.exports = function(grunt) {

	let arDefault = ['jsdoc2md'];

	grunt.initConfig({

		jsdoc2md: {
			oneOutputFile: {
				src: 'CollectedCalls.js',
				dest: 'README.md'
			}

		},
		default : arDefault
	});

	grunt.loadNpmTasks('grunt-jsdoc-to-markdown');
	grunt.registerTask('default', arDefault);
};



