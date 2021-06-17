// libs
import React from 'react';
import styled from 'styled-components';
// components
import PText from './PText';

const AboutInfoItemStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 5rem;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
    margin-top: 3rem;
  }
  .title {
    font-size: 2.4rem;
    @media only screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
  .items {
    position: absolute;
    left: 35rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    @media only screen and (max-width: 768px) {
      position: initial;
      gap: 1rem;
    }
    .item {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--deep-dark);
    }
  }
`;
/**
 * AboutInfoItem
 */
const AboutInfoItem = ({
  title = 'this is title',
  items = ['HTML', 'CSS', 'JS'],
}) => (
  <AboutInfoItemStyled className="aboutInfoItem">
    <h1 className="title">{title}</h1>
    <div className="items">
      {items.map((item, index) => (
        <div className="item" key={index}>
          <PText>{item}</PText>
        </div>
      ))}
    </div>
  </AboutInfoItemStyled>
);

export default AboutInfoItem;
