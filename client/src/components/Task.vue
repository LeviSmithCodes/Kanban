<template>
  <li>
    {{taskData.description}}
    <button class="btn btn-danger" @click="deleteTask(taskData._id)">
      <i class="fas fa-trash-alt"></i>
    </button>
    <!--Dropdown primary-->
    <!-- Basic dropdown -->
    <button
      class="btn btn-primary dropdown-toggle mr-4"
      type="button"
      data-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >Basic dropdown</button>

    <div class="dropdown-menu">
      <a class="dropdown-item" href="#">Action</a>
      <a class="dropdown-item" href="#">Another action</a>
      <a class="dropdown-item" href="#">Something else here</a>
      <div class="dropdown-divider"></div>
      <a class="dropdown-item" href="#">Separated link</a>
    </div>
    <!-- Basic dropdown -->
    <!--/Dropdown primary-->
  </li>
  <!-- {{taskData}} -->
</template>

<script>
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
      }
    };
  },
  methods: {
    deleteTask(id) {
      this.$store.dispatch("deleteTask", {
        taskId: this.taskData.id,
        boardId: this.taskData.boardId
      });
    }
  },
  props: ["taskData"]
};
</script>

<style>
</style>