const router = require("express").Router();
const transactionController = require("../controllers/transactionController");


router.get("/", transactionController.getAllTransactions);
router.get("/:user_id", transactionController.getTransactionById);
router.post("/", transactionController.postTransactions);
router.put("/:id", transactionController.putTransactions);
router.delete("/:id", transactionController.deleteTransactions);

module.exports = router;