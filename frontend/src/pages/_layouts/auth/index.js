import React from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function AuthLayout({ children }) {
  return <Container>{children}</Container>;
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
