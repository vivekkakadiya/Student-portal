const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const student = new Schema({
    id: {
        type: String
    },
    Email: {
        type: String

        
    },
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },


    Address: {
        type: String
    },
    City: {
        type: String
    },
    Number: {
        type: String
    },
    Country: {
        type: String
    }

})

student.methods.AddInfo2 = async function (body) {

    try {
        console.log(body);
        this.Address = body.Address;
        this.City = body.City;
        this.Number = body.Number;
        this.Country = body.Country;

        await this.save();


    } catch (err) {

    }

}
student.methods.AddInfo = async function (body) {

    try {
        console.log(body);
        this.id = body.id;
        this.Email = body.Email;
        this.FirstName = body.FirstName;
        this.LastName = this.LastName;

        await this.save();


    } catch (err) {

    }

}
const Student = mongoose.model('student', student)



module.exports = Student;