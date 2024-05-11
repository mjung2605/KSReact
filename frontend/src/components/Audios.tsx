import { audios } from '../assets/audio/audio';
import { AudioPlayer } from './AudioPlayer';

export const Audios = () => {

  return (
    <div className='flex flex-row w-full gap-16 justify-center flex-wrap'>
      <AudioPlayer audio={audios[0]} />
      <AudioPlayer audio={audios[1]} />
      <AudioPlayer audio={audios[2]} />
    
    </div>
  )
}

export default Audios;