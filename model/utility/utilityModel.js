const sql = require('mssql');


//performs sql query by taking in 'OurQuery' and configuration value of 'config' with escaped value 'value' to prevent SQL injection
var sqlQuery = function (ourQuery, config, value) {

	//make a connection to db using given Configuration=config  and query=ourQuery
	return new Promise(function (resolve, reject) {

		new sql.ConnectionPool(config).connect().then(function (pool) {
			// var request = new sql.Request();      

			return pool.request()
				.query(ourQuery, [value])
		}).then(function (result) {
			// console.log('result:',result);
			resolve(result);
			sql.close();
		}).catch(function (err) {
			console.log('error:',err);
			reject(err);
			sql.close();
		});

	})
}

module.exports={
	sqlQuery
}