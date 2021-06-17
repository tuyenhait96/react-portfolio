// libs
import React from 'react';
import styled from 'styled-components';
// components
import PText from './PText';
import Button from './Button';
// images
import avatar1 from '../assets/images/Tuyen_1.jpg';
import socialMediaArrow from '../assets/images/social-media-arrow.svg';
import scrollDownArrow from '../assets/images/scroll-down-arrow.svg';

const HeroSectionStyled = styled.div`
  .hero {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    text-align: center;
    min-height: 1000px;
    &__heading {
      font-size: 2rem;
      margin-bottom: -4rem;
      position: relative;
      @media only screen and (max-width: 768px) {
        font-size: 1.4rem;
        margin-bottom: -3rem;
      }
      span {
        display: inline-block;
        width: 100%;
      }
      .hero__name {
        font-size: 7rem;
        font-family: 'Montserrat SemiBold';
        color: var(--white);
        @media only screen and (max-width: 768px) {
          font-size: 4.5rem;
        }
      }
    }
    .hero__img {
      max-width: 900px;
      width: 100%;
      height: 600px;
      margin: 0 auto;
      border: 2px solid var(--gray-1);
      @media only screen and (max-width: 768px) {
        height: 300px;
      }
    }
    .hero {
      &__info {
        margin-top: -16rem;
        @media only screen and (max-width: 768px) {
          margin-top: 3rem;
        }
      }
      &__social,
      &__scrollDown {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        position: absolute;
      }
      &__social {
        left: 50px;
        @media only screen and (max-width: 768px) {
          left: 0;
          bottom: -10%;
          width: 40px;
        }
      }
      &__scrollDown {
        right: 50px;
        img {
          max-height: 70px;
        }
        @media only screen and (max-width: 768px) {
          right: 0;
          width: 20px !important;
          gap: 1rem;
          p {
            font-size: 1.3rem;
          }
        }
      }
      &__social__indicator,
      &__scrollDown {
        width: 50px;
        p {
          font-size: 1.6rem;
          transform: translateY(-70px) rotate(90deg);
          letter-spacing: 0.7rem;
          text-transform: uppercase;
        }
        img {
          max-height: 45px;
          width: 16px;
          margin: 0 auto;
          object-fit: contain;
        }
      }
      &__social__indicator {
        @media only screen and (max-width: 768px) {
          width: 20px;
          p {
            font-size: 1.2rem !important;
          }
          img {
            max-height: 22px !important;
          }
        }
      }
    }

    &__social__text {
      ul {
        li {
          margin-bottom: 10px;
          a {
            display: inline-block;
            font-size: 1.6rem;
            transform: rotate(-90deg);
            letter-spacing: 1px;
            margin-bottom: 2rem;
            @media only screen and (max-width: 768px) {
              font-size: 1.2rem;
              margin-bottom: 20px;
            }
          }
        }
      }
    }
  }
`;
/**
 * HeroSection
 */
const HeroSection = () => (
  <HeroSectionStyled>
    <div className="hero">
      <div className="container">
        <h1 className="hero__heading">
          <span>Hello, This is </span>
          <span className="hero__name">Ha Thi Ngoc Tuyen</span>
        </h1>
        <div className="hero__img">
          <img src={avatar1} alt="avatar1" />
        </div>
        <div className="hero__info">
          <PText>
            Over 2 years of experience in the area of software development for
            web and mobiles, which includes understanding requirement
            specification, working on software design, coding, testing and
            maintenance.
          </PText>
          <Button btnLink="/projects" btnText="see my works" />
        </div>
        <div className="hero__social">
          <div className="hero__social__indicator">
            <p>Follow</p>
            <img src={socialMediaArrow} alt="socialMediaArrow" />
          </div>
          <div className="hero__social__text">
            <ul>
              <li>
                <a
                  href="https://www.facebook.com/samy.ha.71/"
                  target="_blank"
                  rel="noreferrer"
                >
                  FB
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/samy.ha.71/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ha
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/samy.ha.71/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tuyen
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hero__scrollDown">
          <p>Scroll</p>
          <img src={scrollDownArrow} alt="scrollDownArrow" />
        </div>
      </div>
    </div>
  </HeroSectionStyled>
);

export default HeroSection;
