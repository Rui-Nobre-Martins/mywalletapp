const connection = require("../db/appConnection");

async function getAllUsers() {

    try {
        const [results] = await connection.promise().query(`SELECT * FROM users`);

        return results;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}

module.exports = {
    getAllUsers,
}