module.exports = {

    getClothing: (req, res, next) => {
        const db = req.app.get('db')
        const {gender} = req.params

        db.get_clothing([gender])
        .then( response => res.status
        (200).send(response) )
            .catch(err => {
                res.status(500).send({
                    errorMessage: "Something went wrong!"})
                    console.log(err)
                
        })
    },
    getSpecificClothing: (req,res,next) => {
        const db = req.app.get('db')
        const {gender, category} = req.params
        
        db.get_specific([gender, category])
        .then( response => res.status
            (200).send(response) )
            .catch(err => {
                res.status(500).send({
                    errorMessage:'Somethin went wrong'})
                    console.log(err)
                })
            },

     getPremiumClothing: (req,res, next) => {
        const db = req.app.get('db')
        const {sub_category} = req.params
        
        db.get_premium([sub_category])
        .then( response => res.status
            (200).send(response) )
            .catch(err => {
                res.status(500).send({
                    errorMessage: `Something went wrong!`})
                    console.log(err)
                })
            },
            addToCart: (req,res,next) => {
                const db = req.app.get('db');
                const {product_id} = req.params;
                const {user_id} = req.session.user;

                db.add_to_cart([product_id, user_id, 1])
                    .then((response) => res.status(200).send(response))
                    .catch(err => {
                        res.status(500).send({errorMessage: "Something went wrong!"})
                        console.log(err);
                    })
            },
}