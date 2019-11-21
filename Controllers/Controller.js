const model = require('../models/User');
const querystring = require('querystring'); 
class Controller {
    constructor(modelName) {
        this.create = this.create.bind(this);
        this.dashboard = this.dashboard.bind(this);
        this.getListing = this.getListing.bind(this);
        this.getList = this.getList.bind(this);
        this.save = this.save.bind(this);
        this.resolve = this.resolve.bind(this);
        this.modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
        this.model = require('../models/' + modelName)
    }
    
    create (req, res){
        fieldsArray = this.model.customFieldList;
        const obj = {};
        res.render('common/add', { object: obj, fields: fieldsArray, model: this.modelName});   
    }
    
    dashboard (req, res) {
        res.render('dashboard');
    }
    
    getListing (req, res){
        var model = this.getModelObject();
        var customList = model.customList;
        var response = [];
        for (var key in customList) {
            response.push({data : model.customList[key].as})
        }
        res.render('common/list', { headers: response, model: this.modelName, header_string: JSON.stringify(response), message: req.query.message});
    }
    
    getList (req, res) {
        var model = this.getModelObject();
        var customList = model.customList;
        const relations = model.relationList;
        const listArray = [];
        for (var key in model.customList) {
            listArray.push([key, model.customList[key].as])
        }
        const whereQuery = (model.extraWhere) ? model.extraWhere : {};
        model.findAll({
            include: relations,
            where: whereQuery
        }
        ).then((result)=>{
            this.resolve(result, res, customList);
        }).catch(console.error);
    }
    
    save (req, res){
        model = this.getModelObject();
        obj = req.body;
        model.create(obj)
            .then(newUser => {
                res.redirect('/admin/listing/'+this.modelName+'?message=Data Inserted')
              })
            .catch(console.error);
    }
    
    resolve(result, res, customList){
        var response = [];
        for (var i=0; i<result.length; i++) {
            response[i] = {}
            for(var ckey in customList){
                var index = customList[ckey].as;
                response[i][index] = ((typeof (result[i][ckey]) == "object") && result[i][ckey]!= null) ? result[i][ckey].name : result[i][ckey]
            }
        }
        res.send({
            data: response
        });
    }
    
}
module.exports = Controller;