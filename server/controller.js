module.exports = {
    getClothing: (req, res, next) => {
        const db = req.app.get('db')

        db.get_clothing()
        .then( response => res.status
        (200).send(response) )
            .catch(err => {
                res.status(500).send({
                    errorMessage: "No no no, Superman not here"})
                    console.log(err)
                
        })
    },


}