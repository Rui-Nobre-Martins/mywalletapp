const router = require("express").Router();
const walletController = require("../controllers/walletController");
const isNumericId = require("../middleware/isNumericId");

router.get("/", walletController.getAllWallet);
router.get("/:id", isNumericId, walletController.getWalletById);
router.post("/", walletController.postWallet);
router.put("/:id", isNumericId, walletController.putWallet);

module.exports = router;