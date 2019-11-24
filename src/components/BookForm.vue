<template>
  <div>
    <form v-on:submit.prevent="bookSubmit(bookTitle, bookAuthor)" action="#" method="post">
      <input v-model="bookTitle" type="text" name="title" value placeholder="Book Title" />
      <input v-model="bookAuthor" type="text" name="author" value placeholder="Book Author" />
      <button type="submit" name="button">Add Book</button>
    </form>
    <p class="error-message">{{errorMessage}}</p>
  </div>
</template>
<script>
import { mapState } from "vuex";

export default {
  name: "BookForm",
  computed: mapState({
    error: state => state.books.error
  }),
  props: ["books"],
  watch: {
    error(hasError) {
      if (hasError) {
        this.errorMessage = "Já existe um produto com o mesmo nome";
      } else {
        this.errorMessage = "";
      }
    }
  },
  data() {
    return {
      bookTitle: "",
      bookAuthor: "",
      errorMessage: ""
    };
  },
  methods: {
    bookSubmit(bookTitle, bookAuthor) {
      this.$emit("addBook", { title: bookTitle, author: bookAuthor });
    }
  }
};
</script>
<style scoped>
  .error-message {
    color: red;
  }
</style>