import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouseChimney,faGamepad } from "@fortawesome/free-solid-svg-icons";
library.add(faHouseChimney, faGamepad);
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);

export default function Player({file,icon}) {
  const [wavFile, setWavFile] = useState("first.mp3");
  const [isPlaying, setIsPlaying] = useState(false);
  const [volumeNumber, setVolumeNumber] = useState(0.5);

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (e) => {
    setVolumeNumber(e.target.value)
    audioRef.current.volume = e.target.value;
    
  }


  return (
    <div className="flex flex-col items-center relative">
    <div 
    onClick={togglePlay} 
    className={`${isPlaying ? "bg-gray-300" : ""} bg-gray-100 w-24 h-24 p-4 rounded flex items-center justify-center`}
    >
      
      <audio
        ref={audioRef}
        src={file}
        loop
        onEnded={() => setIsPlaying(false)}
      >
        <source src={wavFile} type="audio/mpeg" />
      </audio>
      <FontAwesomeIcon className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" icon={icon} />
    </div>
   
    
    <p>fafafa</p>
    <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volumeNumber}
        onChange={handleVolumeChange}
      />
    </div>
  );
}
