const mongoose =  require('mongoose');

const Schema = mongoose.Schema;

const PaymentSchema = new Schema({

    studentName : {
        type :  String,
        required: true
    },
    CourseCode : {
        type : String,
        required: true
    },
    reqdate : {
        type : String,
        required: true
    },

    cnumber : {
        type : Number,
        required: true
    },
    
    reqstatus : {
        type : String,
        required: true
    }

})

const payment = mongoose.model("Payment",PaymentSchema);
module.exports = payment;