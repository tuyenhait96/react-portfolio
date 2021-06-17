// libs
import React from 'react';
import styled from 'styled-components';

const SectionTitleStyled = styled.div`
  text-align: center;
  p {
    font-family: 'RobotoMono Regular';
    font-size: 2rem;
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
    }
  }
  h1 {
    font-family: 'Montserrat Bold';
    font-size: 6rem;
    margin-top: 0.5rem;
    text-transform: uppercase;
    @media only screen and (max-width: 768px) {
      font-size: 3.6rem;
    }
  }
`;
/**
 * SectionTitle
 */
const SectionTitle = ({
  subHeading = 'This is subHeding',
  heading = 'This is heading',
}) => (
  <SectionTitleStyled className="section-title">
    <p>{subHeading}</p>
    <h1>{heading}</h1>
  </SectionTitleStyled>
);

export default SectionTitle;
