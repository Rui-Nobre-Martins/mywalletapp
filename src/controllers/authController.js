const authDB = require("../db/authDB");
const usersDB = require("../db/usersApp");

const encryptionService = require("../services/encryptionService");

async function registerUser(req, res) {
    const { email, password } = req.body;

    const hash = await encryptionService.createHash(password);
    const userId = await auth.insertUser(email, hash);
    
    if (userId === -1) {
        res.status(400).json({
            message: "Error registering user"
        })
        return;
    }

    res.json({
        email,
        userId
    });
}

async function loginUser(req, res) {
    // console.log(req.body);
    const { email, password } = req.body;

    const user = await authDB.selectUser(email);
    if (!user) {
        res.status(400).json({
            message: "User not found"
        })
        return;
    }

    const result = await encryptionService.verifyHash(user.password, password);
    if (result !== true) {
        res.status(400).json({
            status: "Fail",
            message: "wrong password"
        })
        return;
    }

    const cookieData = { userEmail: user.email }
    const jsonCookieData = JSON.stringify(cookieData);

    res.cookie("LoggedIn", jsonCookieData, {
        httpOnly: true,
        sameSite: "none",
        secure: true
      });

    res.json({
        status: "success",
        message: "user Logged In"
    });
}

module.exports = {
    registerUser,
    loginUser
}
