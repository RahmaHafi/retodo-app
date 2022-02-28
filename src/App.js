import { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavbarTodo from './components/NavbarTodo';
import Todos from './pages/Todos';
import Todo from './pages/Todo';
import TodoDetails from './pages/TodoDetails';



function App() {
  const [todos, setTodos] = useState([{
    id: "1",
    title: "Learn Node.js",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
    completed: false
  },
  {
    id: "2",
    title: "Learn MongoDB",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
    completed: false
  }])
  const handleAddTodo = (obj) => {
    const newTodo = {
      id: Math.floor(Math.random() * 10000).toString(),
      completed: false,
      ...obj
    }
    setTodos(prevTodos => [...prevTodos, newTodo])
  }
  const handeleDelete = (idToDelete) => {

    setTodos(prevTodos => prevTodos.filter((todo) => todo.id !== idToDelete))

  }
  const handleToggle = (idToToggle) => {
    setTodos(prevTodos => prevTodos.map((todo) => {
      if (todo.id === idToToggle) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }else{
        return todo
      }
    }))
  }

  return (
    <Router>
      <NavbarTodo />
      <Switch>
        <Route exact path="/" component={(props) => <Todos
          {...props}
          todos={todos}
          deleteTodo={handeleDelete}
          onToddgle={handleToggle} />} />
        <Route path="/new-todo" component={(props) => <Todo {...props} addTodo={handleAddTodo} />} />
        <Route path="/todos/:id" component={(props) => <TodoDetails {...props} todos={todos} />} />
      </Switch>
    </Router>
  );
}

export default App;
