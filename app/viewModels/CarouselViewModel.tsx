import React, { useState } from 'react';
import CarouselScreen from '../views/CarouselScreen';
import { data } from '../config/mockData';

interface CarouselViewModelProps {
  navigation: any;
  route: any;
}
const CarouselViewModel: React.FC<CarouselViewModelProps> = props => {

  const [carouselData, setCarouselData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullImage, setFullImage] = useState(false)
  const [isVideoScreen, setVideoScreen] = useState(false)
  const [isYouTubeScreen, setYoutubeScreen] = useState(false)
  const [url, setUrl] = useState('')

  return( 
    <CarouselScreen 
      {...{
        navigation: props.navigation,
        carouselData: carouselData,
        currentIndex: currentIndex,
        setCurrentIndex: setCurrentIndex,
        isFullImage: isFullImage,
        setFullImage: setFullImage,
        isVideoScreen: isVideoScreen,
        setVideoScreen: setVideoScreen,
        url: url,
        setUrl: setUrl,
        isYouTubeScreen: isYouTubeScreen,
        setYoutubeScreen: setYoutubeScreen,
     }}
    />
  );
};

export default CarouselViewModel;

