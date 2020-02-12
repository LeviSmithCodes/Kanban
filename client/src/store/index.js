import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import router from "../router/index";
import AuthService from "../AuthService";
import boardModule from "./boardModule.js";
import listModule from "./listModule.js";
import { STATES } from "mongoose";

Vue.use(Vuex);

//Allows axios to work locally or live
let base = window.location.host.includes("localhost:8080")
  ? "//localhost:3000/"
  : "/";

let api = Axios.create({
  baseURL: base + "api/",
  timeout: 3000,
  withCredentials: true
});

export default new Vuex.Store({
  modules: {
    boardModule,
    listModule
  },
  state: {
    user: {},
    boards: [],
    activeBoard: {},
    lists: [],
    tasks: {},
    comments: {}
  },
  mutations: {
    setResource(state, payload) {
      state[payload.resource] = payload.data;
    },
    addResource(state, payload) {
      state[payload.resource].push(payload.data);
    },
    setUser(state, user) {
      state.user = user;
    },
    setBoards(state, boards) {
      state.boards = boards;
    },
    setTasks(state, data) {
      // state.tasks[data.listId] = data.tasks;
      //REVIEW
      Vue.set(state.tasks, data.listId, data.tasks);
    },
    setActiveBoard(state, board) {
      state.activeBoard = board;
    },
    setComments(state, data) {
      // debugger;
      Vue.set(state.comments, data.taskId, data.comments);
      // debugger;
    },
    resetState(state, user) {
      state.user = {};
      state.boards = [];
      state.activeBoard = {};
    }
  },
  actions: {
    //#region -- AUTH STUFF --
    async register({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Register(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async login({ commit, dispatch }, creds) {
      try {
        let user = await AuthService.Login(creds);
        commit("setUser", user);
        router.push({ name: "boards" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async logout({ commit, dispatch }) {
      try {
        let success = await AuthService.Logout();
        if (!success) {
        }
        commit("resetState");
        router.push({ name: "login" });
      } catch (e) {
        console.warn(e.message);
      }
    },
    async createTask({ commit, dispatch }, payload) {
      try {
        let res = await api.post("tasks", payload);
        // commit("setTasks", res.data);
        dispatch("getTasks", payload.listId);
      } catch (error) {
        console.warn(error.message);
      }
    },
    async getTasks({ commit, dispatch }, listId) {
      try {
        // debugger;
        let res = await api.get(`lists/${listId}/tasks`); //REVIEW
        // debugger;
        commit("setTasks", { listId, tasks: res.data });
      } catch (error) {
        console.warn(error.message);
      }
    },
    async deleteTask({ commit, dispatch }, payload) {
      // debugger;
      let res = await api.delete("tasks/" + payload.taskId);

      console.log(res.data);
      // debugger;
      // TODO why is this not updating the page without a refresh?
      dispatch("getTasks", payload.listId);
      // commit("setListsAfterDelete", res.data);
    },
    async editTask({ commit, dispatch }, payload) {
      let res = await api.put("tasks/" + payload.currentTaskId, payload);
      // debugger;
      console.log("index.js editTask says payload is", payload);
      dispatch("getTasks", payload.newListId);
      dispatch("getTasks", payload.currentListId);
    },
    //#endregion

    async createComment({ commit, dispatch }, payload) {
      try {
        let res = await api.post("comments", payload);
        // debugger;
        // commit("setComments", res.data);
        dispatch("getComments", payload.taskId);
        // debugger;
      } catch (error) {
        console.warn(error.message);
      }
    },
    async getComments({ commit, dispatch }, taskId) {
      try {
        let res = await api.get(`tasks/${taskId}/comments`); //REVIEW
        // debugger;
        commit("setComments", { taskId, comments: res.data });
        // debugger;
        // let res = await api.get("comments");
        // debugger;
        // commit("setComments", res.data);
      } catch (error) {
        console.warn(error.message);
      }
    },
    async deleteComment({ commit, dispatch }, payload) {
      // debugger;
      let res = await api.delete("comments/" + payload.commentId);

      console.log(res.data);
      // debugger;
      dispatch("getComments", payload.taskId);
      // commit("setListsAfterDelete", res.data);
    }

    //#region -- BOARDS --
    // moved to module
    // getBoards({ commit, dispatch }) {
    //   api.get("boards").then(res => {
    //     commit("setBoards", res.data);
    //   });
    // },
    // addBoard({ commit, dispatch }, boardData) {
    //   api.post("boards", boardData).then(serverBoard => {
    //     dispatch("getBoards");
    //   });
    // },
    // deleteBoard({ commit, dispatch }, boardId) {
    //   api.delete("boards/" + boardId).then(serverBoard => {
    //     dispatch("getBoards");
    //   });
    // }
    //#endregion

    //#region -- LISTS --

    //#endregion
  }
});
