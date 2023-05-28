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

 const handleVideoNavigation = (isFromYoutube: boolean, url: any) => {
    if(isFromYoutube)
      props.navigation.navigate('YoutubeDetailScreen', {url: url})
    else
      props.navigation.navigate('VideoDetailScreen', {url: url})
  }

  const handleImageNavigation = (data: any, currentIndex: any, image: any) => {
    console.log(image, 'CAROUSEL:::')
    props.navigation.navigate('ImageDetailScreen', {currentIndex: currentIndex, data: data, image: image})
  }

  return( 
    <CarouselScreen 
      {...{
        navigation: props.navigation,
        carouselData: carouselData,
        currentIndex: currentIndex,
        setCurrentIndex: setCurrentIndex,
        handleVideoNavigation: handleVideoNavigation,
        handleImageNavigation: handleImageNavigation,
     }}
    />
  );
};

export default CarouselViewModel;

