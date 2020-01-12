import _taskService from "../services/TaskService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _commentService from "../services/CommentService";
//PUBLIC
export default class TaskController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("/:id", this.getByListId)
      .get("", this.getAll)
      .get("/:id/comments", this.getCommentsByTaskId)
      .post("", this.create)
      .put("/:id", this.edit)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }
  // this is pretty neat
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async getByListId(req, res, next) {
    try {
      let data = await _taskService.getTasksByListId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getCommentsByTaskId(req, res, next) {
    try {
      let data = await _commentService.getCommentsByTaskId(req.params.id);
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
  //TODO Make delete work without a page refresh
  async delete(req, res, next) {
    try {
      await _taskService.delete(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }

  async edit(req, res, next) {
    try {
      let data = await _taskService.edit(req.body);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }
}
