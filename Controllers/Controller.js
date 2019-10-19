var modelName = ''
let model = null
let customList = [];
exports.create = function (req, res){
    var model = req.params.model;
}

exports.getList = function (req, res) {
    modelName = req.params.model;
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    model = require('../models/'+modelName)
    customList = model.customList;
    const relations = model.relationList;
    const listArray = [];
    for (var key in model.customList) {
        listArray.push([key, model.customList[key].as])
    }
    model.findAll({
        include: relations
    }
    ).then((result)=>{
        resolve(result, res);
    }).catch(console.error);
}

function resolve(result, res){
    response = [];
    for (var i=0; i<result.length; i++) {
        response[i] = {}
        for(var ckey in customList){
            var index = customList[ckey].as;
            response[i][index] = (typeof (result[i][ckey]) == "object") ? result[i][ckey].name : result[i][ckey]
        }
    }
    res.send(response);
}