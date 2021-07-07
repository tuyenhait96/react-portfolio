// libs
import React from "react";
import styled from "styled-components";

const AboutTimelineItemStyled = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0 0 35px 1.375rem;
  border-left: 1px solid #f0f0f6;
  &::before {
    position: absolute;
    top: 0;
    left: -7px;
    content: "";
    width: 13px;
    height: 13px;
    border-radius: 50%;
    background-color: rgb(250, 43, 97);
    box-shadow: 0 0 0 4px rgb(250 43 97 / 25%);
  }
  &:last-child{
    padding-bottom: 0;
    border: 0;
  }
  .title {
    font-size: 2.4rem;
    line-height: 0.5;
    @media only screen and (max-width: 768px) {
      font-size: 2rem;
      line-height: 1;
    }
  }
  .period {
    margin-top: 14px;
    color: rgb(140,140,142);
    font-size: 1.8rem;

  }
  .description {
    margin-top: 14px;
    color: #d5d5d5;
    font-size: 1.5rem;
  }
`;
/**
 * AboutTimelineItem
 */
const AboutTimelineItem = ({
  title = "Creative Director",
  period = "2015 — Present",
  description = "Nemo enim ipsam voluptatem blanditiis praesentium voluptum delenit atque corrupti, quos dolores et qvuas molestias exceptur.",
}) => (
  <AboutTimelineItemStyled className="aboutTimelineItem">
    <h1 className="title">{title}</h1>
    <span className="period">{period}</span>
    <p className="description">{description}</p>
  </AboutTimelineItemStyled>
);

export default AboutTimelineItem;
