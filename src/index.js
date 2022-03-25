const express = require("express");
const app = express();
const todoModel = require("./model/todo");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;
app.use(cors());
try {
  mongoose.connect(
    "mongodb+srv://nguyenthanhtung:nguyenthanhtung@cluster0.7tvjy.mongodb.net/todoapp?retryWrites=true&w=majority"
  );
  console.log(`connect to db successfully !`);
} catch (error) {
  console.log(error);
}
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.post("/todo/create", async (req, res) => {
  try {
    const task = req.body.task;
    const status = req.body.status;
    await todoModel.create({ task: task, status: status });
    return res.json({
      statusCode: 200,
      message: `Create todo successfully !`,
    });
  } catch (error) {
    return res.json({
      statusCode: 400,
      message: `Create todo Fail !`,
    });
  }
});
app.get("/todo/get", async (req, res) => {
  try {
    const todos = await todoModel.find({});
    return res.json({
      statusCode: 200,
      todos,
    });
  } catch (error) {
    console.log(error);
  }
});
app.delete("/todo/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    await todoModel.findByIdAndDelete(id);
    return res.json({
      statusCode: 200,
      message: "Delete todo successfully !",
    });
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log(`App listeing on link http://localhost:${port}`);
});
