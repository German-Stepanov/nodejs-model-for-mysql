var Model = function () {
	//наследование и конструктор
	require('../../index.js').call(this, {
		host 			: myConfig.db.host,
		user 			: myConfig.db.user,	
		password 		: myConfig.db.password,
		database 		: myConfig.db.database,	
	});
	
	var self = this;
};
module.exports = Model;