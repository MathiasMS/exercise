const { isNumber } = require('./utils')

const checkProtocol = (protocol, validProtocols = []) => {

	if (!Array.isArray(validProtocols)) throw 'Valid protocols config field should be of type "Array"'

	if (validProtocols.length === 0) return

	const rawProtocol = protocol.replace(":", "")

	if (!validProtocols.includes(rawProtocol)) throw `Protocol must be one of: ${JSON.stringify(validProtocols)}`
}

const checkHost = (host, validHostnames = []) => {
	if (!host) throw 'Cannot find host in the url'

	if (!Array.isArray(validHostnames)) throw 'Valid hostnames config field should be of type "Array"'

	if (validHostnames.length === 0) return

	if (!validHostnames.includes(host)) throw `Host must be one of: ${JSON.stringify(config.validHostnames)}`
}

const checkQuery = (query) =>{
	const pattern = new RegExp('^\\?([\\w-]+(=[\\w-]*)?(&[\\w-]+(=[\\w-]*)?)*)?$')

	if(!pattern.test(query)) throw `${query} is not a valid query`	
}

const parseQuery = (query) => {
	const splittedQuery = query.split('&')
	return splittedQuery.reduce((acc, chunkedQuery) => {
		const [ key, value ] = chunkedQuery.split('=')
		return {
			...acc,
			[key]: isNumber(value),
		}
	}, {})
}

const parsePathname = (urlFormat, url) => {
	const chunkedUrlFormat = urlFormat.split('/')
	const chunkedUrl = url.split('/')
	if (chunkedUrlFormat.length !== chunkedUrl.length) throw 'The url does not match with the provided format'

	return chunkedUrlFormat.reduce((acc, chunk, index) => {
		const isVariable = chunk.charAt( 0 ) === ':'
		if (isVariable) {
			return {
				...acc,
				[chunk.substring(1)]: isNumber(chunkedUrl[index]),
			}
		}

		if (chunk !== chunkedUrl[index]) throw `'${chunkedUrl[index]}' pathname should match with '${chunk}' pathname`

		return acc

	}, {})
}


module.exports = {
	checkProtocol,
	checkHost,
	checkQuery,
	parseQuery,
	parsePathname,
}