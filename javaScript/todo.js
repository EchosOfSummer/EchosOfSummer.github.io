// Assignment 6 - To Do List

// Load saved todos for localStorage (or start empty) and cache the main DOM elements
const STORAGE_KEY = 'todo-list'
let todos = JSON.parse(localStorage.getItem(STORAGE_KEY)) || []

const todoList = document.getElementById('todo-list')
const input = document.getElementById('new-todo')
const btnAdd = document.getElementById('add-todo')

// persist current todos to localStorage
const saveTodos = () => localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
// if input has non-empty text, add a new incomplete todo, persist, clear input, re-render, and refocus the input.
const addTodo = () => {
    const text = input.value.trim()
    if (text !== '') {
        todos.push({ text: text, completed: false})
        saveTodos()
        input.value = ''
        renderTodos()
        input.focus()
    }
}

// assignment - minimal version
// got the basic version as what the assignment specs said. seems to work fine. i got my code to work by referencing my old code and reworking my way through it. I ended up going down a rabbit hole and ended up doing more than what the assignment asked for. I believe I accidently completed the advanced version. But had fun and learned different ways to do things.

// const renderTodos = () => {
//     todoList.innerHTML = ''
//     todos.forEach((todo) => {
//         const li = document.createElement('li')
//         li.textContent = todo.text
//         todoList.appendChild(li)
//     })
// }
// const addTodo = () => {
//     const text = input.value.trim()
//     if (!text) return
//     todos.push({ text, completed: false })
//     saveTodos()
//     input.value = ''
//     renderTodos()
//     input.focus()
// }
// btnAdd.addEventListener('click', addTodo)
// input.addEventListener('keydown', (e) => {
//     if (e.key === 'Enter') addTodo()
// })
// renderTodos()

// advanced version - with checkbox and delete button
// rebuilds the todo list: clears current list, then for each todo creates an <li> with a checkbox (toggles completed and saves) and a delete buttton (removes item, saves, and re-renders)
const renderTodos = () => {
    todoList.innerHTML = ''
    todos.forEach((todo, index) => {
        const li = document.createElement('li')
        const chx = document.createElement('input')
        chx.type = 'checkbox'
        chx.checked = todo.completed
        chx.addEventListener('change', () => {
            todo.completed = chx.checked
            saveTodos()
            //renderTodos() // not needed
        })
        const btnDel = document.createElement('button')
        btnDel.textContent = 'Delete'
        btnDel.addEventListener('click', () => {
            todos.splice(index, 1) // delete one item at position index, better than filter
            //todos = todos.filter(x => x.text !== todo.text) // can delete all with same text, not good
            saveTodos()
            renderTodos()
        })
        li.appendChild(chx)
        li.appendChild(document.createTextNode(todo.text))
        li.appendChild(btnDel)
        todoList.appendChild(li)
    })
}

// wire up events: clicking add button or pressing enter adds a todo; then renderTodos() fills the list with whatever was saved.
btnAdd.addEventListener('click', () => addTodo())
input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') addTodo()
})

renderTodos()

// Assignment 7 - Pokemon Image