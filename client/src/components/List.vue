<template>
  <!--<div style="d-flex flex-row">-->
  <div class="col-3">
    <div class="card shadow" style="width: 20rem;">
      <div class="card-body">
        <button
          id="deleteList"
          class="btn btn-danger float-right"
          @click="deleteList(listData._id)"
        >
          <i class="fas fa-trash-alt"></i>
        </button>
        <h3 class="card-title">{{ listData.title }}</h3>
        <div class="card-body">
          <form @submit.prevent="createTask" style="display: inline-flex;">
            <input type="text" placeholder="Add task..." v-model="newTask.description" required />
            <div class="input-group-append">
              <button class="btn btn-warning" type="submit">
                <i class="fas fa-plus"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
      <ul
        v-for="task in tasks"
        :key="task.id"
        class="list-group list-group-flush"
        style="list-style-type:none"
      >
        <b>Task:</b>
        <task-component :taskData="task" />
      </ul>
    </div>
  </div>
</template>

<script>
import TaskComponent from "../components/Task";
export default {
  name: "List",
  mounted() {
    // debugger;
    this.$store.dispatch("getTasks", this.listData.id);
  },
  data() {
    return {
      // lists: [],
      newTask: {
        description: "",
        boardId: this.listData.boardId,
        listId: this.listData.id
      }
    };
  },
  computed: {
    // lists() {
    //   return this.$store.state.lists;
    //   // ) //   l => l.boardId == this.$route.params.id // .find(
    // },
    tasks() {
      return this.$store.state.tasks[this.listData.id];
    }
  },
  components: {
    TaskComponent
  },
  methods: {
    deleteList(id) {
      this.$store.dispatch("deleteList", {
        listId: id,
        boardId: this.listData.boardId
      });
    },
    createTask() {
      let task = { ...this.newTask };
      // debugger;
      this.$store.dispatch("createTask", task);
      this.newTask = {
        description: "",
        boardId: this.listData.boardId,
        listId: this.listData.id
      };
      // this.$store.dispatch("createTask", { listId: id, boardId: this.boardId });
    }
  },
  props: ["listData"]
};
</script>

<style scoped>
</style>
