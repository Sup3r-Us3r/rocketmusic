import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const SearchBar = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;

  input {
    padding: 11px;
    width: 100%;
    margin-left: 15px;
    color: #777;
    font-weight: bold;
    letter-spacing: 0.3px;
    background: transparent;
    border-bottom: 1.3px solid transparent;
    transition: border-bottom 0.7s;

    &:focus {
      border-bottom: 1.3px solid #7159c1;
    }
  }
`;

export const UserAvatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: opacity 0.5s ease;

  &:hover {
    opacity: 0.8;
  }
`;

export const ProfileOptions = styled.div`
  position: absolute;
  top: 70px;
  right: 0;

  ul {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    background: #f0f0f3;
    box-shadow: 10px 10px 30px rgba(174, 174, 192, 0.4),
      -10px -10px 30px #ffffff;

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 0;
      top: -20px;
      left: 177px;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid #ddd;
    }

    li {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      align-items: center;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      color: #7159c1;
      width: 100%;
      padding: 10px;
      cursor: pointer;
      transition: box-shadow 0.3s;

      &:first-child {
        border-bottom: 0.7px solid rgba(255, 255, 255, 0.7);
      }

      &:hover {
        background: #f0f0f3;
        box-shadow: inset 10px 10px 10px rgba(174, 174, 192, 0.2),
          inset -10px -10px 10px rgba(255, 255, 255, 0.7);
      }

      svg {
        margin-right: 5px;
      }
    }
  }
`;
