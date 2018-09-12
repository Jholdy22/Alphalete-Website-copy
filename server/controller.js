module.exports = {

    getClothing: (req, res, next) => {
        const db = req.app.get('db')
        const { gender } = req.params

        db.get_clothing([gender])
            .then(response => res.status
                (200).send(response))
            .catch(err => {
                res.status(500).send({
                    errorMessage: "Something went wrong!"
                })
                console.log(err)

            })
    },
    getSpecificClothing: (req, res, next) => {
        const db = req.app.get('db')
        const { gender, category } = req.params

        db.get_specific([gender, category])
            .then(response => res.status
                (200).send(response))
            .catch(err => {
                res.status(500).send({
                    errorMessage: 'Somethin went wrong'
                })
                console.log(err)
            })
    },

    getPremiumClothing: (req, res, next) => {
        const db = req.app.get('db')
        const { sub_category } = req.params

        db.get_premium([sub_category])
            .then(response => res.status
                (200).send(response))
            .catch(err => {
                res.status(500).send({
                    errorMessage: `Something went wrong!`
                })
                console.log(err)
            })
    },
    addToCart: (req, res, next) => {
        const db = req.app.get('db');
        const { product_id } = req.params;
        const { id } = req.session.user;


        db.add_to_cart([product_id, id, 1])
            .then((response) => res.status(200).send(response))
            .catch(err => {
                res.status(500).send({ errorMessage: "Something went wrong!" })
                console.log(err);
            })
    },
    displayAll: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.join_all([req.session.user.id])
            .then(all => {
                 res.status(200).send(all)})
            .catch(err => {
                res.status(500).send({errorMessage: "Something went wrong!"})
                console.log(err)
            })
    },
    deleteProduct: (req,res,next) => {
        const dbInstance = req.app.get('db');

        dbInstance.delete_product([req.params.cart_id])
            .then(all => {
                res.status(200).send(all)})
                .catch(err => {
                    res.status(500).send({errorMessage: "Something went wrong!"})
                    console.log(err)
            })
    }
}