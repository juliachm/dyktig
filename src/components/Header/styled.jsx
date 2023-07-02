import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Nav = styled.nav`
  padding: 0 10%;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(36, 42, 57, 0.9);
  backdrop-filter: blur(10px);

  a {
    line-height: 17px;
  }

  img {
    width: 64px;
    height: auto;
    margin: 0 auto;
  }

  ul {
    font-size: 1.2rem;
    margin-left: auto;
  }

  li {
    list-style: none;
    font-size: 1.3rem;
    display: inline-block;
    margin-right: 3.8rem;
    transition: background 0.8s;
    color: #000;
    :not(:hover) {
      color: ${colors.FONT_LIGHT_GRAY};
    }
  }

  ul:hover li {
    opacity: 0.5;
  }

  ul li:hover {
    opacity: 1;
  }

  a {
    color: ${colors.LIGHTEST_GREY};
    text-decoration: none;
    transition: background-color 0.3s;
    border-radius: 0px;
  }

  .contact-btn {
    border: solid 1px ${colors.LIGHTEST_GREY};
    border-radius: 30px;
    padding: 8px 18px;
    :hover {
      background: ${colors.LIGHTEST_GREY};
    }
    :hover > a {
      color: ${colors.DARK_BLUE};
    }
  }

  .mobile-toggle {
    display: none;
  }

  @media screen and (max-width: 1200px) {
    img {
      width: 56px;
      height: auto;
      margin: 0 auto;
    }

    li {
      font-size: 1.2rem;
      margin-right: 2.4rem;
    }
  }

  /* Mobile */

  @media screen and (max-width: 840px) {
    .hidden {
      display: none;
    }

    .mobile-toggle {
      display: flex;
      border: none;
      background: none;
      position: absolute;
      right: 0;
      top: 0;
      z-index: 1;
      margin: 20px;
      width: 30px;
    }
  }
`;
