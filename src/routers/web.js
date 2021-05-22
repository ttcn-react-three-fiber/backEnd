const express = require('express');
const router =express.Router();

//controller
const testController = require('../apps/controllers/test')
const ProductController = require("../apps/controllers/product");


//middlewares
const uploadMiddlewares = require("../apps/middlewares/upload");

router.get("/test",testController.test1)

router.get("/upload",ProductController.create);
router.post("/store",uploadMiddlewares.single("glb_upload"),ProductController.store);

module.exports = router;