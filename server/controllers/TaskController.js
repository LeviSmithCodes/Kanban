import _taskService from "../services/TaskService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";
//PUBLIC
export default class TaskController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("/:id", this.getByListId)
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }
  // this is pretty neat
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async getByListId(req, res, next) {
    try {
      let data = await _taskService.getTaskByListId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      let data = await _taskService.getAllTasks();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _taskService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await _taskService.delete(req.params.id);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
