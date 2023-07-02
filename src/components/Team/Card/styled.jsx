import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const CardContainer = styled.div`
  justify-self: center;
  filter: grayscale(95%);
  :hover {
    filter: grayscale(20%);
  }

  .team-img-wrapper {
    width: auto;
    height: 220px;
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      margin: auto;
      transform: translateY(0%);
    }
  }

  article {
    background: ${colors.MAIN_GREEN};
    border: none;
    width: 220px;
    transition: transform 0.3s;
  }

  .team-card-content {
    padding: 15px 10px 5px;

    .name {
      font-size: 1rem;
      font-weight: 400;
      text-transform: uppercase;
      text-wrap: balance;
    }

    .position {
      font-weight: 300;
      font-size: 1rem;
      margin-bottom: 10px;
    }
    .icon-card {
      margin: 0;
      height: 24px;
      filter: brightness(90%);
      :hover {
        filter: brightness(100%);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    :first-child {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 620px) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
