import React from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'

function DetailTable({title,description}) {
    return (
        <Container className="mt-5">
            <Table  bordered hover>
                <tbody>
                    <tr>
                        <td>Title</td>
                        <td>{title}</td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td>{description}</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default DetailTable