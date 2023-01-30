const router = require("express").Router()
let Product = require("../models/product.model")

router.route("/").get((req, res) => {
    Product.find()
        .then(exercises => res.json(exercises))
        // .then(exercises => res.send(JSON.stringify(exercises)))
        .catch(err => res.status(400).json("Error : " + err))
})

router.route("/add").post(
    (req, res) => {
        const product_name = req.body.product_name
        const selling_price = Number(req.body.selling_price)
        const date_of_entry = Date.parse(req.body.date_of_entry)
        const date_of_exit = Date.parse(req.body.date_of_exit)
        const date_of_expiry = Date.parse(req.body.date_of_expiry)
        const quantity = Number(req.body.quantity)
        const cost_price = Number(req.body.cost_price)

        const newProduct = new Product({
            product_name,
            selling_price,
            date_of_entry,
            date_of_exit,
            date_of_expiry,
            quantity,
            cost_price
        })

        newProduct.save()
            .then(() => res.json("Exercise Added!!!"))
            .catch(err => res.status(400).json("Error : " + err))
    }
)

router.route('/:id').get((req, res) => {
    Product.findById(req.params.id)
        .then(product => res.json(product))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Product.findByIdAndDelete(req.params.id)
        .then(() => res.json('Product deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Product.findById(req.params.id)
        .then(product => {
            product.username = req.body.username;
            product.description = req.body.description;
            product.duration = Number(req.body.duration);
            product.date = Date.parse(req.body.date);

            product.product_name = req.body.product_name;
            product.selling_price = Number(req.body.selling_price)
            product.date_of_entry = Date.parse(req.body.date_of_entry)
            product.date_of_exit = Date.parse(req.body.date_of_exit)
            product.date_of_expiry = Date.parse(req.body.date_of_expiry)

            product.save()
                .then(() => res.json('Product updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router