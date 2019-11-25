const model = require('../models/User');
const querystring = require('querystring'); 
class Controller {
    constructor(modelName) {
        this.create = this.create.bind(this);
        this.dashboard = this.dashboard.bind(this);
        this.getListing = this.getListing.bind(this);
        this.getList = this.getList.bind(this);
        this.save = this.save.bind(this);
        this.getModelObj = this.getModelObj.bind(this);
        this.resolve = this.resolve.bind(this);
        this.edit = this.edit.bind(this);
        this.modelName = modelName.charAt(0).toUpperCase() + modelName.slice(1);
        this.model = {};
    }
    
    create (req, res){
        this.getModelObj();
        var fieldsArray = this.model.customFieldList;
        const obj = {};
        res.render('common/add', { object: obj, fields: fieldsArray, model: this.modelName});   
    }
    
    dashboard (req, res) {
        res.render('dashboard');
    }
    
    getListing (req, res){
        this.getModelObj();
        var customList = this.model.customList;
        var response = [];
        for (var key in customList) {
            response.push({data : customList[key].as})
        }
        response.push({ data: 'Action' })
        res.render('common/list', { headers: response, model: this.modelName, header_string: JSON.stringify(response), message: req.query.message});
    }
    
    getList (req, res) {
        this.getModelObj();
        var customList = this.model.customList;
        const relations = this.model.relationList;
        const listArray = [];
        for (var key in customList) {
            listArray.push([key, customList[key].as])
        }
        const whereQuery = (this.model.extraWhere) ? this.model.extraWhere : {};
        this.model.findAll({
            include: relations,
            where: whereQuery
        }
        ).then((result)=>{
            this.resolve(result, res, customList);
        }).catch(console.error);
    }
    
    save (req, res){
        this.getModelObj();
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
            response[i]['Action'] = '<a href="/admin/edit/' + this.modelName.toLowerCase() +'/'+result[i].id+'"><i class="fa fa-pencil"></i></a>';
        }
        res.send({
            data: response
        });
    }
    
    getModelObj(){
        this.model = require('../models/' + this.modelName);
    }

    edit(req, res){
        this.getModelObj();
        var fieldsArray = this.model.customFieldList;
        this.model.findAll({
            limit: 1,
            where: {
                id: req.params.id
            }
        }).then((result) => {
            const obj = result;
            res.render('common/add', { object: obj, fields: fieldsArray, model: this.modelName }); 
            console.log(result);
        }).catch(console.error);
        
    }
}
module.exports = Controller;