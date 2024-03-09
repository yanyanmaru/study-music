import React, { useRef, useState } from "react";

export default function Player() {
  const [wavFile, setWavFile] = useState("first.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleSeek = (e) => {
    const seekTime = e.target.value;
    audioRef.current.currentTime = seekTime;
    setCurrentTime(seekTime);
  };

  return (
    <div>
      <input
        type="range"
        value={currentTime}
        max={audioRef.current ? audioRef.current.duration : 0}
        onChange={handleSeek}
      />
      <audio
        ref={audioRef}
        src={wavFile}
        onTimeUpdate={handleTimeUpdate}
        onEnded={() => setIsPlaying(false)}
      >
        <source src={wavFile} type="audio/mpeg" />
      </audio>
      <p>{currentTime}</p>
      <button onClick={togglePlay}>{isPlaying ? "停止" : "再生"}</button>
    </div>
  );
}
