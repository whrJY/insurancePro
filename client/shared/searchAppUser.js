var orm = require("orm");


function getConnect(){

	orm.connect("mysql://root:root@192.168.1.22/biyouxin", function (err, db) {
	 

	 db.driver.execQuery("SELECT * FROM rd_token_store where id = 35", function (err, data) {
	 	console.log(data)
	 })


	});
}

export default {
   getConnect
}