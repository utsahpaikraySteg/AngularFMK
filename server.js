const path = require('path');
const fs = require('fs');
const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser')
const app = express();
const router = express.Router();
const cors = require('cors');
const sgMail = require('@sendgrid/mail');
const ABSPATH = path.dirname(process.mainModule.filename);
app.use(cors({origin:'*'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
const DIR = './uploads';
const posts= require('./server/routes/posts');
 app.use(express.static(path.join(__dirname,'dist')));
 app.get('*', function(req, res) {
     res.sendFile(path.join(__dirname, 'dist/index.html'));
 });
 app.use('/posts',posts);
console.log(ABSPATH);
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, DIR);
    },
    filename: (req, file, cb) => {
      cb(null, file.fieldname + '-' + Date.now() + '.' + path.extname(file.originalname));
    }
});

let upload = multer({storage: storage});

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
app.post('/sendmail', (req,res)=>{
  var SENDGRID_APY_KEY = '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';
  sgMail.setApiKey(SENDGRID_APY_KEY);
//  sgMail.setApiKey(process.env.m8CpB5hzRFimI5rKpv72Cg9);
var from=req;
console.log(from.body);
  const msg = {
    to: 'paikrayu@gmail.com',
    from: from.body.email,
    subject: from.body.instituteName,
    text: 'Hi,' + from.body.name +'I am interested for the demo',
    html: '<div style="Margin:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;min-width:100%;background-color:#f3f2f0;"><b>Hello, <p>'+ from.body.name +' I am interested for the demo</p><p><strong> Institute Name:'+from.body.instituteName +'</strong></p>\n<p><b>PreffredContactTime:'+ from.body.PreffredContactTime+' </b></p>\n<p><b>Query:'+ from.body.query+' </b></p></div>',
  };
  sgMail.send(msg, function(err, info){
    if(err)
        console.log(err)
      else
        res.send('success');
  });
  
});
app.post('/uploadFile', (req, res)=>{
res.send('Hello World!');

});
var server = require('http').createServer(app);
const PORT = process.env.PORT || "https://mfksoftware.herokuapp.com";
 
server.listen(PORT, function () {
  console.log(`Node.js server is running on port ${PORT}`);
});