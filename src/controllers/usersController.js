const usersDB = require("../db/usersApp");

async function getAllUsers(req, res) {
    try {
        const users = await usersDB.getAllUsers();
        res.json(users);
    } catch(error) {
        res.status(500).send(error.message);
    }
}



module.exports = {
    getAllUsers,
}