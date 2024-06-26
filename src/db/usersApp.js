const connection = require("../db/appConnection");

async function getUserCount() {

    try{
        const [result] = await connection.promise().query(`SELECT COUNT(*) AS totalUsers FROM users`) 

        return result[0].totalUsers;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}

async function getAllUsers(limit, offset) {

    const params = [ limit, offset ];

    try {
        const [results] = await connection.promise().query(`SELECT * FROM users LIMIT ? OFFSET ?`, params);

        return results;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}

async function getUserById(id) {
    const params = [id];

    try {
        const [result] = await connection.promise().query(`SELECT * FROM users WHERE id = ?`, params);

        return result[0];
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

async function insertUser(username, email, password) {
    const params = [ username, email, password ];

    try {
        const [result] = await connection.promise().query(`INSERT INTO users (username, email, password) VALUES( ?, ?, ?)`, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Insert a user!");
    }
}

async function updateUser(id, username, email, password) {
    const params = [username, email, password, id]; 
    
    try {
        const[result] = await connection.promise().query(`UPDATE users SET username = ?, email = ?, password = ? WHERE id = ? `, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Update a user!");
    }
}

async function deleteUser(id) {
    const params = [ id ];

    try {
        const [result] = await connection.promise().query(`DELETE FROM users WHERE id = ?`, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Delete a user!");
    }
}



module.exports = {
    getUserCount,
    getAllUsers,
    getUserById,
    insertUser,
    updateUser,
    deleteUser
}