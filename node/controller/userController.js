const respGenerator = require('../response/jsonresponse');
const userHelper = require('../helper/user');

class UserController{

    async viewUser(req,res){
        try{
             const user = await userHelper.viewUser();
             console.log(user);
              respGenerator.sendResponse(res,{message:"list of all users",user:user})
        }
        catch(err)
        {   
            console.log('error '+ err )
            respGenerator.sendError(res,err);
        }
    }
     async insertUser(req,res){
        try{
            const user = await userHelper.insertUser(req.body);
            console.log(user);
            respGenerator.sendResponse(res,{message:"user insert Successfully",user:user});
        
        }catch(err)
        {
        respGenerator.sendError(res,err);
        }
    }
}
module.exports = new UserController();