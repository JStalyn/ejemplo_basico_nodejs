const producnto = require('./user');

function userID(app) {
    app.use('/yser', producnto)
}

module.exports = userID;