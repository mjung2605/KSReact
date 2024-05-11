import { audios } from '@/assets/audio/audio';
import { AudioPlayer } from './AudioPlayer';

// Desktop Audio Component
export const AudioList = () => {

  return (
    <div className='flex flex-row w-full gap-16 justify-center'>
      <AudioPlayer audio={audios[0]} isMobile={false} />
      <AudioPlayer audio={audios[1]} isMobile={false} />
      <AudioPlayer audio={audios[2]} isMobile={false} />
    
    </div>
  )
}