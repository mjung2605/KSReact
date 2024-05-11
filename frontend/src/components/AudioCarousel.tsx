import { Carousel } from '@material-tailwind/react';
import { CarouselProps } from '@material-tailwind/react';
import { audios } from '../assets/audio/audio';
import { AudioPlayer } from './AudioPlayer';
import Image1 from "../assets/img/kathi_frontview_darkened.jpg"

export const AudioCarousel = () => {

    return <Carousel className='rounded-xl' placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} >

        <div className='h-full w-full object-cover'>
            <img src="src/assets/img/kathi_frontview_darkened.jpg" alt="img" />
        </div>
        <div className='h-full w-full object-cover'>
            
            <img src="src/assets/img/kathi_frontview_darkened.jpg" alt="image" />
        </div>

    </Carousel>

}
    