import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

// import mountainsBackground from '../../../assets/mountains.svg.svg';
// import starsBackground from '../../../assets/stars.svg';

const backgroundFloating = keyframes`
  from {
    transform: translate3d(0, -3px, 0);
  }
  to {
    transform: translate3d(0, 3px, 0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  height: 100%;
  /* width: 100%; */
  background: url('https://skylab.rocketseat.com.br/static/7c60c57e4fd20119d82b5970028b2d1b.svg')
      center bottom repeat-x,
    url('https://skylab.rocketseat.com.br/static/d963b8944752859b3c6ccb0bda539c46.svg')
      repeat-x,
    rgb(11, 10, 13);

  div {
    display: flex;
    flex-direction: column;
    justify-content: right;
    align-items: center;
    width: 40%;

    @media (max-width: 1000px) {
      display: none;
    }

    img {
      margin: 0 auto;
      height: 500px;
      animation: ${backgroundFloating} 2s infinite alternate;
    }
  }

  p {
    font-size: 40px;
    color: #7159c1;
    font-weight: bold;
    margin-bottom: 60px;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;

    @media (max-width: 1000px) {
      width: 100%;
    }

    input {
      width: 60%;
      padding: 15px 20px;
      color: #999;
      letter-spacing: 0.8px;
      background: #19181f;
      box-shadow: 5px 5px 5px #28272c, -5px -5px 5px #19181f;
      border-radius: 10px;

      & + input {
        margin-top: 15px;
      }

      &::placeholder {
        color: #999;
        font-weight: bold;
      }
    }

    button {
      margin-top: 35px;
      width: 20%;
      padding: 15px 20px;
      font-weight: bold;
      color: #fff;
      background: #7159c1;
      border-radius: 5px;
      text-transform: uppercase;
    }
  }

  a {
    margin-top: 25px;
    color: #999;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: bold;

    &:hover {
      color: ${darken(0.05, '#999')};
    }
  }
`;
