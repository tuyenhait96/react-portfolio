// libs
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
// components
import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
// data
import projectInfo from '../assets/data/projects';

const ProjectsStyled = styled.div`
  padding: 10rem 0;
  .projects {
    &__searchBar {
      position: relative;
      width: 300px;
      margin-top: 5rem;
      @media only screen and (max-width: 768px) {
        width: 100%;
      }
      form {
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
        input {
          width: 100%;
          padding: 0.8rem 3rem 0.8rem 2rem;
          font-size: 2rem;
          color: var(--black);
          border-radius: 6px;
          outline: none;
          border: none;
          @media only screen and (max-width: 768px) {
            width: 100%;
          }
        }
        .searchIcon {
          position: absolute;
          right: 1rem;
          width: 2rem;
          path {
            color: var(--deep-dark);
          }
        }
      }
    }
    &__allItems {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 5rem;
      margin-top: 5rem;
    }
  }
`;
/**
 * Projects
 */
const Projects = () => {
  const [searchText, setSearchText] = useState('');
  const [projectData, setProjectData] = useState(projectInfo);
  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value.length > 0) {
      setProjectData(projectInfo);
    }
  };

  useEffect(() => {
    if (!searchText) return;
    setProjectData(() =>
      projectInfo.filter((project) =>
        project.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);

  return (
    <ProjectsStyled>
      <div className="container">
        <SectionTitle heading="Projects" subHeading="some of my recent works" />
        <div className="projects__searchBar">
          <form>
            <input
              type="text"
              onChange={handleChange}
              value={searchText}
              placeholder="Project name"
            />
            <MdSearch className="searchIcon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projectData.map((project) => (
            <ProjectItem
              key={project.id}
              title={project.name}
              img={project.img}
              desc={project.desc}
            />
          ))}
        </div>
      </div>
    </ProjectsStyled>
  );
};

export default Projects;
