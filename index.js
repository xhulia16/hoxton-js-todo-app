//A user can:
//- View incomplete todos
//- When the "Show completed todos" box is checked, view completed todos as well
//- Enter a new todo, which will initially show as incomplete
//- Click a todo to toggle its completion

//Instructions
//- Start this project from scratch, write whatever HTML, CSS & JS you need
//- Create a state object
//- Create action functions that update state
//- Create render functions that read from state

let state={
    todos:[
        { text: 'Item1', completed: true },
        { text: 'Item2', completed: true },
        { text: 'Item3', completed: false },
        { text: 'Item4', completed: true },
        { text: 'Item5', completed: false }
    ],

    showCompleted:true,
}

function addTodo(text) {
    state.todos.push({ text: text, completed: false })
}

function deleteTodo(text){
  let updatedTodos= state.todos.filter(todo => todo.text !==text)
  state.todos=updatedTodos
}

function toggleTodo(text){
    let foundTodo=state.todos.find(todo => todo.text ===text)
    if (!foundTodo) return 
    foundTodo.completed=!foundTodo.completed
}