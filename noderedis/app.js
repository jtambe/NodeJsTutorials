// using all imports
const express = require('express');
// exphbs = express handlebars
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');
// method-override is used for delete requests outside of get and post
const methodOverride = require('method-override');
const redis = require('redis');

// Create Redis Client
let client = redis.createClient();

// when connected to redis just post a message
client.on('connect', function(){
  console.log('Connected to Redis...');
});

// Set Port
const port = 3000;

// Init app
const app = express();

// setting up the View Engine\
// main.handlebars would be the layout
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// methodOverride
// _method is parameter for delete requests
app.use(methodOverride('_method'));

// Search Page
// '/' means home page
app.get('/', function(req, res, next){
  res.render('searchusers');
});

// Search processing
app.post('/user/search', function(req, res, next){

  // express syntax to get values from form
  // req.body.id, req.body.email ....
  let id = req.body.id;

  client.hgetall(id, function(err, obj){
    if(!obj){
      // render search form in case user does not exist
      res.render('searchusers', {
        error: 'User does not exist'
      });

    } else {
      obj.id = id;
      res.render('details', {
        user: obj
      });
    }
  });
});

// Add User Page
// show the empty page first
app.get('/user/add', function(req, res, next){
  res.render('adduser');
});

// Process Add User Page
// adding user using post function
app.post('/user/add', function(req, res, next){
  let id = req.body.id;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let email = req.body.email;
  let phone = req.body.phone;

  client.hmset(id, [
    'first_name', first_name,
    'last_name', last_name,
    'email', email,
    'phone', phone
  ], function(err, reply){
    if(err){
      console.log(err);
    }
    console.log(reply);
    res.redirect('/');
  });
});

// Delete User
// sending parameter using /:id syntax
app.delete('/user/delete/:id', function(req, res, next){
  
  // redis del command which removes the id 
  client.del(req.params.id);
  res.redirect('/');

});

app.listen(port, function(){
  console.log('Server started on port '+port);
});





// set user in redis database using 
// HMSET user001 first_name "Jayesh" last_name "Tambe" email "jtambe@gmail.com"
// HMSET user002 first_name "Alena" last_name "Sandalova" email "alena@gmail.com"


//which mongo
// cd usr/bin
// mongo and this gives you mongo shell