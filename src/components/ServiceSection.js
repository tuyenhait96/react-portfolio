// libs
import React from 'react';
import styled from 'styled-components';
import { MdCode, MdDesktopMac } from 'react-icons/md';
// components
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServiceSectionStyled = styled.div`
  padding: 10rem 0;
  @media only screen and (max-width: 768px) {
    padding: 0;
  }
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
    @media only screen and (max-width: 768px) {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
    }
  }
`;
/**
 * ServiceSection
 */
const ServiceSection = () => (
  <ServiceSectionStyled>
    <div className="container">
      <SectionTitle heading="Services" subHeading="What i will do for you" />
      <div className="services__allItems">
        <ServicesSectionItem
          icon={<MdDesktopMac />}
          title="web design"
          desc="I do ui/ux design for the website that helps website to get a unique look."
        />
        <ServicesSectionItem
          icon={<MdCode />}
          title="web dev"
          desc="I also develop the websites. I create high performance website with blazing fast speed."
        />
      </div>
    </div>
  </ServiceSectionStyled>
);

export default ServiceSection;
