const usersDB = require("../db/usersApp");

async function getAllUsers(req, res) {

    let { limit = 5, offset = 0 } = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);
    
    try {
        const totalUsers = await usersDB.getUserCount();
        const users = await usersDB.getAllUsers();
        res.json({
            next: `http://localhost:3000/users/?limit=${limit}&offset=${offset+limit}`,
            previous: null,
            countAllUsers: totalUsers,
            results: users
        });
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function getUser(req, res) {
    const { id } = req.params;

    try{
        const user = await usersDB.getUserById(id);
        if(user) {
            res.json(user);
        } else {
            res.status(404).send("User not found");
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function postUser(req, res) {
    const { username, email, password } = req.body;

    try {
        const result = await usersDB.insertUser( username, email, password);
        const user = await usersDB.getUserById(result.insertId);
        res.json(user);
    } catch(error) {
        res.status(500).send(error.message);
    } 
}

async function putUser(req, res) {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
        const result = await usersDB.updateUser(id, username, email, password);
        if(result.affectedRows === 1) {
            const user = await usersDB.getUserById(id);
            res.json(user);
        } else {
            throw new Error("Oh no no...");
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function deleteUser(req, res) {
    const { id } = req.params;

    try {
        const result = await usersDB.deleteUser(id);
        if (result.affectedRows === 1) {
            res.send("User deleted"); 
        } else {
            res.status(404).send("User not found");
        }
     } catch(error) {
         res.status(500).send(error.message);
    }
}




module.exports = {
    getAllUsers,
    getUser,
    postUser,
    putUser,
    deleteUser
}