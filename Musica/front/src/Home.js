import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Carousel from "./Components/Carousel"
import Home from "./Home.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay,faBackwardStep,faForwardStep, faHeart, faCirclePause} from '@fortawesome/free-solid-svg-icons'
import { useRef, useState ,useEffect } from "react";
import Card1 from "./Components/Card"




const Home1 = (props) => {

  const [current, setcurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0);
  const [song, setsong] = useState([
    "Leke Prabhu Ka naam",
    "Faded",
    "Harley's in Hawai",
    "Kahani Suno",
    "song-5",
    "song-6"
  ])


  const currentPlaying= song[current];

  const nextSong=()=>{
     if(current + 1 < song.length)
     {
      setcurrent(current+1);
     }
     else{
      setcurrent(0);
     }
  }

  const prevSong =()=>{
    if(current-1<song.length && current-1>=0)
    {
       setcurrent(current-1);
    }
    else{
      setcurrent(0);
    }
  }


  const [heartColor, setHeartColor] = useState(false)

  const togglePlayPause=()=>{
    const prevValue=isPlaying;
    setIsPlaying(!prevValue)
    if(!prevValue)
    {
      audioPlayer.current.play();
      animationRef.current=requestAnimationFrame(whilePlaying);
    }
    else{
      audioPlayer.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  }

  


  // reference

  const audioPlayer=useRef();
  const progressBar = useRef();
  const animationRef = useRef();

  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);


  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  }


  const whilePlaying =()=>{
    progressBar.current.value=audioPlayer.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current=requestAnimationFrame(whilePlaying);
  }

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    changePlayerCurrentTime();
  }



   const changePlayerCurrentTime=()=>{
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value / duration * 100}%`)
    setCurrentTime(progressBar.current.value);
   }


  const style = heartColor
  ? { color: 'white' }
  : { color: 'red' };

  let new1 = currentPlaying;

  const [favourite, setFavourite] = useState([])

  const addFavouriteSongs = (song1) => {
    setHeartColor(!heartColor);
		const newFavouriteList = [...favourite, song1];
		setFavourite(newFavouriteList);
		// saveToLocalStorage(newFavouriteList);
    return(
      <>
      <div className="text-black">{new1};</div>
        
      </>
    )
	};
  
  return (
    <>
    <Header song={song} current={current}/>
    <Carousel/>

{/*********************************************************   CURRENT PLAYING PAGE  *********************************************************** */}

    <div className="main fixed h-20 bg-white w-full z-10 bottom-0 shadow-inner flex flex-col">
       <input className=" range w-full top-0 absolute border-0 " type="range" defaultValue="0" ref={progressBar} onChange={changeRange}/>
       <audio ref={audioPlayer} src="http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3" preload="metadata"></audio>
       <div className="play flex items-center justify-evenly mt-5 w-full ">
           <h2 className="text-white w-48 gap-20 rounded-xl h-12 text-start"> {currentPlaying}</h2>
           <div className="music-duration flex w-32">
              <div className=" current text-white mb-5 mr-1">{calculateTime(currentTime)}</div>
              <div className="text-white mb-5">/</div>
              <div className="duration text-white mb-5 ml-1" ref={progressBar}>{(duration && !isNaN(duration)) && calculateTime(duration)}</div>
           </div>
           <div className="control-play mb-3 " >
              <button className="text-white text-xl" onClick={prevSong}><FontAwesomeIcon className='mr-3 mb-px' icon={faBackwardStep} /></button>
              <button className="text-white text-2xl"onClick={togglePlayPause} >{(isPlaying)?<FontAwesomeIcon className='' icon={faCirclePause} />:<FontAwesomeIcon className='' icon={faCirclePlay} />}</button>
              <button className="text-white text-xl" onClick={nextSong} ><FontAwesomeIcon className='ml-3 mb-px' icon={faForwardStep} /></button>
           </div>
           <button className="text-white mr-80 mb-3" style={style} handleFavouritesClick={addFavouriteSongs}><FontAwesomeIcon className=''  icon={faHeart}/></button>
       </div>
    </div> 
{/****************************************************************   HOME PAGE  *********************************************************** */}
    
<Card1/>
<Card1/>
<Card1/>
<Card1/>
    
    <Footer/>
    </>
  )
}

export default Home1