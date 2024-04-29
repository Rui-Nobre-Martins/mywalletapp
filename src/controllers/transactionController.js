const transactionDB = require("../db/transactionApp");

async function getAllTransactions(req, res) {

    try{
        const totalTransactions = await transactionDB.getTransactionCount();
        const transaction = await transactionDB.getAllTransactions();
        res.json({
            totalTransactions,
            transaction
            });
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function getTransactionById(req, res) {
    const { id } = req.params;

    try{
        const transaction = await transactionDB.getTransactionById(id);
        if(transaction) {
            res.json(transaction);
        } else {
            res.status(404).send("Transaction not found");
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function postTransactions(req, res) {
    const { user_id, amount, description } = req.body;

    try {
        const result = await transactionDB.insertTransaction( user_id, amount, description );
        const transaction  = await transactionDB.getTransactionById(result.insertId);
        res.json(transaction);
    } catch(error) {
        res.status(500).send(error.message);
    } 
}

async function putTransactions(req, res) {
    const { id } = req.params;
    const { user_id, amount, description } = req.body;

    try {
        const result = await transactionDB.updatetransaction( id, user_id, amount, description );
        if(result.affectedRows === 1) {
            const putTransactions = await transactionDB.getTransactionById(id);
            res.json(putTransactions);
        } else {
            throw new Error("Oh no, go to work and make money!!!");
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function deleteTransactions(req, res) {
    const { id } = req.params;

    try {
        const result = await transactionDB.deleteUser(id);
        if (result.affectedRows === 1) {
            res.send("Transaction deleted"); 
        } else {
            res.status(404).send("Transaction not found");
        }
     } catch(error) {
         res.status(500).send(error.message);
    }
}



module.exports = {
    getAllTransactions,
    getTransactionById,
    postTransactions,
    putTransactions,
    deleteTransactions

}