// libs
import React from 'react';
import styled from 'styled-components';

const PTextStyled = styled.div`
  max-width: 630px;
  margin: 0 auto;
  font-size: 1.8rem;
  @media only screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;
/**
 * PText
 */
const PText = ({ children }) => (
  <PTextStyled className="para">
    <p>{children}</p>
  </PTextStyled>
);

export default PText;
