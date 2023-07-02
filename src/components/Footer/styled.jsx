import styled from 'styled-components';
import * as colors from '../../config/colors';
export const FooterField = styled.footer`
  width: 100%;
  padding: 3% 10% 1% 10%;
  background: ${colors.DARK_BLUE};
  position: relative;

  img.bg-footer {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 0;
  }

  .mobile {
    display: none !important;
  }

  .footer-top {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-between;

    img.logo-footer {
      position: relative;
      width: 200px;
    }

    .social-media {
      a img {
        height: 36px;
        filter: brightness(90%);

        margin-left: 24px;
        margin-right: 8px;
        :hover {
          filter: brightness(100%);
        }
      }
    }
  }

  hr {
    width: 100%;
    margin: 20px 0;
    border-top: 1px solid ${colors.LIGHT_GREEN};
    position: relative;
  }

  .footer-bottom {
    font-size: 0.9rem;
    letter-spacing: 0.4px;
    color: ${colors.LIGHTEST_GREY};
  }

  .our-company {
    display: flex;
    flex-direction: row;
    margin-bottom: 40px;
    font-size: 1rem;
    align-items: baseline;
    color: ${colors.LIGHTEST_GREY};

    p {
      width: 50%;
      margin-bottom: 1.6rem;
    }
    a {
      margin-left: auto;
    }

    .footer-link {
      font-size: 1.6rem;
      text-decoration: none;
      color: ${colors.LIGHTEST_GREY};
      margin-right: 8px;
      filter: brightness(90%);

      :hover {
        text-decoration: none;
        filter: brightness(100%);
      }
    }
  }

  /* Mobile */
  @media screen and (max-width: 1040px) {
    p {
      width: 45%;
      margin-bottom: 1.4rem;
    }
  }

  @media screen and (max-width: 760px) {
    .footer-top {
      img.logo-footer {
        width: 160px;
      }
      .social-media {
        a img {
          height: 30px;
          margin-left: 20px;
        }
      }
    }

    .our-company {
      display: flex;
      flex-direction: column;
      margin-bottom: 40px;
      font-size: 1rem;
      align-items: baseline;
      color: ${colors.LIGHTEST_GREY};

      p {
        width: 70%;
        margin-bottom: 1.6rem;
      }
      .footer-link {
        font-size: 1.4rem;
      }
    }
    .footer-bottom {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 540px) {
    .footer-top {
      img.logo-footer {
        width: 120px;
      }
      .social-media {
        a img {
          height: 24px;
          margin-left: 12px;
        }
      }
      .our-company {
        p {
          width: 80%;
          font-size: 0.9rem;
        }
        .footer-link {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
