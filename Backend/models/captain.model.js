const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const captionSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, "Firstname must be at least 3 characters long"],
        },
        lastname: {
            type: String,
            required: true,
            minlength: [3, "Lastname must be at least 3 characters long"]
        },
       
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        match: [/^\s+@\s+\.\S+$/," Please neter an valid email address"]
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    sockedId: {
        type: String,
    },
    status: {
        type: String,
        enum: [ "active" , "inactive" ],
        default: "inactive",
    },

    vehicle: {
        color: {
            type: String,
            required: true,
            minlength: [3, "Color must be at least 3 characters long"],
        },
        plate: {
            type: String,
            required: true,
            minlength: [3, "plate must be at least 3 characters long"],
        },
        capacity: {
            type: Number,
            required: true,
            min: [1, "capacity must be at least 1"],
        },
        vehicleType: {
            type: String,
            required: true,
            enum: ["car", "bus", "Motorcycle"],
        },
        
        
    },
    location: {
        lat: {
            type: Number,
        },
        lng: {
            type: Number,
        }
    }
})

captionSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({  _id: this._id}, process.env.JWT_SECRET, { expiresIn: '24h' });
        return token;
}

captionSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

captionSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
}
const captionModel = mongoose.model("caption", captionSchema)

module.exports = captionModel;