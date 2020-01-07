import Axios from "axios";

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default {
  actions: {
    getBoards({ commit, dispatch }) {
      api.get("boards").then(res => {
        commit("setResource", { resource: "boards", data: res.data });
      });
    },
    createBoard({ commit, dispatch }, boardData) {
      api.post("boards", boardData).then(res => {
        commit("addResource", { resource: "boards", data: res.data });
        // dispatch("getBoards");
      });
    },
    deleteBoard({ commit, dispatch }, boardId) {
      api.delete("boards/" + boardId).then(serverBoard => {
        dispatch("getBoards");
      });
    }
  }
};
