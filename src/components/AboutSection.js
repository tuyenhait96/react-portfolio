// libs
import React from 'react';
import styled from 'styled-components';
// components
import SectionTitle from './SectionTitle';
import PText from './PText';
import Button from './Button';
// images
import avatar2 from '../assets/images/Tuyen_2.jpg';

const AboutSectionStyled = styled.div`
  padding: 10rem 0;
  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      text-align: center;
    }
    .aboutSection {
      &__left {
        flex: 1;
        @media only screen and (max-width: 950px) {
          flex: 4;
        }
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
        .section-title {
          text-align: left;
          @media only screen and (max-width: 768px) {
            text-align: center;
          }
        }
        .para {
          margin: 2rem 0 0 0;
          @media only screen and (max-width: 768px) {
            margin: 0 auto;
            margin-top: 2rem;
          }
        }
        .aboutSection__buttons {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 2rem;
          margin-top: 2rem;
          @media only screen and (max-width: 768px) {
            flex-direction: column;
            gap: 0;
          }
          .button-wrapper,
          a {
            @media only screen and (max-width: 768px) {
              width: 100%;
              text-align: center;
            }
          }
        }
      }
      &__right {
        flex: 1;
        @media only screen and (max-width: 950px) {
          flex: 3;
        }
        @media only screen and (max-width: 768px) {
          width: 100%;
          margin-top: 3rem;
        }
      }
    }
  }
`;

/**
 * AboutSection
 */
const AboutSection = () => (
  <AboutSectionStyled>
    <div className="container">
      <div className="aboutSection__left">
        <SectionTitle subHeading="Let me introduce myself" heading="About me" />
        <PText>
          A Front End Developer with experience in analysis, design,
          development, implementation and testing. Specialize in developing web
          application for React (A JavaScript library for building user
          interfaces).
        </PText>
        <div className="aboutSection__buttons">
          <Button btnLink="/projects" btnText="Works" />
          <Button btnLink="/about" btnText="Read More" outline />
        </div>
      </div>
      <div className="aboutSection__right">
        <img src={avatar2} alt="avatar_2" />
      </div>
    </div>
  </AboutSectionStyled>
);

export default AboutSection;
