var db=require('../data/empData.js');

module.exports=function(app){
    app.post('/emp',function(req,res){
   	   db.empData.push(req.body); 
   	   console.log("dbbbb",db);
   	   res.send('hello darling');
    });
    app.get('/findAll',function(req,res){
    	res.send(db.empData);
    });
    app.get('/findById/:empId',function(req,res){
    	var empId=req.params.empId;
    	for(var i=0;i<db.empData.length;i++){
    		if(empId==db.empData[i].id){
    			res.send(db.empData[i]);
    			return;
    		}
    	}
    	res.send('no data found corresponding to the given id');
    })
    app.delete('/deleteById/:id',function(req,res){
    	var id=req.params.id;
    	for(var i=0;i<db.empData.length;i++){
    		if(id==db.empData[i].id){
    			db.empData.splice(i,1);
    			res.send('deleted');
    			return;
    		}
    	}
    	res.send('no data found');

    })
    app.put('/updateById/:id',function(req,res){
    	var id=req.params.id;
    	for(var i=0; i<db.empData.length; i++){
    		if(id==db.empData[i].id){
    			for(ele in req.body){
    				db.empData[i].ele=req.body.ele;

    			}
                res.send('updated');
                return;
    		}

    	}
    	res.send('data not found');
    })
};