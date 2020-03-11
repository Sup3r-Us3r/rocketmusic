import React, { useState } from 'react';
import { MdPlayCircleOutline, MdPauseCircleOutline } from 'react-icons/md';

import Header from '../../components/Header';

import { Container, Content, Music } from './styles';

export default function Home() {
  // States
  const [playAndPause, setPlayAndPause] = useState(true);
  const [musicImage, setMusicImage] = useState(
    'https://i.snipboard.io/lt8WpB.jpg'
  );

  // Functions
  function handlePlayAndPause() {
    setPlayAndPause(!playAndPause);
  }

  return (
    <Container>
      <Header />
      <h1>Descobrir</h1>
      <Content>
        <Music musicImage={musicImage}>
          <div>
            <div />
            {playAndPause ? (
              <MdPlayCircleOutline
                size={80}
                color="#fff"
                onClick={handlePlayAndPause}
              />
            ) : (
              <MdPauseCircleOutline
                size={80}
                color="#fff"
                onClick={handlePlayAndPause}
              />
            )}
            <h1>Hip-Hop/Rap</h1>
            <span>Eminem</span>
          </div>
        </Music>
      </Content>
    </Container>
  );
}
