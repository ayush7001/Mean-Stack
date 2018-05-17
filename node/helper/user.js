const client = require('./connection');
const view_User = 'select * from userdetails order by name asc';
const insert_User =  'insert into userdetails (email,name,gender,surname,password) values(?,?,?,?,?)';
class User{

    viewUser()
    {
        return new Promise((resolve,reject)=>{
            client.query(view_User,(err,result)=>{
                if(err){
                    // console.log(err);
                    reject(err);    
                }
                else{
                    // console.log(result);
                    resolve(result[0]);
                }
            });
        });
    }
    insertUser(user)
    {
        return new Promise((resolve,reject)=>{
            client.query(insert_User,[user.email,user.name,user.gender,user.surname,user.password],(err,result)=>{
                if(err){
                    reject(err);
                }
                resolve(result);
            });
        });
    }


}
module.exports= new User();