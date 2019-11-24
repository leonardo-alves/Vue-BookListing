// initial state
const state = {
  list: [
    { title: "Self-Reliance", author: "Ralph Waldo Emerson" },
    { title: "American Gods", author: "Neil Gaiman" },
    { title: "Amusing Ourselves to Death", author: "Neil Postman" }
  ],
  error: false,
};

// getters
const getters = {};

// actions
const actions = {
  appendBook({ state, commit }, book) {
    if (!state.list.some(b => b.title === book.title)) {
      commit('addBook', book);
    }
     else {
      commit('errorAddingBook');
     }
  }
};

// mutations
const mutations = {
  addBook(state, book) {
    state.error = false;
    state.list.push(book);
  },
  errorAddingBook(state) {
    state.error = true;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
