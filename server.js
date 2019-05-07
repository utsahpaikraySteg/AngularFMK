const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var compression = require('compression')
const app = express();
const router = express.Router();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
app.use(cors({origin:'*'}));
app.use(compression());

const posts= require('./server/routes/posts');
 app.use(express.static(path.join(__dirname,'dist')));
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
 });
 const ABSPATH = path.dirname(process.mainModule.filename);
 var dir = './MFKsoftware';
 
 if (!fs.existsSync(dir)){
     fs.mkdirSync(dir);
 }
 var res = ABSPATH.replace(new RegExp("\\\\", 'g'), "/");
 var filepath=ABSPATH+"/MFKsoftware/";
 app.use('/posts',posts);
 
 console.log(res);
var store = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, dir);
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
  
  var appkey1="a";
  var appkey2="a";
  var appkey3="a"
  
  var SENDGRID_APY_KEY = appkey1+appkey2+appkey3;
  sgMail.setApiKey(SENDGRID_APY_KEY);
var filepath=filepath+'/'+req.body.uploadfile;
  
  
var from=req;
  const msg = {
    to: 'paikrayu@gmail.com',
    from: from.body.email,
    subject: from.body.instituteName,
    text: 'Hi,' + from.body.name +'I am interested for the demo',
    html: '<div style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f3f2f0;"><b>Hello, <p>'+ from.body.name +' I am interested for the demo</p><p><strong> Institute Name:'+from.body.instituteName +'</strong></p>\n<p><b>PreffredContactTime:'+ from.body.PreffredContactTime+' </b></p>\n<p><b>Query:'+ from.body.query+' </b></p></div>',
    templateId: 'd-5604f7c4e7a046db9524e789cb930d34',
    dynamic_template_data: {
      subject: 'Testing Templates',
      name: from.body.name,
      PreffredContactTime:from.body.PreffredContactTime,
      instituteName:from.body.instituteName,
      query:from.body.query
    },
    attachments: [
      {
        content: "filepath",
        filename: filepath,
        type: 'plain/text',
        disposition: 'attachment',
        content_id: 'mytext'
      },
    ],
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