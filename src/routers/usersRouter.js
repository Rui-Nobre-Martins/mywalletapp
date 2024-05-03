const router = require("express").Router();
const usersController = require("../controllers/usersController");
const isNumericId = require("../middleware/isNumericId");


router.get("/", usersController.getAllUsers);
router.get("/:id", isNumericId, usersController.getUser);
router.post("/", usersController.postUser);
router.put("/:id", isNumericId, usersController.putUser);
router.delete("/:id", isNumericId, usersController.deleteUser);



module.exports = router;