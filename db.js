/*
    Todo{
    title:string;
    descreption:string;
    completed:boolean
    
    }
*/


// const mongoose= require("mongoose");
// const { boolean } = require("zod");
// //mongodb url handy
// mongoose.connect("")
// const todoSchema = mongoose.Schema({
//     title:string,
//     description:string,
//     completed:Boolean
// })

// const todo =mongoose.model('todos',todoSchema);

// module.exports={
//     todo
// }

const mongoose = require("mongoose");

// MongoDB URL
const MONGODB_URI = "mongodb://localhost:27017/Todonew"; // Update this with your actual MongoDB URI

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => console.error("Failed to connect to MongoDB", err));

// Define Todo Schema
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

// Define Todo Model
const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
};
