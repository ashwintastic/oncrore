import user from '../services/controller/UserController';

module.exports = function(app) {
    app.route('/user')
        .get( user.get_all_user)
        .post( user.create_user)
};