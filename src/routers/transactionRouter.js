const router = require("express").Router();
const transactionController = require("../controllers/transactionController");
const isNumericId = require("../middleware/isNumericId");


router.get("/", transactionController.getAllTransactions);
router.get("/:user_id", isNumericId, transactionController.getTransactionById);
router.post("/", transactionController.postTransactions);
router.put("/:id", isNumericId, transactionController.putTransactions);
router.delete("/:id", isNumericId, transactionController.deleteTransactions);

module.exports = router;