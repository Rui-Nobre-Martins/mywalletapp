const connection = require("./appConnection");

async function insertUser(email, password) {

    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;

    try {
        const result = await connection.promise().query(sql, [email, password]);
        return result[0].insertId;
    }catch (error) {
        console.log("Erro a inserir user no auth");
        return -1;
    }
}






module.exports = {
    insertUser,
}