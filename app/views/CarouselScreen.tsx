import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import Glyphs from '../config/Glyphs';
import {data} from '../config/mockData';
import {windowWidth} from '../config/helper';
import {CarouselSlider} from '../common/CarouselSlider';
import {styles} from './styles/CarouselScreenStyle';
import ImageDetailScreen from './ImageDetailScreen';
import {CloseButton} from '../common/CloseButton';
import VideoDetailScreen from './VideoDetailScreen';
import YoutubeDetailScreen from './YoutubeDetailScreen';

interface CarouselScreenProps {
  navigation: any;
  carouselData?: any;
  currentIndex?: any;
  setCurrentIndex?: any;
  isFullImage: any;
  setFullImage: any;
  isVideoScreen: boolean;
  setVideoScreen: any;
  url: string;
  setUrl: any;
  isYouTubeScreen: boolean,
  setYoutubeScreen: any,
}

const CarouselScreen = ({
  data
}: any) => {
  // const [carouselData, setCarouselData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullImage, setFullImage] = useState(false)
  const [isVideoScreen, setVideoScreen] = useState(false)
  const [isYouTubeScreen, setYoutubeScreen] = useState(false)
  const [url, setUrl] = useState('')

  
  const fullImage = () => {
    return setFullImage(!isFullImage);
  };

  const fullVideo = (url?: string) => {
    setVideoScreen(!isVideoScreen);
  };

  const fullYoutubeVideo = () =>{
    setYoutubeScreen(!isYouTubeScreen);
  }

  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <ScrollView
            horizontal
            pagingEnabled
            style={styles.imageView}
            showsHorizontalScrollIndicator={false}
            onMomentumScrollEnd={event => {
              const scrollOffset = event.nativeEvent.contentOffset.x;
              const newIndex = Math.round(scrollOffset / windowWidth);
              setCurrentIndex(newIndex);
            }}>
            {data?.map((item: any) =>
                <Pressable onPress={() => {
                  if(item?.videoUrl?.includes('youtu')) {
                    setYoutubeScreen(true)
                    setUrl(item?.videoUrl)
                  }
                  else if(item?.isVideo) {
                    setVideoScreen(true)
                    setUrl(item?.videoUrl ? item?.videoUrl : '')
                  }
                  else {
                    setFullImage(true)
                  }
                  }}>
                  <Image
                    key={item?.index}
                    source={{uri: item?.image}}
                    style={styles.image}
                  />
                </Pressable>
            )}
          </ScrollView>
        </View>
        <CarouselSlider
          data={data}
          currentIndex={currentIndex}
          isImageDetail={false}
        />
      </SafeAreaView>
      {isFullImage && (
        <ImageDetailScreen
          fullImage={fullImage}
          currentIndex={currentIndex}
          data={data}
        />
      )}
      {isVideoScreen && (
        <VideoDetailScreen fullVideo={fullVideo} url={url} />
      )}
      {isYouTubeScreen && (
        <YoutubeDetailScreen fullYoutubeVideo={fullYoutubeVideo} url={url} />
      )}
    </>
  );
};

export default CarouselScreen;
