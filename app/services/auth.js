import { API } from "../config/urls";
import * as HTTPRequest from "../lib/httpRequest";

const register = async (params = null) => {
    return new Promise(function (resolve, reject) {
        HTTPRequest.Post(API.register.endPoint, API.register.url, params)
            .then(result => {
                resolve(result)
            }).catch(e => {
                reject(e)
            })
    })
}

const login = async (params = null) => {
    return new Promise(function (resolve, reject) {
        HTTPRequest.Post(API.login.endPoint, API.login.url, params)
            .then(result => {
                resolve(result)
            }).catch(e => {
                reject(e)
            })
    })
}

const logout = async (params = null) => {
    return new Promise(function (resolve, reject) {
        HTTPRequest.Post(API.logout.endPoint, API.logout.url, params)
            .then(result => {
                resolve(result)
            }).catch(e => {
                reject(e)
            })
    })
}

export { register, login, logout }