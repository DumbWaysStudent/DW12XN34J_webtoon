const express =require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()

const port = 9000

const AuthController = require('./controllers/auth')
const UserController = require('./controllers/user')
const WebtoonController = require('./controllers/webtoons')
const EpisodeController = require('./controllers/episodes')
const EpisodePage = require('./controllers/page')

app.use(bodyParser.json())

app.group('/api/v1', (router)=>{
    router.post('/login', AuthController.login)

    router.post('/register', UserController.store)

    router.get('/webtoons', WebtoonController.index)
    router.get('/webtoons/favorite/', WebtoonController.showFavorite)
    router.get('/webtoons/title/:title', WebtoonController.showTitle)

    router.get('/webtoon/:id_webtoon/episodes', EpisodeController.index)

    router.get('/webtoon/:id_webtoon/episode/:id_episode', EpisodePage.getPages)
})

app.listen(port, () => console.log('Listening o Port ${9000}'))