import React, { useState, useEffect, useRef } from "react";
import PlayerControl from "./PlayerControl";
import PlayerDetail from "./PlayerDetail";
import { Slider } from "@material-ui/core";

function Player(props) {
  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [volume, setVolume] = useState(10);
  const [durTime, setDurTime] = useState(0);
  const [currTime, setCurrTime] = useState(0);
  const [isMute, setIsMute] = useState(false);
  const [isSuffle, setIsSuffle] = useState(false);
  const min = (time) => {
    return time >= 60
      ? Math.floor(time / 60) < 10
        ? "0" + Math.floor(time / 60)
        : Math.floor(time / 60)
      : "00";
  };
  const sec = (time) => {
    return time >= 60
      ? Math.floor(time % 60) < 10
        ? "0" + Math.floor(time % 60)
        : Math.floor(time % 60)
      : Math.floor(time) < 10
      ? "0" + Math.floor(time)
      : Math.floor(time);
  };
  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });
  useEffect(() => {
    if (isMute) {
      audioEl.current.muted = true;
    } else {
      audioEl.current.muted = false;
    }
  }, [isMute]);
  const getCurrDuration = (e) => {
    const time = (
      (e.currentTarget.currentTime / e.currentTarget.duration) *
      100
    ).toFixed(2);
    const currentTime = e.currentTarget.currentTime;

    setTime(time);
    setCurrTime(currentTime.toFixed(2));
  };
  const onChange = (e, newValue) => {
    audioEl.current.currentTime = (durTime / 100) * newValue;
    setTime(newValue);
  };
  const SkipSong = (forwards = true) => {
    if (forwards) {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp++;

        if (temp > props.songs.length - 1) {
          temp = 0;
        }
        setTime(0);
        return temp;
      });
    } else {
      props.setCurrentSongIndex(() => {
        let temp = props.currentSongIndex;
        temp--;

        if (temp < 0) {
          temp = props.songs.length - 1;
        }
        setTime(0);
        return temp;
      });
    }
  };
  return (
    <div className="c-player">
      <audio
        ref={audioEl}
        src={props.songs[props.currentSongIndex].src}
        onLoadedData={(e) => {
          setDurTime(e.currentTarget.duration.toFixed(2));
        }}
        onTimeUpdate={getCurrDuration}
      ></audio>
      <h4>Playing now</h4>
      <PlayerDetail
        isPlaying={isPlaying}
        song={props.songs[props.currentSongIndex]}
      />
      <p>
        {min(currTime)}:{sec(currTime)} / {min(durTime)}:{sec(durTime)}
      </p>
      <Slider value={time} onChange={onChange} />
      <PlayerControl
        isMute={isMute}
        isPlaying={isPlaying}
        setIsPlaying={(val) => setIsPlaying(val)}
        SkipSong={SkipSong}
        setIsMute={setIsMute}
        volume={volume}
        setVolume={setVolume}
        isSuffle={isSuffle}
        setIsSuffle={setIsSuffle}
      />
      <p>
        <strong>Next up: </strong>
        {props.songs[props.nextSongIndex].title}
        <br />
        <strong>Artis: </strong> {props.songs[props.nextSongIndex].artist}
      </p>
    </div>
  );
}

export default Player;
