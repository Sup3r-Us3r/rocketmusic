import React, { useState } from 'react';
import { Form, Input } from '@rocketseat/unform';

import api from '../../services/api';

import { Container } from './styles';

export default function SendMusic() {
  // States
  const [filename, setFilename] = useState(null);

  // Functions
  function handleChange(e) {
    setFilename(e.target.files[0]);
  }

  async function handleSubmit(data) {
    const { name, author, gender, cover, release } = data;

    function stringToDate(date) {
      const [day, month, year] = date.includes('-')
        ? date.split('-')
        : date.split('/');

      return new Date(year, month - 1, day);
    }

    const formData = new FormData();

    formData.append('sendMusic', filename);

    await api.post('/sendmusic', formData).then(async filenameOfMusic => {
      const { _id } = filenameOfMusic.data;

      await api.post('/sendmusicinfo', {
        name,
        author,
        gender,
        cover,
        release: stringToDate(release),
        filename: _id,
      });
    });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          name="musicFile"
          type="file"
          accept="audio/*"
          onChange={e => handleChange(e)}
        />
        <Input name="name" type="text" placeholder="Nome da Música" />
        <Input name="author" type="text" placeholder="Autor" />
        <Input name="gender" type="text" placeholder="Gênero" />
        <Input name="cover" type="text" placeholder="Capa" />
        <Input name="release" type="text" placeholder="Data" />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}
