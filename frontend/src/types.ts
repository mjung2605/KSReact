import { ReactNode } from "react";

import { Dispatch, MutableRefObject, SetStateAction } from "react"



export interface HeadingProps {
    title: string
    isTextWhite: boolean
    isPageTitle: boolean
}

export interface BlurryBackgroundProps {
    title: string
    isPageTitle: boolean
    content: ReactNode
}



export interface Audio {
    title: string,
    src: string
}

export interface AudioDisplayTrackProps {
    audio: Audio
    audioRef: MutableRefObject<HTMLAudioElement | null>
    progressRef: MutableRefObject<HTMLInputElement | null>
    setDuration: Dispatch<SetStateAction<number>>
}

export interface AudioPlayerProps {
    audio: Audio
    isMobile: boolean
}

export interface AudioControlsProps {
    audioRef: MutableRefObject<HTMLAudioElement | null>
}

export interface AudioProgressBarProps {
    progressRef: MutableRefObject<HTMLInputElement | null>
    audioRef: MutableRefObject<HTMLAudioElement | null>
    timeProgress: number
    setTimeProgress: Dispatch<React.SetStateAction<number>>
    duration: number
    setDuration: Dispatch<SetStateAction<number>>
}

export type CustomCSSProperties = {
    [key: string]: string | number
}

export interface AudioTimeProps {
    time: number
    isTextAlignLeft: boolean
}
