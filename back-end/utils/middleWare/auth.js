const expressJwt = require('express-jwt')
const config = require('../../config/config.json')
const userService = require('../../services/users/userServices')


module.exports = async function auth() {
    const secret = config.secret
    return expressJwt({secret, algorithms: ['HS256'], isRevoked}).unless({
        path: [
            './users/login',
            'users/register'
        ]
    })
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub)
    if (!user) {
        return done(null, true)
    }
    done();
}
