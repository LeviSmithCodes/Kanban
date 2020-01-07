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
  mutations: {
    setListsAfterDelete(state, data) {
      state.lists = data;
    }
  },
  actions: {
    getLists({ commit, dispatch }) {
      // debugger;
      api.get("lists").then(res => {
        debugger;
        commit("setResource", { resource: "lists", data: res.data });
      });
    },
    createList({ commit, dispatch }, listData) {
      // debugger;
      api.post("lists", listData).then(res => {
        commit("addResource", { resource: "lists", data: res.data });
        // debugger;
        // dispatch("getLists");
      });
    },
    async deleteList({ commit, dispatch }, payload) {
      // debugger;
      let res = await api.delete("lists/" + payload.listId);

      console.log(res.data);
      // debugger;
      dispatch("getListsByBoardId", payload.boardId);
      // commit("setListsAfterDelete", res.data);
    },

    getListsByBoardId({ commit, dispatch }, boardId) {
      api.get("boards/" + boardId + "/lists").then(res => {
        commit("setResource", { resource: "lists", data: res.data });
      });
    }
  }
};
