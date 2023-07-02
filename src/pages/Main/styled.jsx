import styled from 'styled-components';
import * as colors from '../../config/colors';

export const Div = styled.div`
  position: relative;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  margin: 100px 0 150px 0;

  .mobile-menu-open {
    overflow: hidden;
    position: fixed;
    width: 100%;
    height: 100%;
  }
  .mobile {
    display: none;
  }

  h2 {
    color: ${colors.LIGHTEST_GREY};
    font-size: 2.6em;
    width: 40%;
    margin-right: 35%;
  }

  button {
    color: ${colors.LIGHTEST_GREY};
    background: ${colors.darkViolet};
    padding: 10px 20px;
    border: 2px solid ${colors.LIGHTEST_GREY};
    z-index: 1;

    :hover {
      background: ${colors.LIGHTEST_GREY};
      color: ${colors.darkViolet};
    }
  }
  div {
    position: absolute;
    right: 0;
    width: 40%;

    img {
      width: 100%;
    }
  }
`;
