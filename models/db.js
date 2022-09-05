require('./student.model'); 

var mongoose = require('mongoose');
mongoose.connect(
  'mongodb://127.0.0.1:27017/studentdatabase',
 {
  useNewUrlParser: true
 },
 (err) =>{
  if(!err){
    console.log("connection succeeded");
  } else {
    console.log("Error in connection");
  };
 }
 );

 require("./student.model")
