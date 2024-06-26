import portrait from "@/assets/audio/Katharina_Strikkeling_Hörbuch_Portait.mp3";
import hoerbuch from "@/assets/audio/Katharina_Strikkeling_Hörbuch.mp3";
import werbung from "@/assets/audio/Katharina_Strikkeling_Werbung.mp3"

import { Audio } from "@/types";

export const audios: Audio[] = [

    {
        title: "Portrait",
        src: portrait,
    },

    {
        title: "Hörbuch",
        src: hoerbuch,
    },

    {
        title: "Werbung",
        src: werbung,
    }

]