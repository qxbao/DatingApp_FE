import { useState } from 'react';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';

interface RegisterModalProps {
    show: boolean;
    handleClose: () => void;
}

export default function RegisterModal({ show, handleClose }: RegisterModalProps) {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Add registration logic
        console.log('Registration data:', formData);
        handleClose();
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            centered
            contentClassName="bg-dark text-white"
            size="lg"
        >
            <Modal.Header closeButton closeVariant="white" className="border-0">
                <Modal.Title className="text-start">
                    <div className="fw-bold">
                        Registration
                    </div>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Control
                                className="border-3 rounded-3 shadow"
                                name="fullName"
                                type="text"
                                placeholder="Full Name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                        <Col>
                            <Form.Control
                                className="border-3 rounded-3 shadow"
                                name="email"
                                type="text"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </Col>
                    </Row>
                    <div className="mt-4">
                        <Button
                            variant="outline-light"
                            size="sm"
                            type="submit"
                            className="fw-bold w-100 py-2 rounded-5"
                        >
                            CREATE ACCOUNT
                        </Button>
                        <p className="text-light fw-light text-center">
                            By signing up, you agree to our Terms of Service and Privacy Policy
                        </p>
                    </div>
                </Form>
            </Modal.Body>
        </Modal>
    );
}