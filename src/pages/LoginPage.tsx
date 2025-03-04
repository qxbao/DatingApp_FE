import { useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap'
import { FaHeart } from 'react-icons/fa6'
import "./../assets/styles/LoginPage.css"
import RegisterModal from '../components/RegisterModal';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleRegisterModal = () => setShowRegisterModal(!showRegisterModal);

    return (
        <>
            <Container>
                <div className="d-flex flex-column align-items-center vh-100 justify-content-center flex-1">
                    <div className='text-white text-center mb-4'>
                        <div>
                            <FaHeart className='display-5 me-2' />
                        </div>
                        <div className="fw-black display-4 me-2">
                            Heartbeat
                        </div>
                        <div className='text-light fs-5 fst-italic'>- D8 B4 2 L8 -</div>
                    </div>
                    <div className='d-flex flex-column' style={{ width: '30vw', minWidth: '300px' }}>
                        <FloatingLabel label="Email" className="mb-3">
                            <Form.Control
                                className="text-theme border-3 rounded-3 shadow"
                                name="email"
                                autoComplete="on"
                                type="text"
                                placeholder="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}/>
                        </FloatingLabel>
                        <FloatingLabel label="Password" className="mb-5">
                            <Form.Control
                                className="text-theme border-3 rounded-3 shadow"
                                name="password"
                                autoComplete="on"
                                type="password"
                                placeholder="name@example.com"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)} />
                        </FloatingLabel>
                        <button className='btn btn-dark fw-black fs-5 p-3 border-0 rounded-5'>SIGN IN</button>
                        <div className='text-center mt-3 text-light'>
                            Don't have an account? <a className='text-light' href="#" onClick={(e) => { e.preventDefault(); handleRegisterModal(); }}>Create one now</a>
                        </div>
                    </div>
                </div>
            </Container>

            <RegisterModal 
                show={showRegisterModal} 
                handleClose={handleRegisterModal} 
            />
        </>
    )
}