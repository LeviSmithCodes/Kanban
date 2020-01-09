<template>
  <li>
    {{taskData.description}}
    <ul v-for="comment in comments" :key="comment.id" class="list-group list-group-flush">
      <comment-component :commentData="comment" />
    </ul>
    <form @submit.prevent="createComment">
      <input type="text" placeholder="comment" v-model="newComment.content" required />
      <button type="submit">Create Comment</button>
    </form>
    <select class="form-control" @change="changeTaskList($event)">
      <option value selected disabled>Select List</option>
      <option v-for="list in availableLists" :value="list.id" :key="list.id">{{ list.title }}</option>
    </select>
    <button class="btn btn-danger" @click="deleteTask(taskData._id)">
      <i class="fas fa-trash-alt"></i>
    </button>
  </li>
  <!-- {{taskData}} -->
</template>

<script>
import CommentComponent from "../components/Comment";
export default {
  name: "Task",
  mounted() {
    // debugger;
    this.$store.dispatch("getTasks", this.taskData.listId);
  },
  data() {
    return {
      newComment: {
        content: "",
        taskId: this.taskData.id
      },
      selectedList: null
    };
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", {
        taskId: this.taskData.id,
        boardId: this.taskData.boardId
      });
    },
    changeTaskList(event) {
      this.selectedList =
        event.target.options[event.target.options.selectedIndex].value;
      console.log(this.selectedList);
      let newId = this.selectedList;
      let payload = { newListId: newId, currentTaskId: this.taskData.id };
      this.$store.dispatch("editTask", payload);
      console.log("newId made in changetasklist", newId);
    },
    createComment() {
      let comment = { ...this.newComment };
      debugger;
      this.$store.dispatch("createComment", comment);
      this.newComment = {
        content: "",
        taskId: this.taskData.id
      };
      // this.$store.dispatch("createTask", { listId: id, boardId: this.boardId });
    }
  },
  computed: {
    availableLists() {
      return this.$store.state.lists;
    },
    comments() {
      return this.$store.state.comments.filter(
        c => c.taskId == this.taskData.id
      );
    }
  },
  props: ["taskData"],
  components: {
    CommentComponent
  }
};
</script>

<style>
</style>