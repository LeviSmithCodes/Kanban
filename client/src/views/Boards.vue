<template>
  <div class="boards">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="http://localhost:8080/#/">Home</a>
      <div class="navbar" id="navbarSupportedContent">
        <button class="btn btn-warning" @click="logout">Log Out</button>
      </div>
    </nav>Welcome to your boards
    <br />
    <br />
    <form @submit.prevent="createBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />

      <button type="submit">Create Board</button>
    </form>
    <br />
    <div v-for="board in boards" :key="board._id">
      <router-link :to="{name: 'board', params: {boardId: board._id}}">{{board.title}}</router-link>
      <button class="btn btn-danger" @click="deleteBoard(board._id)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "boards",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newBoard: {
        title: "",
        description: ""
      }
    };
  },
  computed: {
    boards() {
      return this.$store.state.boards;
    }
  },
  methods: {
    createBoard() {
      this.$store.dispatch("createBoard", this.newBoard);
      this.newBoard = { title: "", description: "" };
    },
    logout() {
      this.$store.dispatch("logout");
    },
    deleteBoard(boardId) {
      this.$store.dispatch("deleteBoard", boardId);
    }
  }
};
</script>