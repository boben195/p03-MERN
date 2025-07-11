import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userModel from "../models/userModels.js";


const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET)
}

const loginUser = async (req, res) => {
    res.json({success: true, message: "Login IS GOOD"})

}

const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({success: true, message: "User already exists"})
        }
        if (!validator.isEmail(email)) {
            return res.json({success:false, message: "Invalid email address"})
        }
        if (password.length < 8) {
            return res.json({success: false, message: "Password need be longer. Try better"})
        }
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name, email, password: hashPassword
        })
        const user = await newUser.save()
        const token = createToken(user._id)
        res.json({success: true, message: "Account created!!! HOREY!", token})
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}

export {loginUser, registerUser}