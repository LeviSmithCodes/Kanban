import mongoose from "mongoose";
import List from "../models/List";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("List", List);

class ListService {
  async getListByBoardId(boardId) {
    return await _repository.find({ boardId: boardId });
  }

  // async getTasksByListId(listId) {
  //   return await _repository.find({ listId: listId });
  // }

  async create(listData) {
    let data = await _repository.create(listData);
    return data;
  }

  async delete(id, userId) {
    let data = await _repository.findOneAndDelete({
      _id: id,
      authorId: userId
    });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this list", 400);
    }
  }
}

const _listService = new ListService();
export default _listService;
