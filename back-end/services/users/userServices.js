const config = require('../../config/config.json')
const auth = require('../../utils/middleWare/auth')
const bcrypt = require('bcryptjs')
const db = require('../../config/db')
const User = db.User


module.exports = {
    authenticate, 
    getAll, 
    getById, 
    create, 
    update, 
    delete: _delete
}


async function authenticate({username, password}) {
    const user = await User.findOne({username})
    if (username && bcrypt.compareSync(password, user.hash)) {
        const token = auth.sign({sub: user.id}, config.secret, {expiresIn: '7d'})
        return {
            ...user.toJSON(),
            token
        }
    }
}

async function getAll() {
    return await User.find()
}

async function getById(id) {
    return await User.findById(id)
}

async function create(user) {
    if (await User.findOne({username: user.username})) {
        throw {message: 'username "' + user.username + '"is already exits.'}
    }
    const newUser = new User(user)
    // hashing the password
    if (user.password) {
        user.hash = bcrypt.hashSync(user.password, 10)
    }
    await newUser.save()
}

async function update(id, user) {
    const userExits = await User.findById(id)

    if (!userExits) throw {
        message: "User not found."
    }
    if (userExits.username !== user.username && await User.findOne({username: user.username})) {
        throw 'Username "' + user.username + '" is already taken';
    }
    if (user.password) {
        user.hash = bcrypt.hashSync(user.password, 10)
    }
    Object.assign(userExits, user)
    await userExits.save()
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}









