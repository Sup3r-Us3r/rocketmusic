import React from 'react';
import PropTypes from 'prop-types';

import background from '../../../assets/background-auth-layout.svg';

import { Container } from './styles';

export default function AuthLayout({ children }) {
  return <Container background={background}>{children}</Container>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
