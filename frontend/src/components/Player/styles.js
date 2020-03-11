import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #7159c1;
`;

export const BorderRounded = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 970px) {
    display: none;
  }

  img:nth-child(1) {
    height: 80px;
    margin-top: -80px;
  }

  img:nth-child(2) {
    height: 80px;
    margin-top: -80px;
  }
`;

export const PlayerMusic = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 25px;
`;

export const MusicInfo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 20%;

  @media (max-width: 970px) {
    justify-content: center;
    width: 100%;
    margin-bottom: 18px;
  }

  img {
    height: 75px;
    width: 75px;
    border-radius: 50%;
    box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.2),
      0 0 0 11px rgba(255, 255, 255, 0.1);

    @media (max-width: 970px) {
      height: 60px;
      width: 60px;
    }
  }

  div {
    margin-left: 25px;

    p {
      color: #fff;
      font-size: 23px;
      font-weight: bold;
      line-height: 1.3;

      @media (max-width: 970px) {
        font-size: 16px;
      }

      & + p {
        color: #eee;
        font-size: 15px;

        @media (max-width: 970px) {
          font-size: 13px;
        }
      }
    }
  }
`;

export const PlayerFunctions = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  width: 80%;

  @media (max-width: 1130px) {
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }

  section#player-actions {
    width: 17%;

    @media (max-width: 1130px) {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    svg {
      margin: 0 10px;
      cursor: pointer;
    }
  }

  section#progress-bars {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 80%;

    @media (max-width: 1130px) {
      flex-wrap: wrap;
      width: 100%;
      margin-top: 5px;
    }
  }
`;

export const MusicProgress = styled.div`
  display: flex;
  align-items: center;
  width: 80%;

  @media (max-width: 1130px) {
    width: 50%;
  }

  @media (max-width: 970px) {
    margin: 0 5px;
  }

  time {
    font-size: 13px;
    color: #fff;
  }

  time:first-child {
    margin-right: 15px;
  }

  time:last-child {
    margin-left: 15px;
  }

  input {
    appearance: none;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    outline: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2),
        0 0 0 5px rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(255, 255, 255, 0.05);
    }

    &::-moz-range-thumb {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2),
        0 0 0 5px rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(255, 255, 255, 0.05);
    }
  }
`;

export const VolumeProgress = styled.div`
  display: flex;
  align-items: center;
  margin: 0 25px;
  width: 20%;

  @media (max-width: 1130px) {
    width: 30%;
  }

  @media (max-width: 970px) {
    margin: 0 5px;
  }

  svg {
    margin-right: 5px;
    cursor: pointer;
  }

  input {
    appearance: none;
    height: 3px;
    width: 100%;
    border-radius: 10px;
    background: #fff;
    outline: none;
    cursor: pointer;

    &::-webkit-slider-thumb {
      appearance: none;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2),
        0 0 0 5px rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(255, 255, 255, 0.05);
    }

    &::-moz-range-thumb {
      height: 10px;
      width: 10px;
      border-radius: 50%;
      background: #fff;
      cursor: pointer;
      box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.2),
        0 0 0 5px rgba(255, 255, 255, 0.1), 0 0 0 10px rgba(255, 255, 255, 0.05);
    }
  }
`;
