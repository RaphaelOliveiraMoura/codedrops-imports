import React from 'react';
import { useSelector } from 'react-redux';

import axios from 'axios';

import Header from '~/components/Header';

import api from '../../services/api';
import { Container, Footer } from './styles';
import User from './User';

export default function Main() {
  return (
    <Container>
      <User />
      <Footer />
    </Container>
  );
}
