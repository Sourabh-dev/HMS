var list = {
    status: true,
    data: []
};

exports.create = function (req, res){
    var model = req.params.model;
}

exports.getList = function (req, res) {
    var modelName = req.params.model;
    var modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    const model = require('../models/'+modelName)
    const relations = model.relationList;
    const listArray = [];
    for (var key in model.customList) {
        listArray.push([key, model.customList[key].as])
    }
    model.findAll({
        attributes: listArray,
        include: relations
    },
    ).then((result)=>{
        res.send(result)
    }).catch(e => {
        console.log(e)
    })
    
}