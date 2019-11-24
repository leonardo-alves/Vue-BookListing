<template>
  <div>
    <h1>{{title}}</h1>
    <ul>
      <book-item v-for="book in books" :book="book" :key="book.title"></book-item>
    </ul>
    <hr />
    <book-form @addBook="appendBook"></book-form>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
import BookItem from "./BookItem";
import BookForm from "./BookForm";

export default {
  name: "BookList",
  computed: mapState({
    books: state => state.books.list
  }),

  components: {
    BookItem,
    BookForm
  },
  data() {
    return {
      title: "All Books",
    };
  },
  methods: mapActions("books", ["appendBook"])
};
</script>
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>