import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Form() {
    const [formName, setFormName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setFormName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        }

        setFormName('');
        setEmail('');
        setMessage('');
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="name">Name:</label>
                <input
                    value={formName}
                    name="name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
            </div>
            <div>
                <label htmlFor="message">Message:</label>
                <textarea
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    placeholder="Message"
                />
            </div>
            {errorMessage && (
                <div>
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}
            <button type="submit">Submit</button>
        </form>
    );
}