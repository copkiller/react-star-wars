const { alias } = require('react-app-rewire-alias');

module.exports = function override(config, env) {
	alias({
		'@hoc-helpers': 'src/hoc-helpers',
		'@components': 'src/components',
		'@containers': 'src/containers',
		'@constants': 'src/constants',
		'@services': 'src/services',
		'@ui': 'src/components/UI',
		'@styles': 'src/styles',
		'@routes': 'src/routes',
		'@static': 'src/static',
		'@store': 'src/store',
		'@hooks': 'src/hooks',
		'@utils': 'src/utils',
	})(config);
	return config;
}