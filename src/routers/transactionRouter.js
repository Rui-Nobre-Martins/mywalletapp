const router = require("express").Router();
const transactionController = require("../controllers/transactionController");
const isNumericId = require("../middleware/isNumericId");
const secretController = require("../controllers/secretController");

router.get("/secret", secretController.getSecret);


router.get("/", transactionController.getAllTransactions);
router.get("/:user_id", transactionController.getAllTransactionByUserId);
router.post("/", transactionController.postTransactions);
router.put("/:id", isNumericId, transactionController.putTransactions);
router.delete("/:id", isNumericId, transactionController.deleteTransactions);

module.exports = router;