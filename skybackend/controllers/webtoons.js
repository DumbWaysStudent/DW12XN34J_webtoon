const models = require('../models')
const Webtoon = models.webtoon
const User = models.user

exports.index = (req, res) => {
    Webtoon.findAll().then(item=>res.send(item));
}


exports.showFavorite = (req, res)=>{
    Webtoon.findAll({
        where:{is_favorite: true},
    }).then(result=>res.send(result))
}


exports.showTitle = (req, res)=>{
    Webtoon.findAll({where: {title: req.params.title}}).then(result=>res.send(result))
}

exports.showMyToon = (req, res)=>{
    Webtoon.findAll({
        where:{
            created_by: req.params.user_id
        },
        include:[{
            model: User,
            as:'createdBy',
            attributes:['name']
        }]
    }).then(result=>res.send(result));
}


exports.createToon = (req, res) =>{
    const { title, genre, is_favorite, image, created_by } = req.body
    Webtoon.create({
        title,
        genre,
        is_favorite,
        image,
        created_by
    }).then(result => res.send(result))
    .catch((result) => {
        res.send({
            error: true,
            message: 'Gagal'
        })
    })
}