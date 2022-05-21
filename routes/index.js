const userApi = require('./user');

function usuarioNombre(app) {
    app.use('/user',userApi )
}

module.exports = usuarioNombre;