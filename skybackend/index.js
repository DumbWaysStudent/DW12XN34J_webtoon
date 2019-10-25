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

    router.get('/users', UserController.allUser)

    // // Webtoon
    router.get('/webtoons', WebtoonController.index)
    router.get('/webtoons/:title', WebtoonController.showTitle)
    router.get('/user/:user_id/webtoons', authenticated, WebtoonController.showMyWebtoon)
    router.post('/user/:user_id/webtoon', authenticated, WebtoonController.createToon)
    router.put('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonController.updateToon)
    router.delete('/user/:user_id/webtoon/:webtoon_id', authenticated, WebtoonController.deleteToon)

    // //Episode
    router.get('/webtoon/:id_webtoon/episodes', EpisodeController.index)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode', authenticated, EpisodeController.createMyEpisode)
    router.get('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/images', authenticated, EpisodeController.getEpisode)
    router.put('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodeController.updateEpisode)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id', authenticated, EpisodeController.deleteEpisode)

    //Page Episode
    router.get('/webtoon/:id_webtoon/episode/:id_episode', EpisodePage.getPages)
    router.post('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image', authenticated, EpisodePage.createPage)
    router.delete('/user/:user_id/webtoon/:webtoon_id/episode/:episode_id/image/:image_id', authenticated, EpisodePage.deletePage)

    // //Menampilkan seluruh webtoon favorite cara menggunakan  >> http://localhost:9000/api/v1/webtoon/1?is_favorite=true
    router.get('/webtoon/:id', authenticated, FavoriteController.getFav)

})

app.listen(port, () => console.log('Listening o Port ${9000}'))