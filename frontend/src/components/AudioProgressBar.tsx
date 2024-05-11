import "../index.css"
import { useEffect, useState } from "react";
import { AudioProgressBarProps, CustomCSSProperties } from "../types";
import { AudioTime } from "./AudioTime";

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

    


      /** TODO(): style progress bar */
    return <div className="py-4 grid grid-cols-2 gap-2 justify-self-center">
        
        <input className="range-slider col-span-2" type="range" ref={progressRef} defaultValue="0" onChange={handleProgressChange} max={duration} style={progressStyle}/>
      
        <AudioTime time={timeProgress} isTextAlignLeft={true} />
        <AudioTime time={duration} isTextAlignLeft={false} />
        
    </div>
};

