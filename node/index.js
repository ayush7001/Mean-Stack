var express = require('express');
var admin = require('./routes/adminRoutes');
var user = require('./routes/userRoutes')
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use('/admin',admin);
app.use('/user',user);
app.listen(9002,()=>console.log('Server is on'));
