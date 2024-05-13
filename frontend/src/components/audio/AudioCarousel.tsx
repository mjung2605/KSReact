import { Carousel, IconButton } from '@material-tailwind/react';
import { audios } from '@/assets/audio/audio';
import { AudioPlayer } from '@/components';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Mobile Audio Component
export const AudioCarousel = () => {

    return <div className='flex flex-row h-full justify-center'>
        <Carousel className='max-w-96'
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handlePrev}
            className="!absolute top-2/4 left-4 -translate-y-12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <FaAngleLeft size={32} />
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="black"
            size="lg"
            onClick={handleNext}
            className="!absolute top-2/4 !right-4 -translate-y-12" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}          >
            <FaAngleRight size={32}/>
          </IconButton>
        )}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-6 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-3 w-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "bg-ksBlack" : "bg-ksBlack/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      
        
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} loop={true} >

            <AudioPlayer audio={audios[0]} isMobile={true} />
            <AudioPlayer audio={audios[1]} isMobile={true} />
            <AudioPlayer audio={audios[2]} isMobile={true} />

        </Carousel>
        
    </div>

}
    