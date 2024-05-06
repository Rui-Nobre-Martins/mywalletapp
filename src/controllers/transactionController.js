const transactionDB = require("../db/transactionApp");

async function getAllTransactions(req, res) {

    let { limit = 5, offset = 0 } = req.query;
    limit = parseInt(limit);
    offset = parseInt(offset);


    try{
        const totalTransactions = await transactionDB.getTransactionCount();
        const transaction = await transactionDB.getAllTransactions(limit, offset);
        res.json({
            next: `http://localhost:3000/transactions/?limit=${limit}&offset=${offset+limit}`,
            previous: ``,
            countAllTransactions: totalTransactions,
            results: transaction
            });
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function getAllTransactionByUserId(req, res) {
    const { user_id } = req.params;

    try{
        const transaction = await transactionDB.getAllTransactionByUserId(user_id);
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
        if (!isNaN(amount)) {
            const result = await transactionDB.insertTransaction( user_id, amount, description ); 
            const transaction  = await transactionDB.getTransactionById(result.insertId);
            res.json(transaction);
        } else {
            throw new Error("Amount must be a number");
        }
    } catch(error) {
        res.status(500).send(error.message);
    } 
}

async function putTransactions(req, res) {
    const { id } = req.params;
    const { amount, description } = req.body;

    try {
        const result = await transactionDB.updatetransaction( id, amount, description );
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
        const result = await transactionDB.deleteTransaction(id);
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
    getAllTransactionByUserId,
    postTransactions,
    putTransactions,
    deleteTransactions

}