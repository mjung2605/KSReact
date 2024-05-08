import { useEffect, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa6";
import { AudioControlsProps } from "../types";

export const AudioControls: React.FC<AudioControlsProps> = ( {audioRef} ) => {

    const [isPlaying, setIsPlaying] = useState(false);


    const togglePlayPause = () => {
        /* sets Play State to opposite of what it was before (true/false) */
        setIsPlaying((prev) => !prev)
    }

    useEffect(() => {

        if(isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
         }

    }, [isPlaying, audioRef]); /* useEffect will be triggered each time isPlaying or audioRef changes */

    return <div className="controls-wrapper">
        <div className="controls">
            <button onClick={togglePlayPause}>
                { 
                    /* changes Icon depending on Play State */
                    isPlaying ? <FaPause /> : <FaPlay />
                }
            </button>
        </div>
    </div>
};

export default AudioControls;