import React, { useState, useEffect } from 'react';
import {
  MdPlayArrow,
  MdPause,
  MdSkipPrevious,
  MdSkipNext,
  MdVolumeUp,
  MdVolumeMute,
} from 'react-icons/md';

import borderLeft from '../../assets/border-left.svg';
import borderRight from '../../assets/border-right.svg';

import musicPath from '../../assets/Eminem-Not-Afraid.mp3';

import {
  Container,
  BorderRounded,
  PlayerMusic,
  MusicInfo,
  PlayerFunctions,
  MusicProgress,
  VolumeProgress,
} from './styles';

export default function Player() {
  // States
  const [audio, setAudio] = useState(new Audio());
  const [playOrPause, setPlayOrPause] = useState(false);
  const [muteOrUnmuted, setMuteOrUnmuted] = useState(false);
  const [progressBarMax, setProgressBarMax] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [volume, setVolume] = useState(100);
  const [currentTimeAudio, setCurrentTimeAudio] = useState('');

  // Functions
  function handleBeautifulTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${`0${minutes}`.slice(-2)}:${`0${seconds}`.slice(-2)}`;
  }

  function handlePlayOrPause() {
    const audioPromise = audio.play();

    if (audioPromise !== undefined) {
      audioPromise
        .then(() => {
          if (playOrPause) {
            setPlayOrPause(false);
            audio.pause();
          } else {
            setPlayOrPause(true);
            audio.play();
          }
        })
        .catch(err => err);
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

  // Effects
  useEffect(() => {
    function handleInitMusicData() {
      audio.src = musicPath;
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
  }, [audio]);

  return (
    <Container>
      <BorderRounded>
        <img src={borderLeft} alt="Border Left" />
        <img src={borderRight} alt="Border Right" />
      </BorderRounded>

      <PlayerMusic>
        <MusicInfo>
          <img src="https://i.snipboard.io/lt8WpB.jpg" alt="Cover" />
          <div>
            <p>Not Afraid</p>
            <p>Eminem, 2010</p>
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
              <time>{currentTimeAudio}</time>
              <input
                type="range"
                min="0"
                max={progressBarMax}
                step="1"
                onInput={e => handleMusicProgress(e)}
                onChange={e => handleMusicProgress(e)}
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
                <MdVolumeMute
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
                onInput={e => handleVolumeProgress(e)}
                onChange={e => handleVolumeProgress(e)}
                value={volume}
              />
            </VolumeProgress>
          </section>
        </PlayerFunctions>
      </PlayerMusic>
    </Container>
  );
}

/**
 * <MdPause size={30} color="#fff" />
 * <MdStop size={30} color="#fff" />
 * <MdVolumeOff size={30} color="#fff" />
 * <MdVolumeDown size={30} color="#fff" />
 * <MdVolumeMute size={30} color="#fff" />
 * <MdRepeatOne size={30} color="#fff" />
 */
