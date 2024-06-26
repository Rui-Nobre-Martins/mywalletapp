const authDB = require("../db/authDB");
const encryptionService = require("../services/encryptionService");


async function loginUser(req, res) {
    console.log(req.body);
    const { email, password } = req.body;

    const user = await authDB.selectUser(email);
    if (!user) {
        res.status(400).json({
            message: "User not found"
        })
        return;
    }
    console.log(user);

    const result = await encryptionService.verifyHash(user.password, password);
    if (result !== true) {
        res.status(400).json({
            status: "Fail",
            message: "Wrong password"
        })
        return;
    }

    const cookieData = {
        userEmail: user.email,
        user: user.id
    }
    const jsonCookieData = JSON.stringify(cookieData);

    res.cookie("LoggedIn", jsonCookieData, {
        httpOnly: true,
        sameSite: "none",
        secure: true
      });

    res.json({
        status: "Success",
        message: "User Logged In",
        user: user.id
    });
}

async function logOutUser(req, res) {
    res.clearCookie("LoggedIn", {
        httpOnly: true,
        sameSite: "none",
        secure: true
    });

    res.status(200).json({
        status: "Success",
        message: "Logout successful"
    });
    console.log(logOutUser);
}

module.exports = {
    loginUser,
    logOutUser
}