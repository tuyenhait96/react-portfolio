// libs
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const FooterColStyled = styled.div`
  .heading {
    margin-bottom: 2rem;
    font-size: 2.4rem;
  }
  ul {
    li {
      margin-bottom: 1rem;
      a {
        font-size: 1.8rem;
      }
    }
  }
`;
const FooterCol = ({
  heading = 'col heading',
  links = [
    {
      type: 'Link',
      title: 'Home',
      path: '/home',
    },
    {
      type: 'Link',
      title: 'About',
      path: '/about',
    },
  ],
}) => (
  <FooterColStyled>
    <h1 className="heading">{heading}</h1>
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          {link.type === 'Link' ? (
            <Link to={link.path}>{link.title}</Link>
          ) : (
            <a href={link.path} rel="noreferrer">
              {link.title}
            </a>
          )}
        </li>
      ))}
    </ul>
  </FooterColStyled>
);

export default FooterCol;
