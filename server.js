 // set up ======================== 
 var express  = require('express'); 
 var app      = express();                               // create our app w/ express 
 var path     = require('path'); 
 var mysql    = require('mysql'); 
  
 bodyParser = require('body-parser');
 
 
 // support parsing of application/json type post data
 app.use(bodyParser.json());
 
 //support parsing of application/x-www-form-urlencoded post data
 app.use(bodyParser.urlencoded({ extended: true }));
 
  // configuration =================
 app.use(express.static(path.join(__dirname, '/dist/pirategame')));  //TODO rename to your app-name
  
  // listen (start app with node server.js) ======================================
 app.listen(8080, function(){    
      console.log("App listening on port 8080");
 });
 
  // application -------------------------------------------------------------
 app.get('/', function(req,res) 
 {     
       //res.send("Hello World123");     
       res.sendFile('index.html', { root: __dirname+'/dist/pirategame' });    //TODO rename to your app-name
 });
 
 app.get('/pruefung', function(req,res) 
 {     
       var con = mysql.createConnection({
             database: "pirateGameDB",
             host: "localhost",
             port: "3306",
             user: "root",
             password: "Armageddon2012#"
        });
   
        con.connect(function(err){
             if(err) throw err;
             console.log("Connected");
   
             con.query("SELECT * FROM Pruefung", 
                   function(error,results,fields){
                         if(error) throw error;
                         console.log(results);
                         res.send(results);
             
                         con.end(function(err)
                         {
                               if(err) throw err;
                               console.log("Disconnected");
                         
                         });
                   }
             );
        });
 });
 