const isNumber = (str) => {
	return isNaN(str) ? str : parseInt(str)
}

module.exports = {
	isNumber
}