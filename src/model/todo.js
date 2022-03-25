const mongoose = require("mongoose");
const schema = new mongoose.Schema({ task: "string", status: "string" });
const Todo = mongoose.model("Todo", schema);
module.exports = Todo;
