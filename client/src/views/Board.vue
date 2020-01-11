<template>
  <div class="board">
    <h2 class="title">{{board.title}}</h2>
    <div class="description">{{board.description}}</div>
    <form @submit.prevent="createList">
      <input type="text" placeholder="title" v-model="newList.title" required />

      <button type="submit">Create List</button>
    </form>
    <br />
    <div class="row" style="padding: 0rem 3rem">
      <div v-for="list in lists" :key="list._id">
        <List :listData="list" />
      </div>
    </div>
  </div>
</template>

<script>
import List from "../components/List";
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
        // This does not work on page reload because the boards array is empty in the store
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
      // debugger;
      this.$store.dispatch("createList", list);
      this.newList = { title: "", boardId: this.boardId };
    },
    deleteList(id) {
      this.$store.dispatch("deleteList", { listId: id, boardId: this.boardId });
    }
  },
  components: {
    List
  },
  props: ["boardId"]
};
</script>

<style>
.description,
.title {
  color: white !important;
  text-shadow: 2px 2px black;
}
</style>