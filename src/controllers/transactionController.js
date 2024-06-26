const transactionDB = require("../db/transactionApp");
const paginationService = require("../services/paginationService");


async function getAllTransactions(req, res) {

    const tableNameParam = `transactions`;

    let { limit, offset } = req.query;
    limit = limit && !isNaN(parseInt(limit)) ? parseInt(limit) : 5;
    offset = offset && !isNaN(parseInt(offset)) ? parseInt(offset) : 0;

    try{
        const total = await transactionDB.getTransactionCount();
        const transaction = await transactionDB.getAllTransactions();

        const paginationTransaction = paginationService.pagination(limit, offset, total, tableNameParam);

        res.json({
            ...paginationTransaction,
            countAllTransactions: total,
            results: transaction
            });
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function getAllTransactionByUserId(req, res) {
    const { user_id } = req.params;

    try{
        const transactions = await transactionDB.getAllTransactionByUserId(user_id);
        if(!transactions || transactions.length === 0) {  
            return res.status(404).send("Transaction not found");
        }

        let totalCredit = 0;
        let totalDebit = 0;

        transactions.forEach(transactions => {
            if(transactions.type === 'positive') {
                totalCredit += transactions.amount;
            } else (transactions.type === 'negative')
                totalDebit -= transactions.amount; 
        });

        let totalBalance = totalCredit - totalDebit;

        const result = {
            totalBalance,
            transactions
        };

        res.json(result);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function postTransactions(req, res) {
    const { user_id } = req.params
    const { amount, description } = req.body;

    try {
        if (!isNaN(amount)) {
            const result = await transactionDB.insertTransaction( user_id, amount, description );
            console.log(result)
            const AddTransaction  = await transactionDB.getTransactionById(result.insertId);
            res.json(AddTransaction);
            console.log(AddTransaction);
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
            throw new Error("Oh no, error to updated!!!");
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