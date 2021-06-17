// libs
import React from 'react';
import styled from 'styled-components';
// components
import Button from './Button';
import PText from './PText';

const ContactBannerStyled = styled.div`
  padding: 10rem 0;
  .contactBanner {
    &__wrapper {
      background-color: var(--deep-dark);
      border-radius: 12px;
      padding: 5rem 0;
      text-align: center;
    }
    &__heading {
      margin-bottom: 2rem;
      font-size: 4rem;
      @media only screen and (max-width: 768px) {
        font-size: 2.8rem;
      }
    }
  }
`;
/**
 * ContactBanner
 */
const ContactBanner = () => (
  <ContactBannerStyled>
    <div className="container">
      <div className="contactBanner__wrapper">
        <PText>Have a project mind</PText>
        <h3 className="contactBanner__heading">Let me help you</h3>
        <Button btnText="Contact Now" btnLink="/contact" />
      </div>
    </div>
  </ContactBannerStyled>
);

export default ContactBanner;
