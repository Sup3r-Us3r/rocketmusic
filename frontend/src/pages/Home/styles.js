import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: 21%;
  margin-bottom: 10%;
  padding: 15px 20px;

  @media (max-width: 1255px) {
    width: 100%;
    margin-left: 0;
  }

  > h1 {
    font-size: 50px;
    margin: 15px 0 15px 0;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
`;

export const Music = styled.div`
  margin: 25px 25px 0 0;

  div {
    position: relative;
    cursor: pointer;

    &:hover {
      div {
        filter: blur(2px);
      }

      svg {
        opacity: 1;
      }
    }

    div {
      background: url(${props => props.musicImage});
      background-repeat: no-repeat;
      background-size: 170px 170px;
      height: 170px;
      width: 170px;
      margin-bottom: 5px;
      border-radius: 5px;
      cursor: pointer;
      transition: filter 0.3s;
    }

    svg {
      position: absolute;
      opacity: 0;
      top: 45px;
      left: 50px;
      transition: opacity 0.5s;
    }

    h1 {
      color: #333;
      font-size: 16px;
      font-weight: bold;
    }

    span {
      font-size: 13px;
      color: #999;
    }
  }
`;
