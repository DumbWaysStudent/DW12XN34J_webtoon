const models = require('../models')
const Page = models.page

exports.getPages = (req, res)=>{
    const webtoonId = req.params.id_webtoon
    const episodeId = req.params.id_episode

    Page.findAll({
        where: { id_episode: episodeId, id_webtoon: webtoonId },
        attributes: { exclude:["id", "id_episode", "id_webtoon"] }
    }).then(data => {
        res.send(data);
    });
};