import mongoose from "mongoose";
import Task from "../models/Task";
import ApiError from "../utils/ApiError";
const _repository = mongoose.model("Task", Task);
class TaskService {
  async getTaskByListId(listId) {
    return await _repository.find({ listId: listId });
  }
  async create(taskData) {
    let data = await _repository.create(taskData);
    return data;
  }

  async getAllTasks() {
    let data = await _repository.find();
    return data;
  }
  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this list", 400);
    }
  }

  async edit(taskData) {
    let data = await _repository.findOneAndUpdate(
      { _id: taskData.currentTaskId },
      { listId: taskData.newListId },
      { new: true }
    );
    if (!data) {
      throw new ApiError("Task already exist on lists (or other error)", 400);
    }
  }
}
const _taskService = new TaskService();
export default _taskService;
