// const {MongoClient, ObjectID} = require('mongodb');
const {MongoClient, ObjectID} = require('mongodb');

// MongoClient.connect('mongodb://localhast:27017/TodoApp', (err, db) => {
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server!');
	}
	console.log('Connected to MongoDB server.');

	db.collection('Users').deleteMany({name: 'behi'}).then((result) => {
		console.log(result);
	});

	// db.collection('Todos').deleteOne({text: 'Somthing to do'}).then((result) => {
	// 	console.log(result);
	// });

	// db.collection('Todos').findOneAndDelete({complated: false}).then((result) => {
	// 	console.log(result);
	// });

	db.close();
});

