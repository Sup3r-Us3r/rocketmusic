import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
import { toast } from 'react-toastify';

import backgroundRocket from '../../assets/rocketmusic.svg';

export default function SignUp() {
  // Functions
  function handleValidation(fields) {
    const { email, password, confirmPassword } = fields;

    if (email === '') {
      toast.error('O email é um campo obrigatório!');
      return false;
    }

    if (password === '') {
      toast.error('A senha é um campo obrigatório!');
      return false;
    }

    if (confirmPassword === '') {
      toast.error('A confirmação da senha é um campo obrigatório!');
      return false;
    }

    if (password.length < 3) {
      toast.error('A senha deve ser maior que 3 letras!');
      return false;
    }

    if (password !== confirmPassword) {
      toast.error('As senhas não batem!');
      return false;
    }

    return true;
  }

  function handleSubmit(fields) {
    if (handleValidation(fields)) {
      toast.success('Dados válidos');
    }
  }

  return (
    <>
      <div>
        <img src={backgroundRocket} alt="Rocket Music" />
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Digite seu email"
        />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <Input
          name="confirmPassword"
          type="password"
          placeholder="Confirme sua senha"
        />
        <button type="submit">Criar conta</button>
        <Link to="/login">Login</Link>
      </Form>
    </>
  );
}
