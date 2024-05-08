import { ReactNode } from "react";

export interface HeadingProps {
    title: string
    isTextWhite: boolean
}

export interface BlurryBackgroundProps {
    title: string;
    content: ReactNode;
}

import { Dispatch, MutableRefObject, SetStateAction } from "react"


export interface Audio {
    title: string,
    src: string
}

export interface DisplayTrackProps {
    audio: Audio
    audioRef: MutableRefObject<HTMLAudioElement | null>
    progressRef: MutableRefObject<HTMLInputElement | null>
    setDuration: Dispatch<SetStateAction<number>>
}

export interface AudioPlayerProps {
    audio: Audio
}

export interface ControlsProps {
    audioRef: MutableRefObject<HTMLAudioElement | null>
}

export interface ProgressBarProps {
    progressRef: MutableRefObject<HTMLInputElement | null>
    audioRef: MutableRefObject<HTMLAudioElement | null>
    timeProgress: number
    setTimeProgress: Dispatch<React.SetStateAction<number>>
    duration: number
    setDuration: Dispatch<SetStateAction<number>>
}

export type CustomCSSProperties = {
    [key: string]: string | number;
};
