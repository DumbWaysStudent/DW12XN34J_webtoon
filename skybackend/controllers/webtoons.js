const models = require('../models')
const Webtoon = models.webtoon

exports.index = (req, res) => {
    Webtoon.findAll().then(item=>res.send(item));
}

exports.showFavorite = (req, res)=>{
    Webtoon.findAll({where: {is_favorite: 1}}).then(result=> res.send(result))
}

exports.showTitle = (req, res)=>{
    Webtoon.findAll({where: {title: req.params.title}}).then(result=>res.send(result))
}