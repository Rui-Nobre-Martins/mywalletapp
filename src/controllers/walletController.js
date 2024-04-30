const walletDB = require("../db/walletApp");

async function getAllWallet(req, res) {

    try{
        const wallet = await walletDB.getAllWallet();
        console.log(wallet);
        res.json(wallet);
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function getWalletById(req, res) {
    const { id } = req.params;

    try{
        const wallet = await walletDB.getWalletById(id);
        if(wallet) {
            console.log(wallet)
            res.json(wallet);
        } else {
            res.status(404).send("Wallet not found");
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

async function postWallet(req, res) {
    const {user_id,  currency } = req.body;

    try {
        const result = await walletDB.insertWallet(user_id,  currency);
        const wallet = await walletDB.getWalletById(result.insertId);
        res.json(wallet);
    } catch(error) {
        res.status(500).send(error.message);
    } 
}

async function putWallet(req, res) {
    const { id } = req.params;
    const { currency } = req.body;

    try {
        const result = await walletDB.updateCurrencyWallet(id, currency);
        if(result.affectedRows === 1) {
            const wallet = await walletDB.getWalletById(id);
            res.json(wallet);
        } else {
            throw new Error("No money no funny");
        }
    } catch(error) {
        res.status(500).send(error.message);
    }
}

module.exports = {
    getAllWallet,
    getWalletById,
    postWallet,
    putWallet,
}