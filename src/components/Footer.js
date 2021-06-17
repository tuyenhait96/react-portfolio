// libs
import React from 'react';
import styled from 'styled-components';
// components
import PText from './PText';
import FooterCol from './FooterCol';

const FooterStyled = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer {
      &__col1 {
        flex: 2;
        &__title {
          margin-bottom: 1rem;
          font-size: 3.5rem;
        }
        .para {
          @media only screen and (max-width: 768px) {
            max-width: 100%;
          }
        }
      }
      &__col2,
      &__col3,
      &__col4 {
        flex: 1;
      }
    }
  }
  .copyright {
    margin-top: 5rem;
    padding: 1rem 0;
    background-color: var(--dark-bg);
    text-align: left;
    .para {
      margin-left: 0;
    }
    div {
      @media only screen and (max-width: 768px) {
        margin-top: 0;
      }
    }
  }
`;
/**
 * Footer
 */
const Footer = () => (
  <FooterStyled>
    <div className="container">
      <div className="footer__col1">
        <h1 className="footer__col1__title">Ha Thi Ngoc Tuyen</h1>
        <PText>
          A Front End Developer from Long An, Viet Nam. I always make websites
          that have unique designs and also has a good performance rate.
        </PText>
      </div>
      <div className="footer__col2">
        <FooterCol
          heading="Important Links"
          links={[
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
            {
              type: 'Link',
              title: 'Projects',
              path: '/projects',
            },
            {
              type: 'Link',
              title: 'Contact',
              path: '/Contact',
            },
          ]}
        />
      </div>
      <div className="footer__col3">
        <FooterCol
          heading="Contact Info"
          links={[
            {
              title: '+0708300743',
              path: 'tel:+0708300743',
            },
            {
              title: 'samyha71@gmail.com',
              path: 'mailto:samyha71@gmail.com',
            },
          ]}
        />
      </div>
      <div className="footer__col4">
        <FooterCol
          heading="Social Links"
          links={[
            {
              title: 'Facebook',
              path: 'https://www.facebook.com/samy.ha.71/',
            },
            {
              title: 'LinkedIn',
              path: 'https://www.linkedin.com/in/ha-thi-ngoc-tuyen-b3010b1a1/',
            },
          ]}
        />
      </div>
    </div>
    <div className="copyright">
      <div className="container">
        <PText>© 2021 - Ha Thi Ngoc Tuyen</PText>
      </div>
    </div>
  </FooterStyled>
);

export default Footer;
