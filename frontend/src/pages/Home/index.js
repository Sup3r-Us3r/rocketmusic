import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';

import Header from '../../components/Header';

import { sendMusicInfoRequest } from '../../store/modules/play/actions';

import api from '../../services/api';

import { Container, Content, Music } from './styles';

export default function Home() {
  // REDUX
  const dispatch = useDispatch();

  const [songs, setSongs] = useState([]);
  const [musicId, setMusicId] = useState('');

  function handlePlayOrPause(id) {
    setMusicId(id);

    if (musicId === id) {
      setMusicId('');
    } else {
      dispatch(sendMusicInfoRequest(id));
    }
  }

  useEffect(() => {
    async function handleListMusics() {
      const musics = await api.get('/musics');

      setSongs(musics.data);
    }

    handleListMusics();
  }, []);

  return (
    <Container>
      <Header />
      <h1>Descobrir</h1>
      <Content>
        {songs.map(music => (
          <Music key={music._id}>
            <div>
              <img src={music.cover} alt="Cover" />
              {musicId !== music._id ? (
                <MdPlayCircleOutline
                  size={80}
                  color="#fff"
                  onClick={() => handlePlayOrPause(music._id)}
                />
              ) : (
                <MdPauseCircleOutline
                  size={80}
                  color="#fff"
                  onClick={() => handlePlayOrPause(music._id)}
                />
              )}
              <h1>{music.author}</h1>
              <span>{music.gender}</span>
            </div>
          </Music>
        ))}
      </Content>
    </Container>
  );
}
