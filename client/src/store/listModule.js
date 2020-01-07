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
    getLists({ commit, dispatch }) {
      api.get("lists").then(res => {
        commit("setResource", { resource: "lists", data: res.data });
      });
    },
    createList({ commit, dispatch }, listData) {
      api.post("lists", listData).then(res => {
        // commit("addResource", { resource: "lists", data: res.data });
        dispatch("getLists");
      });
    },
    deleteList({ commit, dispatch }, listId) {
      api.delete("lists/" + listId).then(serverList => {
        dispatch("getLists");
      });
    }
  }
};
