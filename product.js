const { Router } = require("express");
const { userMiddleware } = require("../middleware/user");
const { purchaseModel, productModel } = require("../db")
const productRouter = Router();

productRouter.post("/purchase", userMiddleware, async function(req, res) {
    const userId = req.userId;
    const productId = req.body.productId;

    // should check that the user has actually paid the price
    await purchaseModel.create({
        userId,
        productId
    })

    res.json({
        message: "You have successfully bought the product"
    })
})

productRouter.get("/preview", async function(req, res) {
    
    const product = await productModel.find({});

    res.json({
        product
    })
})

module.exports = {
    productRouter: productRouter
}