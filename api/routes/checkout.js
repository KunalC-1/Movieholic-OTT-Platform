const router = require("express").Router();

router.post("/", async (req, res) => {
    console.log("Request:", req.body);
    let error;
    let status;
    try {
        const { product, token } = req.body;

        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id,
        });

        const payment = await stripe.paymentIntents.create({
            amount: product.price * 100,
            currency: "USD",
            description: `Purchased the ${product.name}`,
            customer: customer.id,
            confirmation_method: "automatic",
            confirm: true,
        });

        console.log("Charge:", { payment });
        status = "success";
    } catch (error) {
        console.error("Error:", error);
        status = "failure";
    }

    res.json({ error, status });
});
module.exports = router;
