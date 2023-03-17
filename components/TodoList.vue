<template>
    <div class="todo-item">
      <v-card>
        <v-card-title>
          {{ todo.title }}
        </v-card-title>
        <v-card-text>
          {{ todo.description }}
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" @click="toggleDone">
            {{ todo.done ? 'Undone' : 'Done' }}
          </v-btn>
          <v-btn color="error" @click="deleteTodo">
            Delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </template>
  
  <script>
  export default {
    props: ['todo'],
  
    methods: {
      toggleDone() {
        // Call your API to toggle the Todo's done status
        this.$axios.put(`/api/todos/${this.todo.id}`, {
          done: !this.todo.done
        })
        .then(response => {
          this.todo.done = !this.todo.done;
        })
        .catch(error => {
          console.error(error);
        });
      },
  
      deleteTodo() {
        // Call your API to delete the Todo
        this.$axios.delete(`/api/todos/${this.todo.id}`)
        .then(response => {
          this.$emit('delete-todo', this.todo.id);
        })
        .catch(error => {
          console.error(error);
        });
      }
    }
  }
  </script>
  
  <style>
  .todo-item {
    margin-bottom: 20px;
  }
  </style>
  