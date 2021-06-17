// libs
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactFormStyled = styled.div`
  width: 100%;
  .form-group {
    width: 100%;
    margin-bottom: 2rem;
    label {
      font-size: 1.8rem;
      input,
      textarea {
        width: 100%;
        margin-top: 1rem;
        padding: 1.2rem;
        background-color: var(--deep-dark);
        color: var(--gray-1);
        border: none;
        border-radius: 8px;
        font-size: 2rem;
        outline: none;
      }
      textarea {
        min-height: 250px;
        resize: vertical;
      }
    }
  }
  button[type='submit'] {
    display: inline-block;
    padding: 1rem 4rem;
    border: none;
    border-radius: 8px;
    background-color: var(--gray-1);
    color: var(--black);
    font-size: 2rem;
    outline: none;
    cursor: pointer;
  }
`;

/**
 * ContactForm
 */
const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <ContactFormStyled>
      <form>
        <div className="form-group">
          <label htmlFor="name">
            Your name
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="email">
            Your email
            <input
              type="text"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="form-group">
          <label htmlFor="message">
            Your message
            <textarea
              type="text"
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </label>
        </div>
        <button type="submit">send</button>
      </form>
    </ContactFormStyled>
  );
};

export default ContactForm;
