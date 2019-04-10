const repModel = require('../model/rep.model');

function mConnection(req,res){
	repModel.makeConnection().then(function(result){
		if(typeof result != 'undefined'){
			res.send('Connection Established!');
		}else{
			res.send('Connection Not established')
		}
		
	}).catch(function(error){
		res.send('Error');
	})
}


module.exports={
	mConnection
}