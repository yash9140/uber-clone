const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");


router.post ('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First name should of min length 3"),
    body('password').isLength({min: 6}).withMessage("password must be of length 6"),
],
     userController.registerUser
)



module.exports = router;