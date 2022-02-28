
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Todo(props) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()){
      const newTodo={
        title:title,
        description:description
      }
      props.history.push("/")
      props.addTodo(newTodo)
      
    }
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="What is your new todo Title ?" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control value={description} onChange={(e) => setDescription(e.target.value)} as="textarea" rows={3} />
        </Form.Group>
        <div className='d-flex justify-content-center'>
          <Button type="submit" variant="outline-warning">
            <i className="bi bi-plus-circle-fill text-worning me-2"></i>
            Add Todo</Button>
        </div>
      </Form>
    </Container>
  )
}

export default Todo