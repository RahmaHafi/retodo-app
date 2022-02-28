
import React from 'react';
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';

function Todos(props) {
    console.log(`todosProps`, props);
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
                            </div>
                        </ListGroup.Item>

                    ))
                }
            </ListGroup>
        </Container>
    )
}

export default Todos