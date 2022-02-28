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


  return (
    <Router>
      <NavbarTodo />
      <Switch>
        <Route exact path="/" component={(props)=> <Todos {...props} todos={todos}/> } />
        <Route path="/new-todo" component={Todo} />
        <Route path="/todos/:id" component={TodoDetails} />
      </Switch>
    </Router>
  );
}

export default App;
