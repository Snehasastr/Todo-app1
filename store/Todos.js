export const state = () => ({
    todos: []
  });
  
  export const mutations = {
    setTodos(state, todos) {
      state.todos = todos;
    },
  
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  
    updateTodo(state, updatedTodo) {
      const index = state.todos.findIndex(todo => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
  
    deleteTodo(state, todoId) {
      const index = state.todos.findIndex(todo => todo.id === todoId);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    }
  };
  
  export const actions = {
    async fetchTodos({ commit }) {
      try {
        const response = await this.$axios.get('/api/todos');
        const todos = response.data;
        commit('setTodos', todos);
      } catch (error) {
        console.error(error);
      }
    },
  
    async addTodo({ commit }, todoData) {
      try {
        const response = await this.$axios.post('/api/todos', todoData);
        const newTodo = response.data;
        commit('addTodo', newTodo);
      } catch (error) {
        console.error(error);
      }
    },
  
    async updateTodoStatus({ commit }, { todoId, done }) {
      try {
        const response = await this.$axios.put(`/api/todos/${todoId}`, {
          done: done
        });
        const updatedTodo = response.data;
        commit('updateTodo', updatedTodo);
      } catch (error) {
        console.error(error);
      }
    },
  
    async deleteTodo({ commit }, todoId) {
      try {
        const response = await this.$axios.delete(`/api/todos/${todoId}`);
        commit('deleteTodo', todoId);
      } catch (error) {
        console.error(error);
      }
    }
  };
  