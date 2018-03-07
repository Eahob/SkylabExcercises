const rp = require('request-promise')

// TODO implement api client

const api = {
    _baseUrl() {
        with (this) {
            return `${protocol}://${host}:${port}/api`
        }
    },

    _call(method, path, body) {
        // return rp(`${this._baseUrl()}/${path}`)
        //     .then(res => JSON.parse(res))
        return rp({
            method,
            uri: `${this._baseUrl()}/${path}`,
            body,
            json: true
        })
    },

    list() {
        return this._call('get', 'users')
    },

    register(name, surname, email, username, password) {
        return this._call('post', 'user', { name, surname, email, username, password })
    },

    delete(id,username, password) {
        return this._call('delete','user/'+id,{username, password })
    },

    modify(id,name, surname, email, username, password, newUsername, newPassword){
        return this._call('put','user/'+id,{name, surname, email, username, password, newUsername, newPassword})
    },
    retrieve(id){
        return this._call('delete','user/'+id)
    }
}

module.exports = api