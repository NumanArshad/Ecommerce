const express = require('express')
const userService = require('../../services/users/userServices')

module.exports = {
    authenticate, 
    register, 
    get,
    getAll, 
    getById, 
    remove: _delete,
    update
}

function authenticate(req, res, next) {
    userService.authenticate(req.body).
        then(user => user ? res.status(200).json(user): res.status(400).json({message: "incorrect incredentials."}))
        .catch(err => next(err))
}

function register(req, res, next) {
    userService.create(req.body).
        then(() => res.json({}))
        .catch(err => next(err))
}

function getAll(req, res, next) {
    userService.getAll().
        then((users) => res.json(users))
        .catch(err => next(err))
}

function get(req, res, next) {
    userService.getById(req.params.sub).
        then(user => user ? res.json(user): res.sendStatus(404))
        .catch(err => next(err))
}

function getById(req, res, next) {
    userService.getById(req.params.id).
        then(user => user ? res.json(user): res.sendStatus(404))
        .catch(err => next(err))
}

function update(req, res, next) {
    userService.update(req.params.id, req.body).
        then(() => res.json({}))
        .catch(err => next(err))
}

function _delete(req, res, next) {
    userService.delete(req.params.id).
        then(() => res.json({}))
        .catch(err => next(err))
}



    