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
      width: 140px;
    }

    .social-media {
      a img {
        height: 36px;
        filter: brightness(90%);
        margin: 0 8px 6px 24px;
        :hover {
          filter: brightness(100%);
        }
      }
    }
  }

  hr {
    width: 100%;
    margin: 10px 0;
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
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 40px;
    font-size: 1rem;
    align-items: baseline;
    color: ${colors.LIGHTEST_GREY};

    .description {
      width: 50%;
      margin-bottom: 1.6rem;
    }
    .email-contact {
      font-size: 1.4rem;
      margin-right: 8px;
    }
  }
  // a {
  //   margin-left: auto;
  // }

  // .footer-link {
  //   font-size: 1.4rem;
  //   text-decoration: none;
  //   color: ${colors.LIGHTEST_GREY};
  //   margin-right: 8px;
  //   filter: brightness(90%);
  //   background: ${colors.MAIN_GREEN};
  //   padding: 4px 18px 4px 8px;
  //   clip-path: polygon(3% 0, 100% 0%, 90% 100%, 0% 100%);
  //   border-radius: 2px;

  //   :hover {
  //     text-decoration: none;
  //     filter: brightness(100%);
  //   }
  // }
  // a {
  //   text-decoration: none;
  //   color: ${colors.LIGHTEST_GREY};
  //   :hover {
  //     text-decoration: none;
  //   }
  // }
  // .link {
  //   font-size: 1.6rem;
  //   // border-bottom: 1px solid ${colors.LIGHTEST_GREY};
  //   width: max-content;
  //   padding-bottom: 6px;
  // }
  // .arrow {
  //   color: ${colors.LIGHTEST_GREY};
  //   font-size: 1.6rem;
  // }

  /* Mobile */
  @media screen and (max-width: 1040px) {
    .our-company {
      font-size: 0.9rem;

      .description {
        width: 60%;
      }
      .email-contact {
        font-size: 1.2rem;
      }
    }
  }

  @media screen and (max-width: 760px) {
    .footer-top {
      img.logo-footer {
        width: 120px;
        margin-top: 10px;
      }
      .social-media {
        a img {
          margin: 0 8px 6px 24px;
          height: 30px;
          margin-left: 20px;
        }
      }
    }

    .our-company {
      font-size: 0.8rem;

      .description {
        width: 50%;
      }
      .email-contact {
        font-size: 1.1rem;
      }
    }
    .footer-bottom {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 540px) {
    .footer-top {
      img.logo-footer {
        width: 100px;
      }
      .social-media {
        a img {
          height: 24px;
          margin-left: 12px;
        }
      }
    }
    .our-company {
      display: grid;
      grid-template-rows: auto auto;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
      font-size: 0.7rem;

      .description {
        width: 90%;
        text-align: left;
      }
      .email-contact {
        font-size: 1.1rem;
        text-align: right;
      }
    }
    .footer-bottom {
      font-size: 0.6rem;
    }
  }
`;
