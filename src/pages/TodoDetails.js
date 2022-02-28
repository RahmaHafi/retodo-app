
import React from 'react'
import DetailTable from '../components/DetailTable'


function TodoDetails(props) {

  const idTodoToShow = props.match.params.id
  console.log('details',idTodoToShow)
  const todo = props.todos.find((todo)=>todo.id ===idTodoToShow )
  return (
    <div>
     <DetailTable
     title={todo.title}
     description={todo.description}
     />
     
    </div>
  )
}

export default TodoDetails