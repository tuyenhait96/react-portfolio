// libs
import React, { useState } from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
// components
import SectionTitle from './SectionTitle';
import PText from './PText';
// data
import testimonials from '../assets/data/testimonials';

const TestimonialsSectionStyled = styled.div`
  padding: 10rem 0;
  text-align: center;
  .testimonial {
    &__wrapper {
      position: relative;
      max-width: 700px;
      margin: 0 auto;
      .fade-enter {
        opacity: 0;
        transform: scale(0.96);
      }
      .fade-enter-active {
        opacity: 1;
        transform: scale(1);
        transition: 250ms ease-in opacity;
        transition-property: opacity, tranform;
      }
      .fade-exit {
        opacity: 1;
        transform: scale(1);
      }
      .fade-exit-active {
        opacity: 0;
        transform: scale(0.96);
        transition: 250ms ease-in opacity;
        transition-property: opacity, tranform;
      }
    }
    &__info {
      width: 100%;
      height: fit-content;
      margin-top: 5rem;
      padding: 3rem;
      background-color: var(--deep-dark);
      border-radius: 12px;
    }
    &__desc {
      .para {
        text-align: center;
      }
    }
    &__name {
      margin-top: 4rem;
      font-family: 'Montserrat Bold';
      font-size: 2.2rem;
    }
    &__title {
      margin-top: 0.3rem;
      font-size: 1.6rem;
    }
  }
  .arrows {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    svg {
      width: 30px;
      pointer-events: none;
    }
    .next,
    .prev {
      width: fit-content;
      margin: 0 0.5rem;
      padding: 0.5rem 2rem;
      background-color: var(--deep-dark);
      border-radius: 8px;
      cursor: pointer;
    }
  }
`;
/**
 * TestimonialsSection
 */
const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSlide = testimonials[activeIndex];
  const handleNext = () => {
    console.log(activeIndex, testimonials.length - 1);
    if (activeIndex >= testimonials.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((oldIndex) => oldIndex + 1);
    }
  };
  const handlePrev = () => {
    if (activeIndex <= 0) {
      setActiveIndex(testimonials.length - 1);
    } else {
      setActiveIndex((oldIndex) => oldIndex - 1);
    }
  };
  return (
    <TestimonialsSectionStyled>
      <div className="container">
        <SectionTitle
          heading="TESTIMONIALS"
          subHeading="see what our clients say about us"
        />
        <div className="testimonial__wrapper">
          <SwitchTransition component={null}>
            <CSSTransition key={activeSlide.id} timeout={300} classNames="fade">
              <div className="testimonial__info">
                <div className="testimonial__desc">
                  <PText>{activeSlide.desc}</PText>
                </div>
                <h2 className="testimonial__name">{activeSlide.name}</h2>
                <p className="testimonial__title">
                  {activeSlide.title}, <br /> {activeSlide.org}
                </p>
              </div>
            </CSSTransition>
          </SwitchTransition>
        </div>
        <div className="arrows">
          <div
            className="prev"
            onClick={handlePrev}
            tabIndex={0}
            role="button"
            onKeyDown={handlePrev}
          >
            <MdArrowBack />
          </div>
          <div
            className="next"
            onClick={handleNext}
            tabIndex={0}
            role="button"
            onKeyDown={handleNext}
          >
            <MdArrowForward />
          </div>
        </div>
      </div>
    </TestimonialsSectionStyled>
  );
};

export default TestimonialsSection;
