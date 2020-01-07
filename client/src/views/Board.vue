<template>
  <div class="board">
    <h2>{{board.title}}</h2>
    <div class="description">{{board.description}}</div>
    <form @submit.prevent="createList">
      <input type="text" placeholder="title" v-model="newList.title" required />

      <button type="submit">Create List</button>
    </form>
    <br />
    <div v-for="list in lists" :key="list._id">
      {{list.title}}
      <button class="btn btn-danger" @click="deleteList(list._id)">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  mounted() {
    this.$store.dispatch("getBoards");
  },
  data() {
    return {
      newList: {
        title: "",
        boardId: this.boardId
      }
    };
  },
  computed: {
    lists() {
      return (
        this.$store.state.lists.find(l => l.boardId == this.boardId) || {
          title: "Loading lists..."
        }
      );
    },
    board() {
      return (
        // TODO This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards.find(b => b._id == this.boardId) || {
          title: "Loading..."
        }
      );
    }
  },
  methods: {
    createList() {
      this.$store.dispatch("createList", this.newList);
      this.newList = { title: "" };
    }
  },
  props: ["boardId"]
};
</script>
