const Controller = require('./Controller');
const Booking = require('../models/Booking');
class BookingController extends Controller {
    constructor() {
        super('Booking');
    }
    resolve(result, res, customList) {
        var response = [];
        for (var i = 0; i < result.length; i++) {
            response[i] = {}
            for (var ckey in customList) {
                var index = customList[ckey].as;
                response[i][index] = ((typeof (result[i][ckey]) == "object") && result[i][ckey] != null) ? result[i][ckey].email : result[i][ckey]
                console.log(ckey);
            }
            response[i]['Action'] = '';
            
            if (response[i]['Status'] == 'BOOKED') {
                // console.log('here');
                response[i]['Action'] = '<a class="waves-effect waves-light blue btn-small" href="/admin/paid/booking/' + result[i].id + '"><i class="fa fa-check"></i></a>';
                response[i]['Action'] += '<a href=""/admin/cancelled/booking/' + result[i].id + '"" class="waves-effect waves-light red btn-small del" data-idx="' + result[i].id + '"><i class="fa fa-close"></i></a>';
            }}
        res.send({
            data: response
        });
    }
    changeStatus (req, res){
        var status = req.params.status;
        status = String.prototype.toUpperCase.call(status)
        Booking.findByPk(req.params.id).then(instance => {
            instance.type = status
            instance.save()
        }).then(instance => {
            res.redirect('/admin/listing/booking?message=Status Changed')
        }).catch(console.error)
    }
}
module.exports = BookingController;