import styled from 'styled-components';
import * as colors from '../../config/colors';

export const DescriptionField = styled.div`
  padding: 5% 10% 0 10%;
  width: 100%;
  margin-bottom: 80px;
  h2 {
    font-size: 3em;
    margin-bottom: 2.4rem;
    width: 70%;
  }
  .description-intro {
    width: 70%;
  }
  .description-bottom {
    display: flex;
    justify-content: space-between;
    width: 30%;
    font-size: 1.6rem;
    margin-top: 5rem;
  }

  span {
    border-bottom: 1px solid ${colors.FONT_DARK_GRAY};
    width: max-content;
  }

  @media screen and (max-width: 1440px) {
    h2 {
      font-size: 2.8em;
    }
    .description-bottom {
      width: 40%;
    }
  }

  @media screen and (max-width: 1360px) {
    h2 {
      font-size: 2.6em;
      width: 90%;
    }

   
    .description-bottom {
      font-size: 1.6rem;
      margin-top: 4rem;
      span{
        margin-right: 20px;
      }
    }
  }

  @media screen and (max-width: 1260px) {
    h2 {
      font-size: 2.4em;
    }
    .description-bottom {
      font-size: 1.4rem;
  }

  @media screen and (max-width:920px) {
    h2 {
      font-size: 2.2em;
      width: 100%;
    }
    .description-intro {
      width: 100%;
    }
    .description-bottom {
      font-size: 1.4rem;
  }

  @media screen and (max-width:740px) {
    h2 {
      font-size: 2em;
    }
   
    .description-bottom {
      font-size: 1.3rem;
  }
}

@media screen and (max-width: 515px) {
    h2 {
      font-size: 1.6em;
    }
    .description-intro {
      font-size: 0.8em;
    }
    .description-bottom {
      font-size: 1.2rem;
  }
  }
`;

export const CardsField = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: auto;
  gap: 20px;

  div {
    align-self: flex-start;
    h3 {
      margin: 20px 0;
    }
  }

  /* Mobile */

  @media screen and (max-width: 610px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    div {
      text-align: center;

      p {
        margin: auto;
        width: 80%;
      }
    }
  }
`;
