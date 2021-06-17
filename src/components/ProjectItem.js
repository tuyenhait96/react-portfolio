// libs
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
// images
import projectImg from '../assets/images/projectImg.png';

const ProjectItemStyled = styled.div`
  .projectItem {
    &__img {
      width: 100%;
      overflow: hidden;
      border-radius: 12px;
      display: inline-block;
      border: 3px solid var(--gray-2);
      @media only screen and (max-width: 768px) {
        height: 350px;
      }
      img {
        height: 100%;
      }
    }
    &__info {
      margin-top: 1rem;
      background-color: var(--deep-dark);
      padding: 1rem;
      border-radius: 12px;
    }
    &__title {
      font-size: 2.2rem;
      text-align: center;
    }
    &__desc {
      font-size: 1.6rem;
      font-family: 'RobotoMono Regular';
      margin-top: 1rem;
    }
  }
`;
/**
 * ProjectItem
 */
const ProjectItem = ({
  img = projectImg,
  title = 'Project Name',
  // desc = 'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
}) => (
  <ProjectItemStyled>
    <Link to="/projects" className="projectItem__img">
      <img src={img} alt="project img" />
    </Link>
    <div className="projectItem__info">
      <Link to="#">
        <h3 className="projectItem__title">{title}</h3>
      </Link>
      {/* <p className="projectItem__desc">{desc}</p> */}
    </div>
  </ProjectItemStyled>
);

export default ProjectItem;
