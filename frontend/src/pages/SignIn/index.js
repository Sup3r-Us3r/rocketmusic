import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
// import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function SignIn() {
  // Field Validation
  // const schema = Yup.object().shape({
  //   email: Yup.string()
  //     .email()
  //     .required(),
  //   password: Yup.string()
  //     .min(3)
  //     .required(),
  // });

  // Functions
  function handleValidation(fields) {
    const { email, password } = fields;

    if (email === '') {
      toast.error('O email é um campo obrigatório!');
      return false;
    }

    if (password === '') {
      toast.error('A senha é um campo obrigatório!');
      return false;
    }

    if (password.length < 3) {
      toast.error('A senha deve ser maior que 3 letras!');
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
      <p>Entrar no Rocket Music</p>
      <Form onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          autoComplete="off"
          placeholder="Digite seu email"
        />
        <Input name="password" type="password" placeholder="Digite sua senha" />
        <button type="submit">Login</button>
      </Form>
      <Link to="/register">Criar conta</Link>
    </>
  );
}
