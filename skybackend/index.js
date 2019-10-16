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
const FavoriteController = require('./controllers/favorite')

const { authenticated } = require('./middleware')

app.use(bodyParser.json())

app.group('/api/v1', (router)=>{
    router.post('/login', AuthController.login)

    router.post('/register', UserController.store)

    router.get('/webtoons', WebtoonController.index)
    
    router.get('/webtoons/:title', WebtoonController.showTitle)

    router.get('/webtoon/:id_webtoon/episodes', EpisodeController.index)
    router.get('/user/:user_id/webtoon/:id_webtoon/episodes', authenticated, EpisodeController.index)

    router.get('/webtoon/:id_webtoon/episode/:id_episode', EpisodePage.getPages)


    // router.get('/webtoon/is_favorite', authenticated, WebtoonController.showFavorite)
    router.get('/webtoon/:id', authenticated, FavoriteController.getFav)

    router.get('/user/:user_id/webtoons', authenticated, WebtoonController.showMyToon)

    router.post('/user/:user_id/webtoon', authenticated, WebtoonController.createToon)   
})

app.listen(port, () => console.log('Listening o Port ${9000}'))