const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.user
const Webtoon = models.webtoon

exports.store = (req, res) =>{
    const token = jwt.sign({ email: req.body.email}, 'my-secret-key')
    const email = req.body.email

    User.findOrCreate({
        where: {email: req.body.email},
        defaults:{
            password: req.body.password,
            name: req.body.name
        }
    }).then( ([user, created]) => {
        console.log(user.get
            ({ plain: true})
        )
        if(created) {
            res.send({
                message: 'success',
                email,
                token
            })
        }else{
            res.send({
                message: "Email yang anda masukkan sudah digunakan"
            })
        }
    })
}

exports.show = (req, res)=>{
    const { user_id } = req.params
    console.log(user_id)

    User.findAll({
        where: { id: user_id },
        include:[{
            model: Webtoon,
            as: 'webtoonid'
        }]
    }).then(result=>
        res.send(result)
    )
}