<template>
  <div class="boards">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark mb-3">
      <a
        class="navbar-brand"
        href="http://localhost:8080/#/"
        style="font-variant: all-small-caps"
      >Home</a>
      <div class="navbar" id="navbarSupportedContent">
        <button class="btn btn-warning" @click="logout">Log Out</button>
      </div>
    </nav>Welcome to your boards!
    <br />
    <br />
    <form @submit.prevent="createBoard">
      <input type="text" placeholder="title" v-model="newBoard.title" required />
      <input type="text" placeholder="description" v-model="newBoard.description" />

      <button type="submit">Create Board</button>
    </form>
    <br />
    <dl>
      <div v-for="board in boards" :key="board._id">
        <dt>
          <router-link
            :to="{name: 'board', params: {boardId: board._id}}"
            @click="setActiveBoard"
          >{{board.title}}</router-link>
          <button class="btn btn-danger" @click="deleteBoard(board._id)">
            <i class="fas fa-trash-alt trash-right"></i>
          </button>
        </dt>
      </div>
    </dl>
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
    },
    setActiveBoard() {
      this.$store.state.activeBoard = {};
      // debugger;
      this.$store.state.activeBoard = this.board;
      this.$store.commit("setActiveBoard", this.board);
    }
  }
};
</script>

<style scoped>
.trash-right {
  position: relative;
  float: right;
  cursor: pointer;
}

.trash-right:hover:before {
  font-family: "FontAwesome";
  content: "\f056";
}
</style>