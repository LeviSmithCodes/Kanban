<template>
  <div>
    <i>Comment:</i>
    {{ commentData.content }}
    <!-- This should be a comment -->
    <button class="btn btn-danger" @click="deleteComment(commentData._id)">
      <i class="fas fa-trash-alt"></i>
    </button>
  </div>
  <!-- {{taskData}} -->
</template>

<script>
export default {
  name: "Comment",
  mounted() {
    // console.log("THIS IS NOT WORKING");
    // debugger;
    // this.getComments();
  },
  methods: {
    deleteComment(id) {
      this.$store.dispatch("deleteComment", {
        commentId: this.commentData.id,
        taskId: this.commentData.taskId
      });
    }
    // getComments() {
    //   this.$store.dispatch("getComments");
    // }
  },
  computed: {
    // availableLists() {
    //   return this.$store.state.lists;
    // }
    // comments() {
    //   return this.$store.state.comments;
    // }
  },
  props: ["commentData"]
};
</script>

<style>
</style>