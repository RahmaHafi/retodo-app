
import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import DeleteModal from '../components/DeleteModal';

function Todos(props) {
    const handleDeleteThisTodo =(id)=> {
        props.deleteTodo(id)
    }

    return (
        <Container>
            <ListGroup className="mt-5">
                {
                    props.todos.map((todo) => (

                        <ListGroup.Item key={todo.id} variant="warning" className="d-flex justify-content-between">
                            <div>
                                <i className="bi bi-file-check-fill btn text-warning"></i>
                                <span>{todo.title}</span>
                            </div>
                            <div>
                                <i className="bi bi-eye-fill btn text-warning"></i>
                                <DeleteModal todo={todo} deleteThisTodo={handleDeleteThisTodo} />
                            </div>
                        </ListGroup.Item>

                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default Todos