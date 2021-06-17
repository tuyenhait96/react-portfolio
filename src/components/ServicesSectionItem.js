// libs
import React from 'react';
import styled from 'styled-components';
import { MdDesktopMac } from 'react-icons/md';
// components
import PText from './PText';

const ServicesSectionItemStyled = styled.div`
  text-align: center;
  .servicesItem {
    &__icon {
      svg {
        width: 3rem;
      }
    }
    &__title {
      font-size: 2.5rem;
      font-family: 'Montserrat SemiBold';
    }
  }
  .para {
    margin-top: 2rem;
  }
`;
/**
 * ServicesSectionItem
 */
const ServicesSectionItem = ({
  icon = <MdDesktopMac />,
  title = 'web design',
  desc = 'I do ui/ux design for the website that helps website to get a unique look.',
}) => (
  <ServicesSectionItemStyled>
    <div className="servicesItem__icon">
      {icon}
      <div className="servicesItem__title">{title}</div>
      <PText>{desc}</PText>
    </div>
  </ServicesSectionItemStyled>
);

export default ServicesSectionItem;
