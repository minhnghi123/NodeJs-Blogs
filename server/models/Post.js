const mongoose = require("mongoose");

//create a Schema -> save the database
const Schema = mongoose.Schema;

// create a postSchema constructor
// this below is a structure of the new Post including
//title
//body
//date of creating the post
//date of updating the post
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});
// A mongoose module is a wrapper on the mongoose schema
//A mongoose schema defines the structure of the documents, default values, validation
//Whereas a mongoose model provides an interface to the database for creating , querying , up, del,.....
module.exports = mongoose.model("Post", postSchema);
//mongoose.model(<Collectionname>, <CollectionSchema>)

// Collection name: It is the name of the collection.

// Collection Schema: It is the schema of the collection.
