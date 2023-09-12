import { Todo } from './Todo'

export class TodoList {
  private todos: Todo[] = []

  generarId () {
    const ids = this.todos.map(e => e.id)

    if (!ids.length) {
      ids.push(0)
    }

    return Math.max(...ids) + 1
  }

  addTodo (todo: Todo) {
    this.todos.push(todo)
  }

  getTodos () {
    return this.todos
  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter(e => e.id !== id)
  }

  completeTodo (id: number) {
    this.todos = this.todos.map(e => {
      if (e.id === id) {
        e.done = true
      }
      return e
    })
  }
}

const lista = new TodoList()

const todo1: Todo = {
  id: lista.generarId(),
  title: 'My first todo',
  done: false,
  date: new Date().toJSON().slice(0, 10)
}

lista.addTodo(todo1)

const todo2: Todo = {
  id: lista.generarId(),
  title: 'My second todo',
  done: false,
  date: new Date().toJSON().slice(0, 10)
}

lista.addTodo(todo2)

console.log(lista.getTodos())

lista.deleteTodo(2)

console.log(lista.getTodos())

lista.completeTodo(1)

console.log(lista.getTodos())
