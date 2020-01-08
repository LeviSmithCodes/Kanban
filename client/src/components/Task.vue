<template>
  <li>
    {{taskData.description}}
    <button class="btn btn-danger" @click="deleteTask(taskData._id)">
      <i class="fas fa-trash-alt"></i>
    </button>
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