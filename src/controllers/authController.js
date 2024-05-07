const authDB = require("../db/authDB");
const encryptionService = require("../services/encryptionService");

async function registerUser(req, res) {
    const { email, password } = req.body;

    const hash = await encryptionService.createHash(password);
    const userId = await authDB.insertUser(email, hash);

    if (userId === -1) {
        res.status(400).json({
            message: "Error registering user!"
        })
        return;
    }

    res.json({
        email,
        userId
    });
}

module.exports = {
    registerUser,
}