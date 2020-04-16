class Tools {
	render($e) {
		Object.values(this.toolLib).forEach(Tool => {
			if (Tool.isAvailable()) {
				(new Tool()).create($e)
			}
		})
	}
	constructor() {
		this.toolLib = {
			favorites: require('./tools/favorites.js'),
			polynomial_helper: require('./tools/polynomial_helper.js'),
			stringify_latex: require('./tools/stringify_latex.js'),
			codeforces_links: require('./tools/codeforces_links.js'),
		}
	}
}

module.exports = new Tools()