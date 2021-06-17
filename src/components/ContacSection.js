// libs
import React from 'react';
import styled from 'styled-components';
import { MdEmail, MdLocalPhone } from 'react-icons/md';
// components
import SectionTitle from './SectionTitle';
import ContactInfoItem from './ContactInfoItem';
import Map from './Map';
// import ContactForm from './ContactForm';

const ContacSectionStyled = styled.div`
  padding: 10rem 0;
  .contactSection__wrapper {
    display: flex;
    justify-content: space-between;
    gap: 5rem;
    margin-top: 7rem;
    position: relative;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
    }
    &::after {
      position: absolute;
      content: '';
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 2px;
      height: 60%;
      background-color: var(--gray-1);
      @media only screen and (max-width: 768px) {
        display: none;
      }
    }
    .left,
    .right {
      width: 100%;
      max-width: 500px;
      @media only screen and (max-width: 768px) {
        max-width: 100%;
      }
    }
    .right {
      border-radius: 12px;
      @media only screen and (max-width: 768px) {
        padding: 4rem 2rem 2rem 2rem;
      }
    }
  }
`;
/**
 * ContacSection
 */
const ContacSection = () => (
  <ContacSectionStyled>
    <div className="container">
      <SectionTitle heading="Contact" subHeading="Get in touch" />
      <div className="contactSection__wrapper">
        <div className="left">
          <ContactInfoItem icon={<MdLocalPhone />} text="+0708300743" />
          <ContactInfoItem icon={<MdEmail />} text="samyha71@gmail.com" />
          <ContactInfoItem text="Ho Chi Minh, Viet Nam" />
        </div>
        <div className="right">
          {/* <ContactForm /> */}
          <Map />
        </div>
      </div>
    </div>
  </ContacSectionStyled>
);

export default ContacSection;
