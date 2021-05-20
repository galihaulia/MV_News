const User = require('../models').User;
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../helper.js/validation');
const jwt = require('jsonwebtoken')
const { JWT_SECRET } = process.env;
const { resSuccess }= require('../helper.js/respons');


const register = (req, res, next) => {
    const { error } = registerValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    const dataUser = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    User
    .findOne({
        where: {
            email: dataUser.email
        }
    })
    .then(data => {
        if(data){
            return res.status(400).send('Email already exists');
        }
        else{
            User
            .create(dataUser)
            .then(data => {
                const token = jwt.sign({id:data.id}, JWT_SECRET);
                const message = 'Login Success!'
                return res.status(200).header('auth-token', token).send(resSuccess({
                    token:token,
                    message: "Regis Success"
                }));
            })
        }
    })
}

const login = (req, res, next) => {
    const { error } = loginValidation(req.body);
    if(error){
        return res.status(400).send(error.details[0].message);
    }
    else{
        const dataUser = {
            email: req.body.email,
            password: req.body.password
        }
        User
        .findOne({
            where: {
                email: dataUser.email
            }
        })
        .then(data => {
            if(!data){
                return res.status(400).send('Email is not found');
            }
            const validPassword = bcrypt.compareSync(dataUser.password, data.password);
            if(!validPassword){
                return res.status(400).send('Invalid password');
            }
            else{
                const token = jwt.sign({id:data.id}, JWT_SECRET);
                res.header('auth-token', token).send(resSuccess({
                    data: token,
                    message: "Login Success"
                }));
            }
        })
    }
}

module.exports = {
    register:register,
    login:login
}