<template>
  <li>
    {{taskData.description}}
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
      jobTitles: [
        { name: "Product designer", id: 1 },
        { name: "Full-stack developer", id: 2 },
        { name: "Product manager", id: 3 },
        { name: "Senior front-end developer", id: 4 }
      ],
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
        event.target.options[event.target.options.selectedIndex].text;
    }
  },
  computed: {
    availableLists() {
      return this.$store.state.lists;
    }
  },
  props: ["taskData"]
};
</script>

<style>
</style>