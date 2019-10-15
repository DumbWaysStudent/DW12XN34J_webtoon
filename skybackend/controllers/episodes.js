const models = require('../models')
const Episode = models.episode

exports.index = (req, res)=>{
    Episode.findAll({
        where:{
            id_webtoon: req.params.id_webtoon,
        },
    }).then(result=> res.send(result));
};