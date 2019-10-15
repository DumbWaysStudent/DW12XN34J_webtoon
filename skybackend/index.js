const express =require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 9000

const AuthController = require('./controllers/auth')
const UserController = require('./controllers/user')

app.use(bodyParser.json())

app.group('/api/v1', (router)=>{
    router.post('/login', AuthController.login)
    router.post('/register', UserController.store)
})

app.listen(port, () => console.log('Listening o Port ${9000}'))