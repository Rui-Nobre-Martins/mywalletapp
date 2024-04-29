const connection = require("../db/appConnection");

async function getTransactionCount() {

    try{
        const [result] = await connection.promise().query(`SELECT COUNT(*) AS totalUsers FROM transactions`) 

        return result[0].totalUsers;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}

async function getAllTransactions() {

    try {
        const [result] = await connection.promise().query(`SELECT * FROM transactions`);

        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}

async function getTransactionById(id) {
    const params = [id];

    try {
        const [result] = await connection.promise().query(`SELECT * FROM transactions WHERE id = ?`, params);

        return result[0];
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

async function insertTransaction( user_id, amount, description ) {
    const params = [ user_id, amount, description ];

    try {
        const [result] = await connection.promise().query(`INSERT INTO transactions (user_id, amount, description) VALUES(?, ?, ?)`, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Insert a new transaction!");
    }
}

async function updatetransaction(id, amount, description ) {
    const params = [ amount, description, id ]; 
    
    try {
        const[result] = await connection.promise().query(`UPDATE transactions SET amount = ?, description = ? WHERE id = ? `, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Update a transaction!");
    }
}

async function deleteTransaction(id) {
    const params = [ id ];

    try {
        const [result] = await connection.promise().query(`DELETE FROM transactions WHERE id = ?`, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Delete a transaction!");
    }
}



module.exports = {
    getTransactionCount,
    getAllTransactions,
    getTransactionById,
    insertTransaction,
    updatetransaction,
    deleteTransaction
}