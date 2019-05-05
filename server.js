const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const app = express();
const router = express.Router();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const ABSPATH = path.dirname(process.mainModule.filename);
app.use(cors({origin:'*'}));

const posts= require('./server/routes/posts');
 app.use(express.static(path.join(__dirname,'dist')));
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
 });
 app.use('/posts',posts);

var store = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, './src/assets');
  },
  filename:function(req,file,cb){
      cb(null, new Date().toJSON().replace(new RegExp(':', 'g'),'.')+'.'+file.originalname);
  }
  
});
var upload = multer({storage:store}).single('file');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
      res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
      return res.status(200).json({});
  };
  next();
});
app.post('/uploads', function(req,res,next){
  upload(req,res,function(err){
      if(err){
          return res.status(501).json({error:err});
      }
      return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
  });
});

app.post('/sendmail', (req,res)=>{
  
  var appkey1="SG.z9A-oELMT3SwdwkPfs94Wg.";
  var appkey2="D4xgAxFpqFmIVP-j5dmNKXHKkcZg1T95pSW36qgbOrs";
  var SENDGRID_APY_KEY = appkey1+appkey2;
  sgMail.setApiKey(SENDGRID_APY_KEY);
//  sgMail.setApiKey(process.env.m8CpB5hzRFimI5rKpv72Cg9);
var from=req;
  const msg = {
    to: 'paikrayu@gmail.com',
    from: from.body.email,
    subject: from.body.instituteName,
    text: 'Hi,' + from.body.name +'I am interested for the demo',
    html: '<div style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f3f2f0;"><b>Hello, <p>'+ from.body.name +' I am interested for the demo</p><p><strong> Institute Name:'+from.body.instituteName +'</strong></p>\n<p><b>PreffredContactTime:'+ from.body.PreffredContactTime+' </b></p>\n<p><b>Query:'+ from.body.query+' </b></p></div>'
  };
  sgMail.send(msg, function(err, info){
    if(err)
        res.send(err);
      else
        res.send('success');
  });

  //===================nodemailer implement======================//


  
});

var server = require('http').createServer(app);
const port = process.env.PORT || 'https://mfksoftware.herokuapp.com';
 
server.listen(port, function () {
  console.log(`Node.js server is running on port ${port}`);
});
module.exports = app;