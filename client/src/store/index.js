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
    tasks: [],
    comments: []
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
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    setActiveBoard(state, board) {
      state.activeBoard = board;
    },
    setComments(state, comments) {
      state.comments = comments;
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
        commit("setTasks", res.data);
      } catch (error) {
        console.warn(error.message);
      }
    },
    async getTasks({ commit, dispatch }) {
      try {
        // debugger;
        let res = await api.get("tasks");
        // debugger;
        commit("setTasks", res.data);
      } catch (error) {
        console.warn(error.message);
      }
    },
    async deleteTask({ commit, dispatch }, payload) {
      // debugger;
      let res = await api.delete("tasks/" + payload.taskId);

      console.log(res.data);
      // debugger;
      dispatch("getTasks", payload.listId);
      // commit("setListsAfterDelete", res.data);
    },
    async editTask({ commit, dispatch }, payload) {
      let res = await api.put("tasks/" + payload.currentTaskId, payload);
      debugger;
      dispatch("getTasks", res.data);
    },
    //#endregion

    async createComment({ commit, dispatch }, payload) {
      try {
        let res = await api.post("comments", payload);
        commit("setComments", res.data);
      } catch (error) {
        console.warn(error.message);
      }
    },
    async getComments({ commit, dispatch }) {
      try {
        debugger;
        let res = await api.get("comments");
        debugger;
        commit("setComments", res.data);
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
