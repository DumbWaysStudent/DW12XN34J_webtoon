const express =require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 9000

const AuthController = require('./controllers/auth')

app.use(bodyParser.json())

app.group('/api/v1', (router)=>{
    router.post('/login', AuthController.login)
})

app.listen(port, () => console.log('Listening o Port ${9000}'))