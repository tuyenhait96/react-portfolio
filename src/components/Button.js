// libs
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// data
import downloadCV from "../assets/data/HaThiNgocTuyen_FrontEnd.pdf";

const ButtonStyled = styled.div`
  margin-top: 2rem;
  .button {
    font-size: 2.2rem;
    background-color: ${(props) =>
    props.outline ? 'transparent' : 'var(--gray-1)'};
    padding: 0.7em 2em;
    border-radius: 8px;
    display: inline-block;
    border: 2px solid var(--gray-1);
    color: ${(props) => (props.outline ? 'var(--gray-1)' : 'black')};
    @media only screen and (max-width: 768px) {
      font-size: 1.8rem;
    }
  }
`;
/**
 * Button
 */
const Button = ({
  btnLink = '/',
  btnText = 'see my works',
  outline = false,
  download = false,
}) => (
  <ButtonStyled outline={outline} className="button-wrapper">
    {
      download ?
        <a className="button" href={downloadCV} download>{btnText}</a>
        :
        <Link className="button" to={btnLink}>
          {btnText}
        </Link>

    }
  </ButtonStyled>
);

export default Button;
