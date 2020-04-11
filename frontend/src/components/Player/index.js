import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  MdPlayArrow,
  MdPause,
  MdSkipPrevious,
  MdSkipNext,
  MdVolumeUp,
  MdVolumeOff,
} from 'react-icons/md';

import borderLeft from '../../assets/border-left.svg';
import borderRight from '../../assets/border-right.svg';

import {
  Container,
  BorderRounded,
  PlayerMusic,
  MusicInfo,
  PlayerFunctions,
  MusicProgress,
  VolumeProgress,
} from './styles';

import api from '../../services/api';

export default function Player() {
  // REDUX - STATE
  const musicInfo = useSelector(state => state.play.musicInfo);

  const [audio, setAudio] = useState(new Audio());
  const [playOrPause, setPlayOrPause] = useState(false);
  const [muteOrUnmuted, setMuteOrUnmuted] = useState(false);
  const [progressBarMax, setProgressBarMax] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [volume, setVolume] = useState(100);
  const [currentTimeAudio, setCurrentTimeAudio] = useState('');

  function handleBeautifulTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;
  }

  async function handlePlayOrPause() {
    await audio.play();

    if (playOrPause) {
      setPlayOrPause(false);
      audio.pause();
    } else {
      setPlayOrPause(true);
      audio.play();
    }
  }

  function handleMuteOrUnmuted() {
    if (muteOrUnmuted) {
      audio.muted = false;
      setMuteOrUnmuted(false);
    } else {
      audio.muted = true;
      setMuteOrUnmuted(true);
    }
  }

  function handleMusicProgress(e) {
    audio.currentTime = e.target.value;
  }

  function handleVolumeProgress(e) {
    audio.volume = e.target.value / 100;
    setVolume(e.target.value);
  }

  function handleAudioDuration() {
    const duration = handleBeautifulTime(audio.duration);
    return duration;
  }

  useEffect(() => {
    async function handleInitMusicData() {
      const music = await api.get(`/musics/${musicInfo.id}`, {
        responseType: 'blob',
      });

      const fileReader = new FileReader();

      fileReader.readAsDataURL(music.data);
      fileReader.onloadend = () => {
        audio.src = fileReader.result;
      };

      audio.load();

      audio.onloadeddata = () => {
        setProgressBarMax(audio.duration);
      };

      audio.ontimeupdate = () => {
        setProgressBar(audio.currentTime);
        setCurrentTimeAudio(handleBeautifulTime(audio.currentTime));
      };
    }

    handleInitMusicData();
  }, [audio, musicInfo]);

  return (
    <Container>
      <BorderRounded>
        <img src={borderLeft} alt="Border Left" />
        <img src={borderRight} alt="Border Right" />
      </BorderRounded>

      <PlayerMusic>
        <MusicInfo>
          <img src={musicInfo.cover} alt="Cover" />
          <div>
            <p>{musicInfo.name}</p>
            <p>{musicInfo.author}</p>
          </div>
        </MusicInfo>
        <PlayerFunctions>
          <section id="player-actions">
            <MdSkipPrevious size={30} color="#fff" />
            {!playOrPause ? (
              <MdPlayArrow size={30} color="#fff" onClick={handlePlayOrPause} />
            ) : (
              <MdPause size={30} color="#fff" onClick={handlePlayOrPause} />
            )}
            <MdSkipNext size={30} color="#fff" />
          </section>
          <section id="progress-bars">
            <MusicProgress>
              <time>{currentTimeAudio || '00:00'}</time>
              <input
                type="range"
                min="0"
                max={progressBarMax}
                step="1"
                onInput={handleMusicProgress}
                onChange={handleMusicProgress}
                value={progressBar}
              />
              <time>{handleAudioDuration()}</time>
            </MusicProgress>

            <VolumeProgress>
              {!muteOrUnmuted ? (
                <MdVolumeUp
                  size={30}
                  color="#fff"
                  onClick={handleMuteOrUnmuted}
                />
              ) : (
                <MdVolumeOff
                  size={30}
                  color="#fff"
                  onClick={handleMuteOrUnmuted}
                />
              )}
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                onInput={handleVolumeProgress}
                onChange={handleVolumeProgress}
                value={volume}
              />
            </VolumeProgress>
          </section>
        </PlayerFunctions>
      </PlayerMusic>
    </Container>
  );
}
