import User from '../schema/UserSchema';

class UserHelper {

    async create_user(userInfo) {
        console.log("90909090", userInfo)
        let user = new User(userInfo);
        console.log("90909090", user)
        return user.save().then( function(usr){
            return usr;
        })
            .catch(function(e){
                return e
            })

    }
}

export default new UserHelper()