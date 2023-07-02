import styled from 'styled-components';

export const PartnersField = styled.div`
  padding: 3% 10%;
  width: 100%;
  margin-bottom: 32px;

  h2 {
    font-size: 3em;
    margin-top: 48px;
    margin-bottom: 2.4rem;
    width: 70%;
  }
  p {
    margin-bottom: 3rem;
  }

  .logo-partners {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7rem;
    img {
      max-width: 140px;
    }
  }

  @media screen and (max-width: 1440px) {
    h2 {
      font-size: 2.8em;
    }
    .logo-partners {
      gap: 3.6rem;
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
    .logo-partners {
      gap: 4rem;
      img {
        max-width: 120px;
      }
    }
  }

  @media screen and (max-width: 920px) {
    h2 {
      font-size: 2.2em;
    }
    p {
      width: 100%;
      margin-bottom: 2rem;
    }
    .logo-partners {
      gap: 3rem;
      img {
        max-width: 100px;
      }
    }
  }

  @media screen and (max-width: 740px) {
    h2 {
      font-size: 2em;
    }
    .logo-partners {
      gap: 2rem;
      img {
        max-width: 80px;
      }
    }
  }

  @media screen and (max-width: 600px) {
    .logo-partners {
      gap: 2rem;
      img {
        max-width: 80px;
      }
    }
  }
  @media screen and (max-width: 515px) {
    h2 {
      font-size: 1.6em;
    }
    p {
      font-size: 0.8em;
    }
    .logo-partners {
      gap: 1.2rem;
      img {
        max-width: 70px;
      }
    }
  }
  @media screen and (max-width: 400px) {
    .logo-partners {
      gap: 0.8rem;
      img {
        max-width: 46px;
      }
    }
  }
`;
