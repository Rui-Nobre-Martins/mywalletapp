const router = require("express").Router();
const walletController = require("../controllers/walletController");


router.get("/", walletController.getAllWallet);
router.get("/:id", walletController.getWalletById);
router.post("/", walletController.postWallet);
router.put("/:id", walletController.putWallet);

module.exports = router;