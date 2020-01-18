const express = require("express");
const router = express.Router();

const productController = require("../controllers/product.controller");

router.post("/create", productController.create);
router.get("/:id", productController.getById);
router.put("/:id/update", productController.update);
router.delete("/:id/delete", productController.delete);

module.exports = router;
