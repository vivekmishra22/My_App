import React from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginForm = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col md={6} className='mt-2 border rounded'>
                        <Form className='my-2'>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default LoginForm
