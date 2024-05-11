import "../index.css"
import { useEffect, useState } from "react";
import { AudioProgressBarProps, CustomCSSProperties } from "../types";

export const AudioProgressBar: React.FC<AudioProgressBarProps> = ( {progressRef, audioRef, timeProgress, setTimeProgress, duration, setDuration} ) => {


    const [progressStyle, setProgressStyle] = useState<CustomCSSProperties>({ '--range-progress': '0%' });

    useEffect(() => {
        const updateTimeProgress = () => {
          if (audioRef.current) {
            setTimeProgress(audioRef.current.currentTime);
            setDuration(audioRef.current.duration);
          }
        };
    
        if (audioRef.current) {
          audioRef.current.addEventListener("timeupdate", updateTimeProgress);
          audioRef.current.addEventListener("loadedmetadata", updateTimeProgress);
          return () => {
            audioRef.current?.removeEventListener("timeupdate", updateTimeProgress);
            audioRef.current?.removeEventListener("loadedmetadata", updateTimeProgress);
          };
        }
      }, [audioRef]);



    const handleProgressChange = () => {
        if(audioRef.current && progressRef.current) {
            const newTime = parseInt(progressRef.current.value, 10);
            audioRef.current.currentTime = newTime;
        }
    };

    const formatTime = (time: number) => {
        if (time && !isNaN(time)) {
          const minutes = Math.floor(time / 60);
          const formatMinutes =
            minutes < 10 ? `0${minutes}` : `${minutes}`;
          const seconds = Math.floor(time % 60);
          const formatSeconds =
            seconds < 10 ? `0${seconds}` : `${seconds}`;
          return `${formatMinutes}:${formatSeconds}`;
        }
        return '00:00';
      };


      /** TODO(): style progress bar */
    return <div className="py-4 grid grid-cols-2 gap-2">
        
        <input className="range-slider col-span-2" type="range" ref={progressRef} defaultValue="0" onChange={handleProgressChange} max={duration} style={progressStyle}/>
        <span className="text-left text-xs">{formatTime(timeProgress)}</span>
        <span className="text-right text-xs">{formatTime(duration)}</span>
    </div>
};

