const express = require('express')
const router = express.Router()

const userModel = require("./user_model")

router.post('/', async (req, res, next) => {
    try {
        const user_info = {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            family: req.body.family,
            technologies: req.body.technologies,
            hobbies: req.body.hobbies
        }
        if (!user_info.first_name) {
            res.status(401).json({
                message: "Please enter a fist name."
            })
        } else if (!user_info.last_name) {
            res.status(401).json({
                message: "Please enter a last name."
            })
        } else if (!user_info.technologies) {
            res.status(401).json({
                message: "Please submit at least one technology."
            })
        } else {
            const user = await  userModel.add()

            res.status(200).json({
                message: "Adding user was successful",
                user: user
            })
        }
    } catch(err) {
        next(err)
    }
})

router.get('/', async (req, res, next) => {
    try {
        const user = await userModel.find()

        res.status(200).json({
            message: "User found!",
            user: user
        })
    } catch(err) {
        next(err)
    }
})

module.exports = router