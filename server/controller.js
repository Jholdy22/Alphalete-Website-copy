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
                const dbInstance = req.app.get('db');
                dbInstance.add_to_cart([req.session.user.cart_id, req.body.id, req.body.quantity])
                    .then(() => res.sendStatus(200))
                    .catch(err => {
                        res.status(500).send({errorMessage: "Something went wrong!"})
                        console.log(err);
                    })
            },
}