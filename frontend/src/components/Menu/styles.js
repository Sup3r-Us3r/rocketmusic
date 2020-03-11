import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: fixed;
  overflow: scroll;
  height: 100%;
  width: 20%;
  background: transparent;
  border-right: 1px solid ${darken(0.08, '#f0f0f3')};

  i svg {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 5px;
    margin-right: 5px;
    cursor: pointer;
  }

  @media (max-width: 1255px) {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 270px;
    overflow-x: auto;
    overflow-y: auto;
    background: #f0f0f3;
    z-index: 2000;
    transition: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  a:first-child {
    display: flex;
    justify-content: center;

    img {
      margin: 15px auto;
      height: 100px;
    }
  }

  a:not(:first-child) {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 14px;
    color: #7159c1;
    padding: 10px 5px 10px 20px;
    font-weight: bold;
    text-transform: uppercase;
    width: 93%;
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: background 0.2s ease-in-out;
    background: #f0f0f3;
    box-shadow: inset 0 0 15px rgba(55, 84, 170, 0),
      inset 0 0 20px rgba(255, 255, 255, 0),
      7px 7px 15px rgba(55, 84, 170, 0.15), -7px -7px 20px white,
      inset 0px 0px 4px rgba(255, 255, 255, 0.2);

    & + a {
      margin-top: 13px;
    }

    &:hover {
      background: ${darken(0.02, '#f0f0f3')};
    }

    svg {
      margin-right: 20px;
    }

    [data-arrow] {
      position: absolute;
      right: 0;
      margin-right: 10px;
    }
  }
`;
