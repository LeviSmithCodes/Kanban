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
      <!-- {{lists.title}} -->
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
    this.$store.dispatch("getListsByBoardId", this.boardId);
    this.$store.dispatch("getBoardById", this.boardId);
  },
  data() {
    return {
      // lists: [],
      newList: {
        title: "",
        boardId: this.boardId
      }
    };
  },
  computed: {
    lists() {
      return this.$store.state.lists;
      // ) //   l => l.boardId == this.$route.params.id // .find(
    },
    board() {
      return (
        // TODO This does not work on page reload because the boards array is empty in the store
        this.$store.state.boards
        // .find(b => b._id == this.boardId) || {
        //   title: "Loading..."
        // }
      );
    }
  },
  methods: {
    createList() {
      let list = { ...this.newList };
      debugger;
      this.$store.dispatch("createList", list);
      this.newList = { title: "", boardId: this.boardId };
    },
    deleteList(id) {
      this.$store.dispatch("deleteList", { listId: id, boardId: this.boardId });
    }
  },
  props: ["boardId"]
};
</script>
