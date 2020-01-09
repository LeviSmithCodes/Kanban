import mongoose from "mongoose";
import Comment from "../models/Comment";
import ApiError from "../utils/ApiError";
const _repository = mongoose.model("Comment", Comment);
class CommentService {
  async getCommentByTaskId(taskId) {
    return await _repository.find({ taskId: taskId });
  }
  async create(commentData) {
    let data = await _repository.create(commentData);
    return data;
  }

  async getAllComments() {
    let data = await _repository.find();
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this comment", 400);
    }
  }
}
const _commentService = new CommentService();
export default _commentService;
