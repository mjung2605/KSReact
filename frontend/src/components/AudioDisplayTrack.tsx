import "@/styles/App.css"

import { DisplayTrackProps } from "../types";

export const DisplayTrack: React.FC<DisplayTrackProps> = ( {audio, audioRef, progressRef, setDuration} ) => {

    const onLoadedMetadata = () => {

        if(audioRef.current && progressRef.current) {
            const seconds = parseInt(progressRef.current.value, 10);
            setDuration(seconds);
            progressRef.current.max = seconds.toString();
          
        }

    };

    return <div>
        <audio src={audio.src} ref={audioRef} onLoadedMetadata={onLoadedMetadata}></audio>
        <p>{audio.title}</p>
    </div>
    
};

export default DisplayTrack; 