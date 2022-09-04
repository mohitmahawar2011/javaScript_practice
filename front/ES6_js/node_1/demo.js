// this is node js practice file-->
// var http = require('http');
// var fs = require('fs');

// http.createServer(function(req,res){
//     fs.readFile('demo.html',function(err,data){
//         res.writeHead(200,{'Content-Type':'text/Html'})
//         res.write(data);
//         return res.end();
//     })
    
// }).listen(4300)



// var http = require('http');
// http.createServer(function(req,res){
//     res.write("hello ji");
//     res.end();
// }).listen(4300)




// var nodemail = require('nodemailer');
// var transport = nodemail.createTransport({
//     host:'smtp.gmail.com',
//     port:587,
//     secure:false,
//     requireTLS:true,
//     auth:{
//         user:'maxpet855@gmail.com',
//         pass:'Mohit@855'
//     }
// });
// var mailOptions={
//     from:'maxpet855@gmail.com',
//     to:'mohit.mahawar855@gmail.com',
//     subject:'test node mail',
//     text:'Hello this test node mail by mohit'
// }
// transport.sendMail(mailOptions,function(error,info){
//     if (error){
//         console.warn(error);
//     }
//     else {
//         console.warn("email has been sent",info.response);
//     }
// })



// var http = require('http')
// var uc = require('upper-case')
// http.createServer(function(req,res){
//     res.write(uc.upperCase("mohit mahawar ji"));
//     res.end();
// }).listen(3400)




// var http = require('http')
// var page = `<input type='text'/> <br>
//             <input type='text'/> <br>
//             <input type='text'/> `

// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'text/HTML'});
//     // res.write("<input type='text'>");
//     res.write(page);
//     res.end();

// }).listen(3400)



// var http = require('http');
// var data = {'name':'mohit','sname':'mahawar','mname':'lal'};
// http.createServer(function(req,res){
//     res.writeHead(200,{'Content-Type':'application\json'})
//     // res.write("{'name':'mohit','sname':'mahawar'}");
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(3800)



// var http = require("http");
// http.createServer(function(req,res){
//     res.write("hello world!");
//     res.end();
// }).listen(5000);


// var other = require('./other')
// console.warn(other());



// mysql connection
var mysql = require('mysql');
var con = mysql.createConnection({
    host:"localhost",
    user:'root',
    password:"",
    database:"city"

});
con.connect(function(error){
    if(error) throw error;
    // console.log("connected successfully")
    con.query("select * from city",function(err,result){
        if(err) throw err;
        console.log("all result are here",result[0].cityname)
    })
})

