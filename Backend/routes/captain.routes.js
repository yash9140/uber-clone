const captainController = require("../controllers/captain.controller");
const express = require("express");
const router = express.Router();
const { body } = require("express-validator");

router.post('register', [
    body('email').isEmail().withMessage("Please enter a valid email address"),
    body('fullname.firstname').isLength({ min: 3}).withMessage("Firstname must be atleast 3 characters long"),
    body('password').isLength({ min: 6}).withMessage("Password must be atleast 3 characters long"),
    body('vehicle.color').isLength({ min: 3}).withMessage("Color must be atleast 3 characters long"),
    body('vehicle.plate').isLength({ min: 3}).withMessage("plate must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({ min: 1}).withMessage("capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car','bus','motorcycle']).withMessage("Invalid Vehivcle Type"),

],
    captainController.registerCaptain
)

module.exports = router;