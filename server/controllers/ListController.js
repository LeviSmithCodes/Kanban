import _listService from "../services/ListService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";
import _taskService from "../services/TaskService";

//PUBLIC
export default class ListController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("", this.getByBoardId)
      // FIXME This should have a get tasks by listId
      .get("/:id/tasks", this.getTasksByListId)
      .post("", this.create)

      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }

  // this is pretty neat

  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }

  async getByBoardId(req, res, next) {
    try {
      let data = await _listService.getListByBoardId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getTasksByListId(req, res, next) {
    try {
      let data = await _taskService.getTasksByListId(req.params.id);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _listService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }

  async delete(req, res, next) {
    try {
      await _listService.delete(req.params.id);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
