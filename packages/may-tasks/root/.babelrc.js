module.exports = {
	presets: [
		require.resolve("@babel/preset-env")
	],
	plugins: [
		"@babel/plugin-syntax-dynamic-import",
		"@babel/plugin-proposal-class-properties",
		"@babel/transform-runtime"
	]
};