import mongoose from "mongoose";
import List from "../models/List";
import ApiError from "../utils/ApiError";

const _repository = mongoose.model("List", List);

class ListService {
  async getListByBoardId(boardId) {
    return await _repository.find({ boardId: boardId });
  }

  async create(listData) {
    let data = await _repository.create(listData);
    return data;
  }

  async delete(id) {
    let data = await _repository.findOneAndDelete({ _id: id });
    if (!data) {
      throw new ApiError("Invalid ID or you do not own this list", 400);
    }
  }
}

const _listService = new ListService();
export default _listService;
