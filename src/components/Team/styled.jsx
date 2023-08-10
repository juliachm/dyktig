import styled from 'styled-components';
import * as colors from '../../config/colors';

export const DescriptionField = styled.div`
  width: 100%;
  padding: 3% 10% 3% 10%;
  background: ${colors.DARK_BLUE};
  color: ${colors.LIGHTEST_GREY};
  position: relative;

  h2 {
    font-size: 3em;
    margin-top: 48px;
    margin-bottom: 2.4rem;
    width: 80%;
  }
  .description-intro p {
    width: 70%;
    margin-bottom: 72px;
  }

  @media screen and (max-width: 1440px) {
    h2 {
      font-size: 2.8em;
    }
  }

  @media screen and (max-width: 1360px) {
    h2 {
      font-size: 2.6em;
      width: 100%;
    }

    .description-intro p {
      width: 80%;
    }
  }

  @media screen and (max-width: 1260px) {
    h2 {
      font-size: 2.4em;
    }
    .description-intro p {
      width: 90%;
    }
  }

  @media screen and (max-width: 920px) {
    h2 {
      font-size: 2.2em;
    }
    .description-intro p {
      width: 100%;
    }
  }

  @media screen and (max-width: 740px) {
    h2 {
      font-size: 2em;
    }
  }

  @media screen and (max-width: 515px) {
    h2 {
      font-size: 1.6em;
    }
    .description-intro {
      font-size: 0.8em;
    }
  }
`;

export const CardsField = styled.div`
  color: ${colors.FONT_DARK_GRAY};
  display: grid;
  margin: 10px 0 80px;
  grid-template-columns: repeat(4, 240px);
  grid-template-rows: auto;
  justify-items: center;

  @media screen and (max-width: 1200px) {
    grid-template-columns: repeat(2, 240px);
   
  }
  @media screen and (max-width: 620px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
`;
