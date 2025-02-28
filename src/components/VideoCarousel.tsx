import { Carousel, IconButton } from '@material-tailwind/react';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

export const VideoCarousel = () => {

    return <div className='flex flex-row h-full justify-center'>
            <Carousel className='max-w-96' 

            /** left arrow */
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

            /** right arrow */
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

            /** dots/navigation at the bottom */
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div className="absolute bottom-2 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-3 w-3 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "bg-ksBlack" : "bg-ksBlack/50"
                    }`}
                    /** jumps to corresponding element */
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} loop={true} >
    


                <iframe className="aspect-video w-11/12 max-w-160 border-ksWhite border-8" src="https://www.youtube.com/embed/ZrXD5p31VDs?si=kDZo-1InkHoTWePS" title="Eingebettetes YouTube-Video"></iframe>
                <iframe className="aspect-video w-11/12 max-w-160 border-ksWhite border-8" src="https://www.youtube.com/embed/ZrXD5p31VDs?si=kDZo-1InkHoTWePS" title="Eingebettetes YouTube-Video"></iframe>
    
            </Carousel>
            
        </div>
}