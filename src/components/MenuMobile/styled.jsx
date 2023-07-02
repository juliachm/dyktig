import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Menu = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 100;
  margin-top: 80px;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 10%;
  position: fixed;
  background-color: rgba(36, 42, 57, 0.9);
  backdrop-filter: blur(10px);

  .mobile-menu {
    transition: opacity 0.8s ease-in-out, visibility 0s linear 0.3s;
    opacity: 0;
    visibility: hidden;
  }

  .mobile-menu-open {
    opacity: 1;
    visibility: visible;
  }
  ul {
    width: 100%;
    position: relative;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-top: 20%;
    gap: 50px;

    li {
      color: ${colors.LIGHTEST_GREY};
      list-style: none;
      font-size: 1.5rem;
    }
    button {
      border: 1px solid ${colors.LIGHTEST_GREY};
      background: none;
      color: ${colors.LIGHTEST_GREY};
      padding: 20px 100px;
      font-size: 1em;
      font-weight: 700;
    }
  }

  li {
    display: inline-block;

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
`;
