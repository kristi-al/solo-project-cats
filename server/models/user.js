const db = require('./');


const Schema = db.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true
    }

})

const User = db.model('user', userSchema);

module.exports = User;