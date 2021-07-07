// libs
import React from 'react';
import styled from 'styled-components';
// components
import PText from '../components/PText';
import Button from '../components/Button';
import ContactBanner from '../components/ContactBanner';
import AboutInfoItem from '../components/AboutInfoItem';
import AboutTimelineItem from '../components/AboutTimelineItem';
// images
import aboutImg from '../assets/images/Tuyen_3.jpg';

const AboutStyled = styled.div`
  padding: 20rem 0 10rem 0;
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
  }
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      gap: 5rem;
    }
    .left {
      flex: 3;
      .about {
        &__subHeading {
          margin-bottom: 2rem;
          font-size: 2.2rem;
          @media only screen and (max-width: 768px) {
            font-size: 1.8rem;
          }
          span {
            padding: 0.5rem;
            border-radius: 8px;
            background-color: var(--deep-dark);
          }
        }
        &__heading {
          margin-bottom: 3rem;
          color: rgb(250, 43, 97);
          font-size: 3.6rem;
          @media only screen and (max-width: 768px) {
            font-size: 2.8rem;
          }
        }
        &__info {
          margin-bottom: 4rem;
          .para {
            max-width: 100%;
          }
        }
      }
    }
    .right {
      flex: 2;
      img {
        border: 2px solid var(--gray-1);
      }
    }
  }
  .about__info {
    &__items {
      margin-top: 15rem;
    }
    &__item {
      margin-bottom: 10rem;
      &__heading {
        font-size: 3.6rem;
        text-transform: uppercase;
        @media only screen and (max-width: 768px) {
          font-size: 3rem;
        }
      }
      .mb-5 {
        margin-bottom: 5rem;
        @media only screen and (max-width: 768px) {
          margin-bottom: 3rem;
        }
      }
      &:nth-child(2) {
        .aboutInfoItem {
          &:nth-child(3) {
            margin-top: 15rem;
            @media only screen and (max-width: 768px) {
              margin-top: 3rem;
            }
            @media only screen and (min-width: 1024px) {
              margin-top: 10rem;
            }
          }
        }
      }
      &:last-child {
        .aboutInfoItem {
          margin-top: 10rem;
          @media only screen and (max-width: 768px) {
            margin-top: 3rem;
          }

          &:not(:nth-child(2)) {
            margin-top: 18rem;
            @media only screen and (max-width: 768px) {
              margin-top: 3rem;
            }
          }
          &:last-child {
            @media only screen and (min-width: 1024px) {
              margin-top: 13rem;
            }
          }
        }
      }
    }
  }
`;
/**
 * About
 */
const About = () => (
  <AboutStyled>
    <div className="container">
      <div className="top-section">
        <div className="left">
          <p className="about__subHeading">
            Hi, I am <span>Ha Thi Ngoc Tuyen</span>
          </p>
          <h2 className="about__heading">A Front End Developer</h2>
          <div className="about__info">
            <PText>
              I am from Ho Chi Minh, Viet Nam. A place of beauty and nature. I
              started coding since I was in high school. Coding is also an art
              for me. I love it and now I have the opportunity to design along
              with the coding.
              <br />
              <br />
              Over 2 years of experience in the area of software development for
              web and mobiles, which includes understanding requirement
              specification, working on software design, coding, testing and
              maintenance. Specialize in developing web application for React (A
              JavaScript library for building user interfaces).
              <br />
              <br />
              Solid background of computer science and practical programming
              skills. A self-motivated, quick learner and a good team player.
            </PText>
          </div>
          <Button btnText="Download CV" btnLink="#" download />
        </div>
        <div className="right">
          <img src={aboutImg} alt="aboutImg" />
        </div>
      </div>
      <div className="about__info__items">
        <div className="about__info__item">
          <h1 className="about__info__item__heading mb-5">Education</h1>
          <AboutTimelineItem
            title="Varsity"
            period="2014 - 2018"
            description="SaiGon Technology University."
          />
          <AboutTimelineItem
            title="School"
            period="2011 - 2014"
            description="Luong Van Can High School, Ho Chi Minh City."
          />
        </div>
        <div className="about__info__item">
          <h1 className="about__info__item__heading">My skills</h1>
          <AboutInfoItem
            title="Front End"
            items={[
              'HTML',
              'CSS',
              'React Hook',
              'NextJS',
              'Redux',
              'Redux Saga',
              'Javscript',
              'Typescript',
              'FlowJS',
              'UmiJS',
              'Ant Design',
              'Atomic Design',
              'Storybook',
              'WebSocket',
              'Front End Routing',
              'React Hook Form',
              'Formik',
            ]}
          />
          <AboutInfoItem title="Back End" items={['Node', 'Express']} />
          <AboutInfoItem
            title="Design"
            items={['Photoshop', 'Figma', 'Zeplin']}
          />
        </div>
        <div className="about__info__item">
          <h1 className="about__info__item__heading mb-5">EXPERIENCES</h1>
          <AboutTimelineItem
            title="City Now (Junior)"
            period="06/2020 - 06/2021"
            description="Built on 2 web applications for major foreign customers such as WincalX."
          />
          <AboutTimelineItem
            title="Wee Digital (Fresher)"
            period="03/2019 - 04/2020"
            description="Have built on more than 4 web applications for major domestic and foreign customers such as Viettinbank, ABBank, VinMart, Wee..."
          />
          <AboutTimelineItem
            title="M1 Studio (Intern)"
            period="11/2018 - 03/2019"
            description="Built on 1 web application for education. The client wants to create a website to establish credentials which aims at increasing online traffic and showing their professionalism as well as high quality in education..."
          />
        </div>
      </div>
    </div>
    <ContactBanner />
  </AboutStyled>
);

export default About;
