const empRoutes=require('./employee_routes.js');
module.exports=function(app){
	empRoutes(app);
}