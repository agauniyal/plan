var app = new Vue({
  el: '#app',
  data: {
    newTodo: '',
    todos: [
      {
        text: 'Write down some new tasks',
        done: false
      }, {
        text: 'Check them to mark them completed',
        done: false
      }, {
        text: 'They will be striked off like this',
        done: true
      }, {
        text: 'At last, press Ctrl and Click to delete items from your list',
        done: false
      }
    ]
  },
  methods: {
    add() {
      if (this.newTodo.length < 1) {
        return;
      }

      this.todos.push({text: this.newTodo, done: false});
      this.newTodo = '';
    },
    toggleDone(index) {
      this.todos[index].done = !this.todos[index].done;
    },
    remove(index) {
      this.todos.splice(index, 1);
    }
  }
});
