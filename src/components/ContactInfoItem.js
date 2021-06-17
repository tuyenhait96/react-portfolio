// libs
import React from 'react';
import styled from 'styled-components';
import { MdPlace } from 'react-icons/md';
// components
import PText from './PText';

const ContactInfoItemStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 8px;
  background-color: var(--deep-dark);
  .icon {
    align-items: center;
    justify-content: center;
    padding: 1.3rem;
    border-radius: 50%;
    color: var(--white);
    background-color: var(--gray-2);
    svg {
      width: 3.5rem;
    }
  }
`;
/**
 * ContactInfoItem
 */
const ContactInfoItem = ({ icon = <MdPlace />, text = 'this is an info' }) => (
  <ContactInfoItemStyled>
    <div className="icon">{icon}</div>
    <div className="info">
      <PText>{text}</PText>
    </div>
  </ContactInfoItemStyled>
);

export default ContactInfoItem;
