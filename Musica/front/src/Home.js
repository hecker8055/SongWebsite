import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Carousel from "./Components/Carousel"
import Home from "./Home.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from "react-router-dom";
import Favourite from "./Favourite";
import 'swiper/css';
import { Navigation, Pagination,Mousewheel} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "./Components/Images/Slider-2/1.webp"
import img2 from "./Components/Images/Slider-2/2.webp"
import img3 from "./Components/Images/Slider-2/3.webp"
import img4 from "./Components/Images/Slider-2/4.webp"
import img5 from "./Components/Images/Slider-2/5.webp"
import img6 from "./Components/Images/Slider-2/6.webp"
import img7 from "./Components/Images/Slider-2/7.webp"
import img8 from "./Components/Images/Slider-2/8.webp"
import img9 from "./Components/Images/Slider-2/9.webp"
import img10 from "./Components/Images/Slider-2/10.webp"
import img11 from "./Components/Images/Slider-2/11.webp"
import img12 from "./Components/Images/Slider-2/12.webp"
import img13 from "./Components/Images/Slider-2/13.webp"
import img14 from "./Components/Images/Slider-2/14.webp"
import img15 from "./Components/Images/Slider-2/15.webp"
import img16 from "./Components/Images/Slider-2/16.webp"
import img17 from "./Components/Images/Slider-2/17.webp"
import img18 from "./Components/Images/Slider-2/18.webp"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCirclePlay,faBackwardStep,faForwardStep, faHeart, faL} from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";



const Home1 = (props) => {

  const [current, setcurrent] = useState(0);
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


  const [volume, setvolume] = useState(30)


  const volumeChangeHandler=(e)=>{
    const newVolume= e.target.value;
    setvolume(newVolume);
  }

  const [heartColor, setHeartColor] = useState(false)

  const heartSubmit = ()=>{
    setHeartColor(!heartColor);

  }

  const style = heartColor
  ? { color: 'white' }
  : { color: 'red' };
  
  return (
    <>
    <Header song={song} current={current}/>
    <Carousel/>

{/*********************************************************   CURRENT PLAYING PAGE  *********************************************************** */}

    <div className="main fixed h-20 bg-white w-full z-10 bottom-0 shadow-inner flex flex-col">
       <input className=" range w-full top-0 absolute border-0 " type="range" />
       <div className="play flex items-center justify-evenly mt-5 w-full gap-40 ml-28">
           <h2 className="text-white w-48 gap-20 rounded-xl h-12 text-start"> {currentPlaying}</h2>
           <div className="control-play mb-3 " >
              <button className="text-white text-xl" onClick={prevSong}><FontAwesomeIcon className='mr-3 mb-px' icon={faBackwardStep} /></button>
              <button className="text-white text-2xl" ><FontAwesomeIcon className='heart' icon={faCirclePlay} /></button>
              <button className="text-white text-xl" onClick={nextSong} ><FontAwesomeIcon className='ml-3 mb-px' icon={faForwardStep} /></button>
           </div>
           <button className="text-white" style={style}><FontAwesomeIcon className='' onClick={heartSubmit} icon={faHeart}/></button>
           <input className="volume  -rotate-90 w-24 h-1" type="range" min={0} max={100} value={volume} onChange={volumeChangeHandler} />
       </div>
    </div> 
{/****************************************************************   HOME PAGE  *********************************************************** */}
    <div className="new-release mt-9">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            navigation={true}
            breakpoints={{
               0: {
                 slidesPerView: 3,
                 
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
    {/* /******************************************************Slider-3 ************************************************************************/ }

    <div className="new-release mt-6">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><card/></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
{/* /******************************************************Slider-4 ************************************************************************/ }

<div className="new-release mt-6">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>

    {/* /******************************************************Slider-5 ************************************************************************/ }

    <div className="new-release mt-6">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
{/* /******************************************************Slider-6 ************************************************************************/ }

<div className="new-release mt-6">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>

    {/* /******************************************************Slider-7 ************************************************************************/ }

<div className="new-release mt-6">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
    {/* /******************************************************Slider-8 ************************************************************************/ }

<div className="new-release mt-6">
      <h1 className="text-white  uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }}
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
    {/* /******************************************************Slider-9 ************************************************************************/ }

<div className="new-release mt-6">
      <h1 className="text-white uppercase mb-3 text-2xl font-medium">New releases</h1>
      <div className="slider-2">
         <Swiper
            spaceBetween={20}
            slidesPerView={6}
            cssMode={true}
            sticky={false}
            freeMode={{ enable: true }} 
            mousewheel={{
              mousewheel:true
            }}
            breakpoints={{
               0: {
                 slidesPerView: 6/2,
               },
               640: {
                 slidesPerView: 6,
               },
             }}
            navigation={true}
            modules={[Pagination, Navigation,Mousewheel]}
            className="mySwiper"
           >
            <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img7} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img8} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img9} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img10} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img11} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img12} alt="" /></SwiperSlide>
            <SwiperSlide><img src={img13} alt="" /></SwiperSlide>     
            <SwiperSlide><img src={img14} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img15} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img16} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img17} alt="" /></SwiperSlide>  
            <SwiperSlide><img src={img18} alt="" /></SwiperSlide>  
         </Swiper>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home1