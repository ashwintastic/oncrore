class UserController {

    get_all_user(req, res){
        res.send({message: "hello world"})
    }
    create_user(req, res){
        console.log(typeof req.body)
        res.send({message: req.body} )
    }
}
export default new UserController();

