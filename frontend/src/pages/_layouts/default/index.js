import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../../../components/Menu';
import Player from '../../../components/Player';

import { Wrapper } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Menu />
      {children}
      <Player />
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
