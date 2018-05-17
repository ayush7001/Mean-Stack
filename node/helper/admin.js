const client = require('./connection');
const ins_query = 'insert into admindetails ( name,email,password) values (?,?,?)';
const view_allUsers='select  * from admindetails order by name asc';
const update_admin = 'update admindetails set name=?,email=?,password=? where id=?';
const delete_admin = 'delete  from admindetails where id=?';
const specifiedAdmin = 'select  * from admindetails where id=?'
class Admin {

  insertAdmin(admin)
  {
    return new Promise((resolve,reject)=>{
         client.query(ins_query,[admin.name,admin.email,admin.password],(err,result)=>{
           if(err){
             console.log(err);
             reject(err);
           }
           else{
             resolve(result);
           }
         });
    });
  }
  viewAdmin(adminID)
  {
    return new Promise((resolve,reject)=>{
      if(!adminID)
      {
        client.query(view_allUsers,(err,result)=>{
          if(err)
          {
            reject(err);
          }
          else{
            if(result.length>0)
            {
            resolve(result);
            }
            resolve(null);
          }
        });
      }
      else{
        client.query(specifiedAdmin,[adminID],(err,result)=>{
          if(err)
          {
            reject(err)
            console.log(err);
          }
          else{
            resolve(result[0]);
          }
        });
      } 
    });
  }
  checkAdmin(admin,adminID)
  { 
    let query ={};
    if(!admin)
    {
      query.text='select id,email,password from admindetails where id=?'
     query.value=[adminID];
    }
    else{
      query.text='select id,email,password from admindetails where email=?'
      query.value=[admin.email];
    }
    return new Promise((resolve,reject)=>{
       client.query(query.text,query.value,(err,result)=>{
        if(err)
        {
          reject(err);
        }
        else{
          if(result.length>0)
          {
            resolve(result[0]);
          }  
            resolve(null);
        }
      });
    });
  }
  // checkAdminByEmail(admin)
  // {
  //   return new Promise((resolve,reject)=>{
  //      client.query('select email,password from userdetails where email=?',[admin.email],(err,result)=>{
  //       if(err)
  //       {
  //         reject(err);
  //       }
  //       else{
  //         if(result.length>0)
  //         {
  //           resolve(result[0]);
  //         }
  //         resolve(null);
  //       }
  //     });
  //   });
  // }

  updateAdmin(adminID,admin)
  {
    return new Promise(async(resolve,reject)=>{
      
      client.query(update_admin,[admin.name,admin.email,admin.password,adminID],(err,result)=>{
        if(err){
          console.log(err);
          reject(err);
        }
        else{
          resolve(result);
        }
      });
    });
  }
  deleteAdmin(adminID){
    return new Promise(async(resolve,reject)=>{
      client.query(delete_admin,[adminID],(err,result)=>{
        if(err){

          reject(err);
        }
        else{
          resolve(result);
        }
      });
    });
  }
  
}


module.exports= new Admin();
