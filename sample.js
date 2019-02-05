const createParser = require('./src/index')

const sampleParser = createParser({
	validHostnames: [ 'google.com' ],
	validProtocols: [ 'http', 'https' ],
	urlFormat: '/:version/api/:collecton/:id'
})

console.log('result', sampleParser('http://google.com/6/api/listings/3?sort=desc&limit=10'))

