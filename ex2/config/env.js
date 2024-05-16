module.exports.apiPort = 16000
module.exports.apiAccessPoint = `http://localhost:${this.apiPort}`
module.exports.apiRoute = (route) => this.apiAccessPoint + route