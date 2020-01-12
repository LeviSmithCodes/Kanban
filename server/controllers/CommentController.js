import _commentService from "../services/CommentService";
import express from "express";
import { Authorize } from "../middleware/authorize.js";
//PUBLIC
export default class CommentController {
  constructor() {
    this.router = express
      .Router()
      .use(Authorize.authenticated)
      .get("/:id", this.getByTaskId)
      .get("", this.getAll)
      .post("", this.create)
      .delete("/:id", this.delete)
      .use(this.defaultRoute);
  }
  // this is pretty neat
  defaultRoute(req, res, next) {
    next({ status: 404, message: "No Such Route" });
  }
  async getByTaskId(req, res, next) {
    try {
      let data = await _commentService.getCommentByTaskId(req.params.id);
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async getAll(req, res, next) {
    try {
      let data = await _commentService.getAllComments();
      return res.send(data);
    } catch (error) {
      next(error);
    }
  }

  async create(req, res, next) {
    try {
      req.body.authorId = req.session.uid;
      let data = await _commentService.create(req.body);
      return res.status(201).send(data);
    } catch (error) {
      next(error);
    }
  }
  async delete(req, res, next) {
    try {
      await _commentService.delete(req.params.id, req.session.uid);
      return res.send("Successfully deleted");
    } catch (error) {
      next(error);
    }
  }
}
