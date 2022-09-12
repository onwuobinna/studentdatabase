require('./student.model'); 

var mongoose = require('mongoose');
mongoose.connect(
  'mongodb+srv://obinna:obinna@cluster0.qgtc4y0.mongodb.net/test',
 {
  useNewUrlParser: true
 },
 (err) =>{
  if(!err){
    console.log("connection succeeded");
  } else {
    console.log(err);
  };
 }
 );

 require("./student.model")
