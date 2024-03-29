/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


const CheckoutForm = ({ onConfirm }) => {
    const [userName, setUserName] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userEmailConfirmation, setUserEmailConfirmation] = useState('');
    const [emailMatchError, setEmailMatchError] = useState('');

    const handleConfirm = (e) => {
        e.preventDefault();

        if (userEmail === userEmailConfirmation) {
            const userData = {
                userName, userPhone, userEmail
            }

            onConfirm(userData);
        } else {
            setEmailMatchError('Emails error');
        }
    }

    return (


        <Form onSubmit={handleConfirm}>
            <Form.Group className="mx-auto my-2 w-50" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your Name" value={userName} onChange={({ target }) => setUserName(target.value)} />
            </Form.Group>

            <Form.Group className="mx-auto my-2 w-50" controlId="formBasicPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="text" placeholder="Enter your Phone" value={userPhone} onChange={({ target }) => setUserPhone(target.value)} />
            </Form.Group>

            <Form.Group className="mx-auto my-2 w-50" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your Email" value={userEmail} onChange={({ target }) => setUserEmail(target.value)} />
            </Form.Group>

            <Form.Group className="mx-auto my-2 w-50" controlId="formBasicEmailConfirmation">
                <Form.Label>Confirm Email</Form.Label>
                <Form.Control type="email" placeholder="Confirm your Email" value={userEmailConfirmation} onChange={({ target }) => setUserEmailConfirmation(target.value)} />
            </Form.Group>
            {emailMatchError && <p className="text-danger">{emailMatchError}</p>}

            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
}

export default CheckoutForm;