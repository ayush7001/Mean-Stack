const respGenerator = require('../response/jsonResponse');
const adminHelper = require('../helper/admin');
 class AdminController{

   async insertAdmin(req,res){
    try{
      if(await adminHelper.checkAdmin(req.body,null))
      {
        throw new Error(108);
      }
      let data =  await adminHelper.insertAdmin(req.body)
      respGenerator.sendResponse(res,{message:"Inserted Succeffully",Admin:data})
    }
    catch(err){
      respGenerator.sendError(res,{message:108})
    }
  }
  async getAdmin(req,res)
  {
    var admin;
      try{
        if(req.params.id){
         admin =  await adminHelper.viewAdmin(req.params.id);
        if(!admin)
          {
            throw new Error(107);
          }
        }
        else {
        admin =  await adminHelper.viewAdmin();
        }

      respGenerator.sendResponse(res,{message:"See list of user",admin:admin});
      }
      catch(err)
      {
        console.error(err);
          respGenerator.sendError(res,err);
      }

  }
  async updateAdmin(req,res)
  {
    try{
      console.log(req.params.id);
      if(!await adminHelper.checkAdmin(null,req.params.id))
      {
        throw new Error(107); 
      }
      let admin = await adminHelper.updateAdmin(req.params.id,req.body);
      respGenerator.sendResponse(res,{message:"User Updated Successfully ", admin: admin })
      
    }catch(err)
    {
      
      respGenerator.sendError(res,err);
    }
  }
  async deleteAdmin(req,res)
  {
    try{
      
      if(!await adminHelper.checkAdmin(null,req.params.id))
      {
        throw new Error(107); 
      }
      let data = await adminHelper.deleteAdmin(req.params.id);
      respGenerator.sendResponse(res,{message:"Admin Deleted Succesfully"})
    }catch(err)
    {
      respGenerator.sendError(res,err);
    }
  }
   async loginAdmin(req,res)
   {
     try{
       const adminDetails = await adminHelper.checkAdmin(req.body);
        let email=req.body.email;
        let password = req.body.password;
        if(adminDetails.password==password)
        {
          respGenerator.sendResponse(res,{message:"ADMIN LOGIN SUCCESFULLY"})
        }
        else{
          respGenerator.sendError(res,{message:"Email does not exist or password is incorrect"})
        }
     }
     catch(err)
     {
      respGenerator.sendError(res,err);
     }
   }

 }
 module.exports = new AdminController();
