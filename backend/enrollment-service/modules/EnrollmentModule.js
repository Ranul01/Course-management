const mongoose =  require('mongoose');

const getCurrentDateWithoutTime = () => {
    const currentDate = new Date();
    currentDate.setHours(0,0,0,0);
    return currentDate
}

const Schema = mongoose.Schema;



const enrollmentSchema = new Schema({

    name : {
        type : String,
        required: true
    },

    code : {
        type : String,
        required: true
    },

    email : {
        type : String,
        required: true
    },

    date : {
        type : Date,
        default: getCurrentDateWithoutTime,
    },


    slip : {
        type : String,
        required: true
    },

})

const Enrollment = mongoose.model("Enrollment",enrollmentSchema);
module.exports = Enrollment;