import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { Task } from "./database/schemas/TasksSchema.js";

const PORT = 3001;

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/HomeRev")
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));

app.get("/api/tasks", async (req, res) => {
  const { name } = req.query;
  if (name) {
    const task = await Task.find({ name: name });
    return res.status(201).send(task);
  }
  const tasks = await Task.find();
  return res.status(200).send(tasks);
});

app.post("/api/tasks", async (req, res) => {
  const { data } = req.body;
  if (!data) return res.status(400).send({ error: "no data inserted" });
  const task = await Task(data);
  task.save();
  return res.status(201).send({message: "task added"});
});
app.put("/api/tasks/:name", async (req, res) => {
  const {
    body: { data },
    params: { name },
  } = req;
  if (!data) return res.status(400).send({ error: "no data inserted" });
  const task = await Task.findOneAndUpdate({ name: name }, data);
  return res.status(201).send({message: "task updated"});
});

app.delete("/api/tasks/:name", async (req, res) => {
  const {
    params: { name },
  } = req;
  const task = await Task.findOneAndDelete({ name: name });
  return res.status(201).send({message: "task deleted"});
});
app.listen(PORT, () => {
  console.log("App is running on : ", PORT);
});
