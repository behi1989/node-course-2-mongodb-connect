const mongoClient = require('mongodb').MongoClient;

mongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server!');
	}
	console.log('Connected to MongoDB server.');
	
	// db.collection('Todos').insertOne({
	// 	text: 'Somthing to do',
	// 	complated: false,
	// }, (err, result) => {
	// 	if (err) {
	// 		return console.log('Unable to insert Todo', err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	
	db.collection('Users').insertOne({
		name: 'behi',
		age: 29,
		location: 'Tehran'
	}, (err, result) => {
		if (err) {
			return console.log('Unable to insert User!', err)
		}
		console.log(result.ops);
	});

	db.close();
});