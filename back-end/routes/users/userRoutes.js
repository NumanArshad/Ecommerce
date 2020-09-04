const express = require('express')
const router = express.Router()
const {
    authenticate, 
    register, 
    get,
    getAll, 
    getById, 
    remove,
    update
} = require( '../../controllers/users/userController')

router.post('/login', authenticate)
router.post('/register', register)
router.get('/', getAll)
router.get('/current', get)
router.get('/:id', getById)
router.patch('/:id', update)
router.delete('/:id', remove)

module.exports = router