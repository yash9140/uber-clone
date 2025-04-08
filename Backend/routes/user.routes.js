const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");
const { validationResult } = require("express-validator");

router.post ('/register', [
    body('email').isEmail().withMessage("Invalid Email"),
    body("fullname.firstname").isLength({min: 3}).withMessage("First name should of min length 3"),
    body('password').isLength({min: 6}).withMessage("password must be of length 6"),
],
     userController.registerUser
)

router.post('/login', [
    body('email').isEmail().withMessage("Invalid Email"),
    body("password").isLength({min: 6}).withMessage("Password must be at least 6 characters long")
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser ,userController.getUserProfile)

router.get("/logout", authMiddleware.authUser, userController.logoutUser)



module.exports = router;