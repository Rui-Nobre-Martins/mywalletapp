const router = require("express").Router();
const walletController = require("../controllers/walletController");


router.get("/wallet", walletController.getAllWallet);
router.get("/wallet/:id", walletController.getWalletById);
router.post("/wallet", walletController.postWallet);
router.put("/wallet/:id", walletController.putWallet);

module.exports = router;