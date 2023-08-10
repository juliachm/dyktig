import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const CardContainer = styled.div`
  justify-self: center;
  filter: grayscale(45%);

  .team-img-wrapper {
    img {
      display: block;
      width: 100%;
      margin: auto;
      transform: translateY(0%);
    }
  }

  article {
    background: #fafafa;
    border: none;
    width: 220px;
    transition: transform 0.3s;
    height: 340px;
    overflow: hidden;
  }

  .team-card-content {
    padding: 15px 10px 5px;

    .name {
      font-size: 1rem;
      font-weight: 500;
      text-transform: uppercase;
      text-wrap: balance;
      margin: 2px 0 4px;
    }

    .position {
      font-weight: 400;
      font-size: 0.9rem;
    }
    .icon-card {
      height: 26px;
      position: absolute;
      bottom: 8px;
      right: 8px;
      filter: brightness(90%);
      :hover {
        filter: brightness(100%);
      }
    }
  }

  @media screen and (max-width: 1200px) {
    :first-child,
    :nth-child(2) {
      margin-bottom: 30px;
    }
  }
  @media screen and (max-width: 620px) {
    :not(:last-child) {
      margin-bottom: 30px;
    }
  }
`;
