require('dotenv').config();
const express = require('express');
const session = require('express-session');
const axios = require('axios');
const massive = require('massive');
const app = express();
const controller = require('./controller')

const {
    SERVER_PORT,
    CONNECTION_STRING,
    SECRET,
    REACT_APP_CLIENT_ID,
    REACT_APP_DOMAIN,
    CLIENT_SECRET,
    NODE_ENV
} = process.env




massive(CONNECTION_STRING).then(db => {
    app.set('db', db);
    listener()
})

app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: true
}))


// app.get('/api/logout', controller.logout);
app.get('/api/all-clothing/:gender/', controller.getClothing)
app.get('/api/clothing/:gender/:category', controller.getSpecificClothing)
app.get('/api/clothing/:sub_category', controller.getPremiumClothing)
app.post('/api/add-to-cart', controller.addToCart);



app.get('auth/callback', async (req, res) => {
    
    const payload = {
        client_id: REACT_APP_CLIENT_ID,
        client_secret: CLIENT_SECRET,
        code: req.query.code,
        grant_tyooe: 'authorization_code',
        redirect_uri: `http://${req.headers.host}/auth/callback`
    }
    
    let resWithToken = await axios.post(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    
    let resWithUserData = await axios.get(`https://${REACT_APP_DOMAIN}/userinfo?access_token=${resWithToken.data.access_token}`)
    
    let {
        email,
        name,
        picture,
        sub
    } = resWithUserData;

    let db = req.app.get('db');
    let foundUser = await db.find_user([sub])
    if (founderUser[0]) {
        req.session.user = foundUser[0];
        res.redirect('/#/account')
    } else {
        let createdUser = await db.create_user([name, email, picture, sub])
        req.session.user = createdUser[0];
        res.redirect('/#/account')
    }
})

function envCheck(req, res, next) {
    if(NODE_ENV === 'dev') {
        req.app.get('db').get_user_by_id().then(userWithIdOne => {
            res.session.user = userWithIdOne[0]
            next();
        })
    } else {
        next()
    }
}

app.get('/api/user-data', envCheck, (req, res) => {
    if (req.session.user) {
        res.status(200).send(req.session.user);
    } else {
        res.status(401).send("Not a chance")
    }
})
app.get('/auth/logout', (req, res) => {
    req.session.destroy();
    res.redirect('http://localhost:3000/#/')
  })

function listener(){
    app.listen(SERVER_PORT, () => {
        console.log(`listening on port: ${SERVER_PORT}`)
    })
}
