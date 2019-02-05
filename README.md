# Url parser
Url parser helper to validate an url with a specified structure, returning the pathname and query parameters as key/value pairs.

To use it import the createParser factory method wich optionally can receive a configuration object.

    import createParser from 'urlParser'
    const myParser = createParser(configuration);

The configuration object accepts the following values:

**validProtocols:** Array of strings optional. List of valid protocols accepted by the parser. 
Example: `['http', 'https', 'ftp']`  Default: `[]` (all accepted)

**validHostnames:** Array of strings, optional. List of valid host names accepted by the parser
Example: `['google.com', 'books.google.com', 'yahoo.com.ar']` Default: `[]` (all accepted) 

**urlFormat:** String, optional. Pathname to validate. Can contain static paths or variables.
Example:  `/:version/api/:collecton/:id` Default: `/`

The parser will then accepts an url with the following format:

[**Protocol**: required][**Host**: required][**Pathname**][**QueryParameters**]

**Example:** `http://google.com/6/api/listings/3?sort=desc&limit=10` 
	will return
`{ version: 6, collection: listings, id: 3, sort: 'desc', limit: 10}`


## Example
To run the example `npm start`

## Testing

To run the tests `npm run test`

# Zoo

Find a simple solution to this problem on /zoo directory
