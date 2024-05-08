import "@/styles/ProgressBar.css"
import "@/styles/App.css"
import { useEffect, useState } from "react";
import { ProgressBarProps, CustomCSSProperties } from "../types";

export const ProgressBar: React.FC<ProgressBarProps> = ( {progressRef, audioRef, timeProgress, setTimeProgress, duration, setDuration} ) => {


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

    return <div className="progress-bar">
        <span className="time current">{formatTime(timeProgress)}</span>
        <input type="range" ref={progressRef} defaultValue="0" onChange={handleProgressChange} max={duration} style={progressStyle}/>
        <span className="time">{formatTime(duration)}</span>
    </div>
};

export default ProgressBar;