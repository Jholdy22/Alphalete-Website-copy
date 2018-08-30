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
            
            // getTest: (req, res, next) => {
                //     const db = req.app.get('db')
                //     const {gender=1, category=1, id=1} = req.queries 
                //     let g = gender === 1 ? null : gender;
                //     let c = category === 1 ? null : category;
                //     let i = id === 1 ? null : category;
                
                
                //     db.test_To_Get_All([c, g, i])
                //     .then( response => res.status 
                //     (200).send(response) ) 
                //     .catch(err => {
                    //         res.satus(500).send({
                        //             errorMessage:'NOT WORKING'})
                        //             console.log(err)
                        //     })
                        
                        
                        
                        
                        // }
                
                            
                    }