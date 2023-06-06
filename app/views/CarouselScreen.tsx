import React, { useState } from 'react';
import { Image, Pressable, SafeAreaView, ScrollView, View } from 'react-native';
import { CarouselSlider } from '../common/CarouselSlider';
import Glyphs from '../config/Glyphs';
import { MediaItem, MediaType } from '../config/MediaItemInterface';
import { windowWidth } from '../config/helper';
import ImageDetailScreen from './ImageDetailScreen';
import VideoDetailScreen from './VideoDetailScreen';
import YoutubeDetailScreen from './YoutubeDetailScreen';
import { styles } from './styles/CarouselScreenStyle';


const CarouselScreen = ({data}: any) => {
  // const [carouselData, setCarouselData] = useState(data);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullImage, setFullImage] = useState(false);
  const [isVideoScreen, setVideoScreen] = useState(false);
  const [isYouTubeScreen, setYoutubeScreen] = useState(false);
  const [url, setUrl] = useState('');

  const finalData: MediaItem[] = data.map((url: string, index: number) => {
    let type: MediaType;

    if (url?.endsWith('.mp4')) {
      type = MediaType.Video;
    } else if (url?.includes('youtube.com') || url?.includes('youtu.be')) {
      type = MediaType.YouTube;
    } else if (url?.endsWith('.png' || '.jpeg' || '.jpg')) {
      type = MediaType.Image;
    } else {
      type = MediaType.Image;
    }

    return {url, type, index};
  });


  const fullImage = () => {
    return setFullImage(!isFullImage);
  };

  const fullVideo = (url?: string) => {
    setVideoScreen(!isVideoScreen);
  };

  const fullYoutubeVideo = () => {
    setYoutubeScreen(!isYouTubeScreen);
  };

  const RenderCarouselImage = (type: string, url: string) => {
    switch (type) {
      case MediaType.LocalImage:
        return <Image style={styles.image} source={Glyphs.YouTubeLogo} />;
      case MediaType.YouTube:
        return <Image style={styles.videoThumbnail} source={Glyphs.YouTubeLogo} />;
      case MediaType.Image:
        return <Image style={styles.image} source={{uri: url}} />;
      case MediaType.Video:
        return <Image style={styles.videoThumbnail} source={Glyphs.VideoIcon} />;
      default:
        return <Image style={styles.image} source={{uri: url}} />;
    }
  };

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
            {finalData?.map(({index, type, url}: MediaItem) => {
              return (
                <Pressable
                  key={index}
                  onPress={() => {
                    if (type === MediaType.YouTube) {
                      setYoutubeScreen(true);
                      setUrl(url);
                    } else if (type === MediaType.Video) {
                      setVideoScreen(true);
                      setUrl(url ? url : '');
                    } else {
                      setFullImage(true);
                    }
                  }}>
                  {RenderCarouselImage(type, url)}
                </Pressable>
              );
            })}
          </ScrollView>
        </View>
        <CarouselSlider
          data={finalData}
          currentIndex={currentIndex}
          isImageDetail={false}
        />
      </SafeAreaView>
      {isFullImage && (
        <ImageDetailScreen
          fullImage={fullImage}
          currentIndex={currentIndex}
          data={finalData}
        />
      )}
      {isVideoScreen && <VideoDetailScreen fullVideo={fullVideo} url={url} />}
      {isYouTubeScreen && (
        <YoutubeDetailScreen fullYoutubeVideo={fullYoutubeVideo} url={url} />
      )}
    </>
  );
};

export default CarouselScreen;
