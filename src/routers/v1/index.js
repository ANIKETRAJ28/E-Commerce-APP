const express = require("express");
const userController = require("../../controllers/user-controller");

const router = express.Router();

router.post("/users", userController.create);
router.get("/users/:id", userController.get);
router.get("/users", userController.getAll);
router.delete("/users/id", userController.destroy);

module.exports = router;