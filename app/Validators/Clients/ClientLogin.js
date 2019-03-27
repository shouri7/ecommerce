'use strict'

class ClientsClientLogin {
    get rules() {
        return {
            email: 'required|email',
            password: 'required'
        }
    }
}

module.exports = ClientsClientLogin
