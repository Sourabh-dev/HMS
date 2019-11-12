var modelName = ''
let model = null
let customList = [];
exports.create = function (req, res){
    var model = req.params.model;
}

exports.dashboard = function (req, res) {
    res.render('dashboard');
}

exports.getListing = function (req, res){
    model = getModelObject(req.params.model);
    customList = model.customList;
    response = [];
    for (var key in customList) {
        response.push({data : model.customList[key].as})
    }
    res.render('common/list', { headers: response, model: req.params.model, header_string: JSON.stringify(response) });
}

exports.getList = function (req, res) {
    model = getModelObject(req.params.model);
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
    res.send({
        data: response
    });
}

function getModelObject(modelName){
    modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
    model = require('../models/' + modelName)
    return model
}