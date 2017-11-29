var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/library";
const Joi = require('joi');

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
}

// GET, get a list of books this could include an optional limit(get the first
// 5 books...)
function getBooks(limit) {
    if (limit == null || typeof limit === 'undefined') {
    	var limit = 0;
 	}
	else {
 		var limit = limit;
    }
	return db.collection("books").find(query, limit:limit).toArray(function(err, result);
}

// GET, get an individual book
function getBookByTitle(title, ibsn, author, genre, publication, availability) {
	var query = { 'title': title, 'ibsn': ibsn, 'author': author, 'genre': genre, 'publication': publication, 'availability': availability }
	return db.collection("books").find(query).toString(function(err, result);
}

// -- genre get all books by genre genre=mystery
function getBooksByGenre(genre) {
	var query = { 'genre' : genre }
	return db.collection("books").find(query).toArray(function(err, result);
}

// -- title get all books with key words in a title title=the long goodbye (you
// can use a regular expression for this with your database and mongodb find, title: /the long
// goodbye/)
function getBooksLike(keyword) {
	var query = { 'title' : '/'+keyword+'/' }
	return db.collection("books").find(query).toArray(function(err, result);
}

// -- author get all books by an author author=raymond chandler
function getBooksByAuthor(author) {
	var query = { 'author' : author }
	return db.collection("books").find(query).toArray(function(err, result);
}
