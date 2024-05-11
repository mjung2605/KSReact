import { useRef, useState } from "react";


import { AudioPlayerProps } from "@/types"
import { AudioDisplayTrack, AudioControls, AudioProgressBar } from "."


export const AudioPlayer: React.FC<AudioPlayerProps> = ( {audio} ) => {

    const [timeProgress, setTimeProgress] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null)
    const progressRef = useRef<HTMLInputElement>(null)

    
    console.log(audioRef);

    return <div className="bg-ksWhite drop-shadow-md pb-3 pt-4 mx-20 px-4 flex flex-col content-evenly">
        <AudioDisplayTrack audio={audio} audioRef={audioRef} setDuration={setDuration} progressRef={progressRef} />
        <AudioControls audioRef={audioRef} />
        <AudioProgressBar progressRef={progressRef} audioRef={audioRef} timeProgress={timeProgress} duration={duration} setTimeProgress={setTimeProgress} setDuration={setDuration} />
    </div>
}

