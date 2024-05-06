const connection = require("./appConnection"); 

async function insertUser(email, hash) {

    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    try {
        const result = await connection.promise().query(sql, [email, hash]);
        return result[0].insertId;
    } catch(error) {
        console.log(error);
        return -1;
    }   
}

async function selectUser(email) {
    const sql = `SELECT * FROM users WHERE email = ?`;
    const result = await connection.promise().query(sql, [email]);

    const rows = result[0];
    if (rows.length === 1) {
        return rows[0];
    } else {
        return undefined;
    }
}

module.exports = {
    selectUser,
    insertUser
}

