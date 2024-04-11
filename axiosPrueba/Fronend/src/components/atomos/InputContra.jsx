// components/atomos/PasswordInput.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { EyeFill, EyeSlashFill } from 'react-bootstrap-icons';

const PasswordInput = ({ label, placeholder }) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Form.Group controlId="password" className='w-50'>
            {label && <Form.Label>{label}</Form.Label>}
            <div className="input-group ">
                <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    className="w-5 border border-success "
                    style={{borderBlockEnd:'0px',width:'10px'}}

                />
                <Button
                    variant="outline-secondary"
                    onClick={togglePasswordVisibility}
                    className="border border-success"

                    >
                    {showPassword ? <EyeSlashFill /> : <EyeFill />}
                </Button>
            </div>
        </Form.Group>
    );
};

export default PasswordInput;