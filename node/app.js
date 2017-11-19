var express=require('express'),bodyParser=require('body-parser'),app= express();

app.use(bodyParser.json())
app.listen(8080,function(){
	console.log("we on port 8080");	
});

require('./routes')(app);

