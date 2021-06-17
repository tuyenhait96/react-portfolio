// libs
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
// components
import SectonTilte from './SectionTitle';
import ProjectItem from './ProjectItem';
// data
import projects from '../assets/data/projects';
// others
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation]);
const ProjectSectionStyled = styled.div`
  padding: 10rem 0;
  .projects {
    &__allItems {
      display: flex;
      gap: 3rem;
      margin-top: 5rem;
      @media only screen and (max-width: 768px) {
        flex-direction: column;
        max-width: 400px;
        margin: 0 auto;
        margin-top: 7rem;
        gap: 5rem;
      }
      .projectItem__img {
        @media only screen and (max-width: 768px) {
          width: 100%;
        }
      }
      .swiper-container {
        padding-top: 8rem;
        max-width: 100%;
        .swiper-button {
          &-prev,
          &-next {
            position: absolute;
            right: 60px;
            left: auto;
            top: 0;
            transform: translateY(50%);
            width: 50px;
            height: 50px;
            background-color: var(--deep-dark);
            color: var(--gray-1);
            border-radius: 8px;
            z-index: 10;
            &::after {
              font-size: 2rem;
            }
          }
          &-next {
            right: 0;
          }
        }
      }
    }
  }
`;
/**
 * ProjectSection
 */
const ProjectSection = () => (
  <ProjectSectionStyled>
    <div className="container">
      <SectonTilte heading="Projects" subHeading="some of my recent works" />
      <div className="projects__allItems">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          navigation
          breakpoints={{
            // when window width is >= 640px
            640: {
              slidesPerView: 1,
            },
            // when window width is >= 768px

            768: {
              slidesPerView: 2,
            },
            // when window width is >= 1200px
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {projects.map((project, index) => {
            if (index >= 5) return null;
            return (
              <SwiperSlide key={project.id}>
                <ProjectItem
                  img={project.img}
                  title={project.name}
                  desc={project.desc}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  </ProjectSectionStyled>
);

export default ProjectSection;
