import UserHelper from '../model/UserHelper';

class UserController {

    get_all_user(req, res){
        res.send({message: "hello world"})
    }
    
    async create_user(req, res){
        console.log("************", req.body);
        let response = await UserHelper.create_user(req.body);
        console.log("hey", response);
        res.send({message: req.body} )
    }
}
export default new UserController();

