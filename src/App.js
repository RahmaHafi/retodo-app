
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import NavbarTodo from './components/NavbarTodo';
import Todos from './pages/Todos';
import Todo from './pages/Todo';
import TodoDetails from './pages/TodoDetails';



function App() {
  return (
    <Router>

        <NavbarTodo />
        <Switch>
        <Route  exact path="/" component={Todos}/>
        <Route  path="/new-todo" component={Todo}/>
        <Route  path="/todos/:id" component={TodoDetails}/>
      </Switch>
    </Router>
  );
}

export default App;
