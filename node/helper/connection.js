const  Client  = require('mysql');
const { mysql } = require('../config');


const client = Client.createConnection(mysql);

client.connect((err,client,done)=>{
  if (err) {
    console.log(err);
  } else {
    console.log('connection accepted');
	
  }
});

module.exports= client;
