import styled from 'styled-components';
import * as colors from '../../config/colors';
export const SectionBanner = styled.section`
  padding: 0 10%;
  color: ${colors.FONT_DARK_GRAY};
  background-color: ${colors.DARK_BLUE};

  .mobile {
    display: none;
  }
  .top-banner {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 8rem;
    margin-top: 12rem;
    margin-bottom: 8rem;
  }
  .left-banner {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .right-banner {
    display: flex;
    align-items: flex-end;
  }

  h1 {
    font-size: 4.8em;
    color: ${colors.LIGHTEST_GREY};
    text-align: left;
    line-height: 120%;
    margin: 2.6rem 0;
  }

  p {
    font-size: 1.4em;
    font-weight: 400;
    width: 60%;
    color: ${colors.LIGHT_GREY};
    margin-bottom: 7rem;
  }

  span {
    display: block;
  }

  .arrow-down {
    position: absolute;
    left: 20%;
    border: 1px solid transparent;
    transition: all 0.3s ease;
    :hover {
      transform: scale(1.04);
    }
  }

  img.intro {
    width: 98%;
    height: 680px;
    object-fit: cover;
  }

  @media screen and (max-width: 1760px) {
    .top-banner {
      grid-template-columns: 0.8fr 1.2fr;
    }

    h1 {
      font-size: 4.2em;
    }
    p {
      width: 80%;
    }
  }

  @media screen and (max-width: 1560px) {
    .top-banner {
      margin-top: 10rem;
      margin-bottom: 6rem;
    }
    h1 {
      font-size: 3.8em;
    }
    img.intro {
      margin-top: 0;
    }
    img.intro {
      height: 560px;
    }
  }

  @media screen and (max-width: 1380px) {
    .top-banner {
      gap: 6rem;
    }

    h1 {
      font-size: 3.6em;
    }
    p {
      font-size: 1.3em;
    }
  }
  @media screen and (max-width: 1240px) {
    .top-banner {
      display: block;
    }
    .left-banner {
      display: grid;
      grid-template-columns: repeat(5, 1fr);
      gap: 2rem;
      grid-auto-rows: 180px;
      grid-template-areas:
        'a a a a b'
        'c c c c d';
    }

    h1 {
      grid-area: a;
      align-self: center;
    }
    p {
      font-size: 1.2em;
      grid-area: c;
      align-self: center;
      width: 60%;
    }
    .arrow-down {
      grid-area: b;
      align-self: end;
      margin-top: 200px;
      margin-left: 520px;
    }
  }
  @media screen and (max-width: 920px) {
    .top-banner {
      margin-top: 6rem;
      margin-bottom: 4rem;
    }
    .left-banner {
      gap: 1rem;
      grid-auto-rows: 160px;
    }
    h1 {
      font-size: 3.4rem;
    }
    p {
      font-size: 1.1em;
    }
    .arrow-down {
      margin-top: 140px;
      margin-left: 400px;
    }
  }

  @media screen and (max-width: 760px) {
    h1 {
      font-size: 3.2rem;
    }

    img.intro {
      height: 440px;
    }
    .arrow-down {
      margin-left: 360px;
      width: 5rem;
    }
  }

  @media screen and (max-width: 670px) {
    .left-banner {
      grid-auto-rows: 140px;
    }
    h1 {
      font-size: 3.2rem;
    }

    img.intro {
      height: 300px;
    }
    .arrow-down {
      margin-top: 160px;
      margin-left: 280px;
      width: 4.4rem;
    }
    p {
      align-self: start;
      font-size: 1.1rem;
    }
  }

  @media screen and (max-width: 515px) {
    h1 {
      font-size: 2.6rem;
    }
    p {
      font-size: 1.1rem;
      width: 70%;
    }

    img.intro {
      height: 240px;
    }
    .arrow-down {
      margin-top: 150px;
      margin-left: 200px;
      width: 4.4rem;
    }
  }

  @media screen and (max-width: 440px) {
    .top-banner {
      margin-top: 4rem;
      margin-bottom: 4rem;
    }
    h1 {
      font-size: 2.4rem;
    }
    p {
      font-size: 1rem;
    }

    img.intro {
      height: 220px;
    }
    .arrow-down {
      margin-left: 180px;
      width: 4.2rem;
    }
  }
  @media screen and (max-width: 400px) {
    .left-banner {
      grid-auto-rows: 120px;
    }
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 0.9rem;
      width: 80%;
    }
    .arrow-down {
      margin-top: 130px;
      margin-left: 180px;
      width: 4.2rem;
    }
    img.intro {
      height: 180px;
    }
  }
  @media screen and (max-width: 340px) {
    .top-banner {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.9rem;
    }
    .arrow-down {
      margin-top: 140px;
      margin-left: 160px;
      width: 3.6rem;
    }
  }
`;
