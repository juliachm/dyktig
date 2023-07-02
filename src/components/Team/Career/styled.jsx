import styled from 'styled-components';
import * as colors from '../../../config/colors';

export const CareerField = styled.div`
  padding: 3% 2%;
  width: 60%;
  margin-bottom: 32px;
  background: ${colors.MAIN_GREEN};

  h3 {
    font-size: 1.8rem;
    margin-bottom: 1.2rem;
  }

  .description-bottom {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-top: 3rem;
    right: 3.2rem;

    a {
      text-decoration: none;
      color: ${colors.LIGHTEST_GREY};
      :hover {
        text-decoration: none;
      }
    }
    .link {
      font-size: 1.6rem;
      border-bottom: 1px solid ${colors.DARK_BLUE};
      width: max-content;
      padding-bottom: 6px;
    }
    .arrow {
      color: ${colors.LIGHTEST_GREY};
      font-size: 1.6rem;
    }
  }

  @media screen and (max-width: 1500px) {
    width: 80%;
  }
  @media screen and (max-width: 660px) {
    h3 {
      font-size: 1.4rem;
    }
    p {
      font-size: 1.1rem;
    }
    .description-bottom {
      margin-top: 2rem;
      right: 1.6rem;
      .link {
        font-size: 1.4rem;
        padding-bottom: 4px;
      }
      .arrow {
        font-size: 1.4rem;
      }
  }

`;
