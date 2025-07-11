import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


const loginUser = async (req, res) => {
    res.json({success: true, message: "Login IS GOOD"})

}

const registerUser = async (req, res) => {
    res.json({success: true, message: "Register IS GOOD"})
}

export {loginUser, registerUser}