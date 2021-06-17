// libs
import React from 'react';
import styled from 'styled-components';
// components
import PText from './PText';
// images
import mapImg from '../assets/images/map.png';

const MapStyled = styled.div`
  background: url(${mapImg}) no-repeat center / cover;
  min-height: 400px;
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  .container {
    position: relative;
    min-height: 400px;
    .map__card {
      position: absolute;
      right: 15%;
      bottom: 10%;
      padding: 2rem;
      background-color: var(--deep-dark);
      width: 100%;
      max-width: 300px;
      border-radius: 12px;
      @media only screen and (max-width: 400px) {
        background-position: 80% center;
        max-width: none;
        right: auto;
      }
      &__heading {
        margin-bottom: 1rem;
        font-size: 3rem;
      }
      &__link {
        display: inline-block;
        margin-top: 3rem;
        font-size: 1.6rem;
        text-decoration: underline;
      }
    }
  }
`;

/**
 * Map
 */
const Map = () => (
  <MapStyled>
    <div className="container">
      <div className="map__card">
        <h3 className="map__card__heading">Here is me</h3>
        <PText>314/88 Au Duong Lan Street, Ward 3, District 8</PText>
        <a
          className="map__card__link"
          target="_blank"
          rel="noreferrer"
          href="https://www.google.com/maps/place/314,+88+%C3%82u+D%C6%B0%C6%A1ng+L%C3%A2n,+ph%C6%B0%E1%BB%9Dng+3,+Qu%E1%BA%ADn+8,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.746677,106.6802473,17z/data=!4m13!1m7!3m6!1s0x31752f0755bbeaeb:0xcf594b45bc276143!2zMzE0LCA4OCDDgnUgRMawxqFuZyBMw6JuLCBwaMaw4budbmcgMywgUXXhuq1uIDgsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!3b1!8m2!3d10.746677!4d106.682436!3m4!1s0x31752f0755bbeaeb:0xcf594b45bc276143!8m2!3d10.746677!4d106.682436?hl=vi-VN"
        >
          Open in Google Map
        </a>
      </div>
    </div>
  </MapStyled>
);

export default Map;
