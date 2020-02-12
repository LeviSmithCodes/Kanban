<template>
  <li>
    <hr />
    <b>Task:</b>
    {{ taskData.description }}
    <button
      class="btn btn-danger delete-task"
      style="background: none; border: none;"
      @click="deleteTask(taskData._id)"
    >
      <i class="fas fa-minus-circle" style="color: grey; background: none;"></i>
    </button>
    <div>
      <select class="form-control" @change="changeTaskList($event)">
        <option value selected disabled>Move Task</option>
        <option
          v-for="list in availableLists"
          :value="list.id"
          :key="list.id"
          v-if="list.id != taskData.listId"
        >{{ list.title }}</option>
      </select>
    </div>
    <div class="card-body">
      <form @submit.prevent="createComment" style="display: inline-flex">
        <input type="text" placeholder="Add comment..." v-model="newComment.content" required />
        <div class="input-group-append">
          <button class="btn btn-secondary" type="submit">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </form>
    </div>
    <ul v-for="comment in comments" :key="comment.id" class="list-group list-group-flush">
      <comment-component :commentData="comment" />
    </ul>
  </li>
  <!-- {{taskData}} -->
</template> 

<script>
import CommentComponent from "../components/Comment";
export default {
  name: "Task",
  mounted() {
    // debugger;
    // this.$store.dispatch("getTasks", this.taskData.listId);
    this.$store.dispatch("getComments", this.taskData.id);
    // debugger;
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
      // debugger;
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
      // debugger;
      return this.$store.state.comments[this.taskData.id];
      // .filter(
      // c => c.taskId == this.taskData.id
      // );
    }
  },
  props: ["taskData"],
  components: {
    CommentComponent
  }
};
</script>

<style scoped>
.fa-minus-circle:hover:before {
  color: red;
}

hr {
  border: 0;
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0)
  );
}
</style>