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
var tmp = require('tmp');
app.use(cors({origin:'*'}));
//const posts= require('./server/routes/posts');
 app.use(express.static(path.join(__dirname,'dist')));
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
 });
 
 //app.use('/posts',posts);
 var dir = '/usr';
//  if (!fs.existsSync(dir)){
//    fs.mkdirSync(dir);
//  }
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
  //tmpobj = tmp.dirSync();
  var store = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, dir);
    },
    filename:function(req,file,cb){
        cb(null, file.originalname);
    }
  });
  var upload = multer({storage:store}).single('file');
  upload(req,res,function(err){
      if(err){
          return res.status(501).json({error:err});
      }
      return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
  });
});
app.post('/sendmail', (req,res)=>{

  var appkey1="Nb03odE-Rhq-F980WinuaQ.";
  var appkey2="w7KAW7s47lfwMrdXus0Hx";
  var appkey3="FIs2rfa25rgCNzgylQR9wU";
  var key = appkey1+appkey2+appkey3;
  sgMail.setApiKey("SG."+key);
var from=req;
  const msg = {
    to: 'utsahpaikray@gmail.com',
    from: from.body.email,
    subject: from.body.instituteName,
    templateId:'d-62f28fee8a81428bac5bf1271636dae8',
    dynamic_template_data: {
      subject: 'Online Demo',
      name: from.body.name,
      PreffredContactTime:from.body.PreffredContactTime,
      instituteName:from.body.instituteName,
      query:from.body.query
    }
  };
  sgMail.send(msg, function(err, info){
    if(err)
        res.send(err);
      else
        res.send('success');
  });
});
app.post('/sendMailwithattachment', (req,res)=>{

  var appkey1="Nb03odE-Rhq-F980WinuaQ.";
  var appkey2="w7KAW7s47lfwMrdXus0Hx";
  var appkey3="FIs2rfa25rgCNzgylQR9wU";
  var key = appkey1+appkey2+appkey3;
  sgMail.setApiKey("SG."+key);
  var filepath = dir + "/" + req.body.uploadfile;
    var base64= fs.readFileSync(filepath, { encoding: 'base64' });
var from=req;
  const msg = {
    to: 'utsahpaikray@gmail.com',
    from: from.body.email,
    templateId:'d-62f28fee8a81428bac5bf1271636dae8',
    dynamic_template_data: {
      subject: 'Online Demo',
      name: from.body.name,
    },
    attachments: [
      {
        content: base64,
        filename: filepath,
        type: 'plain/text',
        disposition: 'attachment',
        content_id: 'mytext'
      },
    ]
  };
  sgMail.send(msg, function(err, info){
    if(err)
        res.send(err);
      else
        res.send('success');
  });
});

var server = require('http').createServer(app);


//const port = process.env.PORT || 3000;
 const port = process.env.PORT || 'https://mfksoftware.herokuapp.com';
 
server.listen(port, function () {
  console.log(`Node.js server is running on port ${port}`);
});
module.exports = app;