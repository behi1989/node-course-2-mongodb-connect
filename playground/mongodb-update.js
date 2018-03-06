const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {

	if (err) {
		return console.log('Unable to connect to MongoDB Server!', err);
	}

	console.log('Connected to MongoDB Server.');

	// db.collection('Users').findOneAndUpdate({
	// 	_id: new ObjectID('5a9e954b586f6a4170ae5d09')
	// }, {
	// 	$set: {
	// 		location: 'Tehran'
	// 	}
	// }, {
	// 	returnOriginal: false
	// }).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5a9e577e0ca423327c212059')
	}, {
		$set: {
			name: 'Dav',
			age: 28
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	db.close();
});