const parse = require('url').parse
const { checkProtocol, checkHost, checkQuery, parseQuery, parsePathname } = require('./parser')

/**
	Creates an url parser
	@param {array} validProtocols - List of accepted protocols - ['http', 'https', 'ftp']
	@param {array} validHostnames - List of accepted hosts - ['google.com', 'books.google.com', 'yahoo.com.ar']
	@param {string} urlFormat - The format of the pathname - '/:version/api/:collection/:id'
 */

const createParser = ({ validProtocols, validHostnames, urlFormat = '/' } = {}) => str => {
	const { protocol, host, pathname, query, search } = parse(str)
	try {
		checkProtocol(protocol, validProtocols)
		checkHost(host, validHostnames)
		checkQuery(search)
		
		return {
			...query && parseQuery(query),
			...parsePathname(urlFormat, pathname)
		}

	} catch (e) {
		console.error(e)
	}
		
}

module.exports = createParser	
