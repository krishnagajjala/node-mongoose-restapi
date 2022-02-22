// module to define schema for contact model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const contactm = new Schema({
    firstName : { type: String   },
	lastName : { type: String   },
    phoneNumber : { type: String   },
    email : { type: String   },
})

module.exports = mongoose.model('Contact', contactm)