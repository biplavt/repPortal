const utilityModel = require('./utility/utilityModel');
const config365 = require('../configuration/configHwsSql.config.js');




function makeConnection(){
	var config1 = config365.config;
	// console.log(config1);
	 var ourQuery = `SELECT TOP  50 SalesID
            ,Amount
            ,createdDate
            ,CustAccount
            ,Customer
            ,SalesStatus
          FROM dbo.vSalesSummary1 order by createdDate desc`;

	return utilityModel.sqlQuery(ourQuery,config1);
}


module.exports={
	makeConnection
}