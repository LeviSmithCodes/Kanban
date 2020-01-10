<template>
  <div>
    <!-- <div v-for="list in lists" :key="list._id"> -->
    <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">{{listData.title}}</h5>
        <button class="btn btn-danger" @click="deleteList(listData._id)">
          <i class="fas fa-trash-alt"></i>
        </button>
      </div>
      <ul v-for="task in tasks" :key="task.id" class="list-group list-group-flush">
        <task-component :taskData="task" />
      </ul>
      <div class="card-body">
        <form @submit.prevent="createTask">
          <input type="text" placeholder="task" v-model="newTask.description" required />

          <button type="submit">Create Task</button>
        </form>
      </div>
      <!-- </div> -->
      <!-- {{listData}} -->
      <!-- {{lists.title}} -->
    </div>
    <!-- test data: {{tasks[0]}} -->
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
      debugger;
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
