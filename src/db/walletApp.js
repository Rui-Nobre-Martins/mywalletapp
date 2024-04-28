const connection = require("../db/appConnection");

async function getAllWallet() {

    try {
        const [result] = await connection.promise().query(`SELECT * FROM wallet`);

        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong!");
    }
}

async function getWalletById(id) {
    const params = [id];

    try {
        const [result] = await connection.promise().query(`SELECT * FROM wallet WHERE id = ?`, params);

        return result[0];
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong");
    }
}

async function insertWallet(currency) {
    const params = [ currency ];

    try {
        const [result] = await connection.promise().query(`INSERT INTO from (currency) VALUES( ? )`, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Insert a user!");
    }
}

async function updateCurrencyWallet(id, currency) {
    const params = [currency, id]; 
    
    try {
        const[result] = await connection.promise().query(`UPDATE wallet SET currency = ? WHERE id = ? `, params);
        return result;
    } catch(error) {
        console.log(error);
        throw new Error("Something went wrong while trying to Update a currency!");
    }
}


module.exports = {
    getAllWallet,
    getWalletById,
    insertWallet,
    updateCurrencyWallet,
}