// const express = require('express');
// const app = express();
// app.get("/",function(req,res){
//     res.send("This is home page..!")
// });
// app.get("/about",function(req,res){
//     res.send("This is about page from express")
// });
// app.post("/about",function(req,res){            
//     res.send("This is post request on about page from express")
// });

// app.listen(5000);




const express = require('express');
const app = express();
//middleware--> checkURL
const checkURL = function(req,res,next){
    console.warn('Current route is ',req.originalUrl)
    next();
}
app.use(checkURL);
app.get("/",function(req,res){
    res.send("This is home page..!")
});
app.get("/about",function(req,res){
    res.send("This is about page from express")
});
app.post("/about",function(req,res){            
    res.send("This is post request on about page from express")
});

app.listen(5000);



// const express = require('express');
// const app = express();
// const router = express.Router();
// const checkURL = function(req,res,next){
//     console.warn('Current route is ',req.originalUrl);
//     next();
// }
// // app.use(checkURL);
// app.get("/",function(req,res){
//     res.send("This is home page..!")
// });
// router.get("/about", checkURL,function(req,res){
//     res.send("This is about page from express")
// });
// app.post("/about",function(req,res){            
//     res.send("This is post request on about page from express")
// });
// router.get("/login",checkURL,function(req,res){
//     res.send("This is login page from express")
// });
// app.use("/",router);
// app.listen(5000);





// const express = require('express');
// const app = express();
// const router = express.Router();
// // const checkURL = function(req,res,next){
// //     console.warn('Current route is ',req.originalUrl);
// //     next();
// // }
// // app.use(checkURL);

// const checkURL = require('./other');

// app.get("/",function(req,res){
//     res.send("This is home page..!")
// });
// router.get("/about", checkURL,function(req,res){
//     res.send("This is about page from express")
// });
// app.post("/about",function(req,res){            
//     res.send("This is post request on about page from express")
// });
// router.get("/login",checkURL,function(req,res){
//     res.send("This is login page from express")
// });
// app.use("/",router);
// app.listen(5000);





// const express = require('express');
// const app = express();
// const router = express.Router();
// // const checkURL = function(req,res,next){
// //     console.warn('Current route is ',req.originalUrl);
// //     next();
// // }
// // app.use(checkURL);

// const checkURL = require('./other');
// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/First.html");
// });
// router.get("/about", checkURL,function(req,res){
//     res.sendFile(__dirname+"/Second.html");
// });
// app.post("/about",function(req,res){            
//     res.send("This is post request on about page from express")
// });
// router.get("/login",checkURL,function(req,res){
//     res.send("This is login page from express")
// });
// app.use("/",router);
// app.listen(5000);




// // dynamic
// const express = require('express');
// const app = express();

// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     data = {email:"mohit.mahawar@gmail.com",adress:"sodala,jaipur",skills:['java','javascript','python','c#']}
//     console.warn(req.params.name);
//     res.render('Profile',{name:req.params.name,data:data});
// })
// app.listen(5000);




// // static & template include
// const express = require('express');
// const app = express();
// app.use('/assets',express.static('assets'));
// app.set('view engine','ejs');
// app.get("/profile/:name",function(req,res){
//     data = {email:"mohit.mahawar@gmail.com",adress:"sodala,jaipur",skills:['java','javascript','python','c#']}
//     console.warn(req.params.name);
//     res.render('Profile',{name:req.params.name,data:data});
// })
// app.get("/",function(req,res){
//     res.render("Home")  
// })
// app.get("/login",function(req,res){
//     res.render("Login")
// })
// app.listen(5000);



// // connect with mongodb cloud
// const express = require('express');
// const app = express();
// const supreme = require('./supreme');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://mohit:mohitmahawar@cluster0.kbujs.mongodb.net/arya?retryWrites=true&w=majority', {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,

// })
// // .then(() => {console.log('db connection')})
// supreme.find({},function(err,result){
//     if(err) console.log(err);
//     console.log(result);
// })


// const express = require('express');
// const app = express();
// // const supreme = require('./supreme');
// const mongoose = require('mongoose');
// mongoose.connect('mongodb+srv://mohit:mohitmahawar@cluster0.kbujs.mongodb.net/arya?retryWrites=true&w=majority', {
//     useNewUrlParser : true,
//     useUnifiedTopology : true,
//     // useFindAndModify : false
// })
// .then(() => {console.log('db connection')}).catch((error) => console.log(error) )


// -------------------------------------
// const express = require('express');
// const app = express();
// const supreme = require('./supreme');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const jsonparser = bodyParser.json();
// mongoose.connect("mongodb+srv://mohit:mohitmahawar@cluster0.kbujs.mongodb.net/arya?retryWrites=true&w=majority",{
//     useNewUrlParser : true,
//     useUnifiedTopology : true
// })
// app.get("/user",function(req,res){
//     supreme.find().then((data) =>{
//         res.status(201).json(data)
//     })
// })

// app.post("/user",jsonparser ,function(req,res){
//     const data = new supreme({
//         _id : new mongoose.Types.ObjectId(),
//         name : req.body.name,
//         email : req.body.email,
//         classes : req.body.classes,
//         income : req.body.income
//     })
//     data.save().then((result)=>{
//         res.status(201).json(result)

//     }).catch((error)=>console.warn(error))
// })

// app.delete("/user/:id",function(req,res){
//     supreme.deleteOne({
//         _id:req.params.id
//     }).then((result)=>{
//         res.status(200).json(result)
//     }).catch((err)=>{console.warn(err)})
// })

// // {"_id":{"$oid":"61f162af5290d4ab4318d1d1"},"name":"danish","email":"danish@gmail.com","classes":"13th","income":"3200","__v":{"$numberInt":"0"}}

// app.put("/user/:id",jsonparser, function(req,res){
//     supreme.updateOne(
//         {_id: req.params.id},
//         {$set:{
//             name: req.body.name
//         }}
//     ).then((result)=>{
//         res.status(200).json(result)
//     }).catch((err)=>{console.warn(err)})
// })

// app.get("/search/:name",function(req,res){
//     var regx = new RegExp(req.params.name,"i");
//     supreme.find({name:regx}).then((result)=>{
//         res.status(201).json(result)})
// })

// app.listen(5000);

// ---------------------------------------
// hashing password using crypto module/jwt

// const express = require('express');
// const app = express();
// const aryastudents = require('./aryastu');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const jsonparser = bodyParser.json();
// const crypto = require("crypto");
// var key = "password";
// var algo = "aes256";

// const jwt = require("jsonwebtoken")
// jwtkey = "jwt"

// mongoose.connect("mongodb+srv://mohit:mohitmahawar@cluster0.kbujs.mongodb.net/arya?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log("connected");
// })

// app.post("/register", jsonparser, function (req, res) {
//     var cipher = crypto.createCipher(algo, key)
//     var encrypted = cipher.update(req.body.password, 'utf8', 'hex')
//         + cipher.final('hex');

//     console.log(encrypted)
//     const data = new aryastudents({
//         _id: mongoose.Types.ObjectId(),
//         name: req.body.name,
//         email: req.body.email,
//         income: req.body.income,
//         password: encrypted
//     })
//     data.save().then((result) => {
//         // res.json(result)
//         jwt.sign({ result }, jwtkey, { expiresIn: '300s' }, (err, token) => {
//             res.status(200).json({ token })
//         })
//     })
//         .catch((err) => { console.log(err) })
// })

// // login with jwt
// app.post('/login', jsonparser, function (req, res) {
//     aryastudents.findOne({ email: req.body.email }).then((data) => {
//         var decipher = crypto.createDecipher(algo, key);
//         var decrypted = decipher.update(data.password, 'hex', 'utf8') +
//             decipher.final('utf8');
//         console.log(decrypted)
//         if (decrypted == req.body.password){
//             jwt.sign({data},jwtkey,{expiresIn:'300s'},(err,token)=>{
//                 res.status(200).json({token})
//             })
//         }
//     })
// })

// app.get('/find',verifyToken,function(req,res){
//     aryastudents.find().then((result)=>{
//         res.json(result)
//     })
// })


// function verifyToken(req,res,next){
//     const bearerHeaader = req.headers['authorization'];
    
//     if(typeof bearerHeaader !== 'undefined'){
//         const bearer = bearerHeaader.split(" ")
//     console.log(bearerHeaader);
//     req.token = bearer[1]
//     jwt.verify(req.token,jwtkey,(err,authData)=>{
//         if(err){
//             res.json({result:err})
//         }
//         else{
//             next();
//         }
//     })
//     }
//     else{
//         res.send({'result':'Token not provided'})
//     }
// }

// app.listen(5000)