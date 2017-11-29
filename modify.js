var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/library";
const Joi = require('joi');

MongoClient.connect(url, function(err, db) {
	if (err) throw err;
}

function isValidField(field, value) {
	const schema = Joi.object().keys({
    title: Joi.string().alphanum().min(3).max(30),
    isbn: Joi.string().regex(/^\d{9}[\d|X]$/),
    author: Joi.string().alphanum().min(3).max(30),
    genre: Joi.string().alphanum().min(3).max(30),
    publication: [Joi.string().regex(/^(((0?[1-9]|1[012])/(0?[1-9]|1\d|2[0-8])|(0?[13456789]|1[012])/(29|30)|(0?[13578]|1[02])/31)/(19|[2-9]\d)\d{2}|0?2/29/((19|[2-9]\d)(0[48]|[2468][048]|[13579][26])|(([2468][048]|[3579][26])00)))$/, Joi.string()]
    availability: Joi.boolean()
})

	// Return result.
	const result = Joi.validate({ field: value}, schema);
 
}

// POST, add a book to your database
function addBook(title, ibsn, author, genre, publication, availability) {
	this.title = title;
	this.isbn = ibsn;
	this.author = author;
	this.genre = genre;
	this.publication = [date, publisher];
	this.availability = availability;

	if isValidField(this.title) && isValidField(this.isbn) && isValidField(this.author) && isValidField(this.genre) && isValidField(this.publication) && isValidField(this.availability){
		db.collection("books").insert(this);
	}
}

// PUT/PATCH, update the information about a book
function updateBook(isbn, beforevalue, aftervalue) {
	if isValidField(isbn) {
	    db.collection("customers").updateOne({'isbn':isbn}, beforevalue, aftervalue, function(err, res))
	}
}

// DELETE, delete a book
function deleteBook(isbn) {
	if isValidField(isbn) {
    	db.collection("customers").deleteOne({'isbn': isbn}, function(err, res))
    }
}
