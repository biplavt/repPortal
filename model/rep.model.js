const utilityModel = require('./utility/utilityModel');
const config = require('../configuration/configAX2009.js');



function makeConnection(){
	
	// console.log(config1);
	 var value = '';
    var ourQuery = `SELECT [SALESID]
        ,[Amount]
        ,[createdDate]
        ,[CUSTACCOUNT]
        ,[Customer]
        ,[SALESNAME]
        ,[RecentPickUp]
        ,[Status]
        ,[SF]
        FROM View_NodeSalesList`;
    var config1 = config.config;

	return utilityModel.sqlQuery(ourQuery,config1);
}


module.exports={
	makeConnection
}