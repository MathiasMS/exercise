const parser = require('../src/parser')

describe('Parser Test', () => {
	
	test('Valid protocols should be of type "Array"', () => {
		const protocol = 'http:'
		const validProtocols = ''

	  	expect(() => { parser.checkProtocol(protocol, validProtocols) })
	  	.toThrowError('Valid protocols config field should be of type "Array"');
	})

	test('Protocol must be one of validProtocols', () => {
		const protocol = 'http'
		const validProtocols = ['ftp']
		
	  	expect(() => { parser.checkProtocol(protocol, validProtocols) })
	  	.toThrowError(`Protocol must be one of: ${JSON.stringify(validProtocols)}`);
	})	

	test('Parse Query to object', () => {
		const query = 'sort=desc&limit=10'

	  	expect(parser.parseQuery(query))
	  	.toEqual({sort: 'desc', limit: 10})
	})

	test('Parse PathName to object', () => {
		const urlFormat = '/:version/api/:collecton/:id'
		const url = '/6/api/listings/3'

	  	expect(parser.parsePathname(urlFormat, url))
	  	.toEqual({ version: 6, collecton: 'listings', id: 3 })
	})	

	test('Error on the pathname', () => {
		const api = 'api'
		const badName = 'BadName'

		const urlFormat = `/:version/${api}/:collecton/:id`
		const url = `/6/${badName}/listings/3`
		
	  	expect(() => { parser.parsePathname(urlFormat, url) })
	  	.toThrowError(`'${badName}' pathname should match with '${api}' pathname`);
	})		


})