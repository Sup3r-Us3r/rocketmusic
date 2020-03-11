import React from 'react';
import { Link } from 'react-router-dom';
import {
  MdHeadset,
  MdSettings,
  MdKeyboardArrowRight,
  MdClose,
} from 'react-icons/md';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function Menu() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="Rocket Music" />
      </Link>
      <i>
        <MdClose size={30} color="#7159c1" />
      </i>
      <Link to="/musics">
        <MdHeadset size={18} color="#7159c1" />
        Top List
        <MdKeyboardArrowRight data-arrow size={20} color="#7159c1" />
      </Link>
      <Link to="/settings">
        <MdSettings size={18} color="#7159c1" />
        Configurações
        <MdKeyboardArrowRight data-arrow size={20} color="#7159c1" />
      </Link>
    </Container>
  );
}
