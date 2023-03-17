<template>
    <div class="card mb-3">
      <div class="card-body">
        <h5 class="card-title">{{ todo.title }}</h5>
        <p class="card-text">{{ todo.description }}</p>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            :id="'todo-item-' + todo.id"
            :checked="todo.completed"
            @change="onToggle"
          />
          <label class="form-check-label" :for="'todo-item-' + todo.id">
            {{ todo.completed ? 'Done' : 'Undone' }}
          </label>
        </div>
        <button class="btn btn-danger" @click="onDelete">Delete</button>
      </div>
    </div>
  </template>
  
  <script>

  export default {
    name: 'TodoItem',
    props: {
      todo: {
        type: Object,
        required: true
      }
    },
    methods: {
      onToggle() {
        this.$emit('toggle', this.todo.id);
      },
      onDelete() {
        this.$emit('delete', this.todo.id);
      }
    }
  }
  
  </script>
  
  