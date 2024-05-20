const usersDB = require("../db/usersApp");
const encryptionService = require("../services/encryptionService");
const paginationService = require("../services/paginationService");

async function getAllUsers(req, res) {

    const tableNameParam = `users`;

    let { limit, offset } = req.query;
    limit = limit && !isNaN(parseInt(limit)) ? parseInt(limit) : 5;
    offset = offset && !isNaN(parseInt(offset)) ? parseInt(offset) : 0;
   
    try {
        const total = await usersDB.getUserCount();
        const users = await usersDB.getAllUsers(limit, offset);

        const paginationUsers = paginationService.pagination(limit, offset, total ,tableNameParam);

        res.json({
            ...paginationUsers,
            countAllUsers: total,
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
        const emailIncluded = "@";
        if (email.includes(emailIncluded)){
        const hash = await encryptionService.createHash(password);
        const result = await usersDB.insertUser(username, email, hash);
        const user = await usersDB.getUserById(result.insertId);
        res.json(user);
        } else {
            throw new Error("Insert a valid email");
        }      
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