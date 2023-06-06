import {StyleSheet, Text, View} from 'react-native';
import {
  ActiveDot,
  ActiveImage,
  ActiveVideoIcon,
  InactiveDot,
  InactiveImage,
  InactiveVideoIcon,
} from './SliderIcons';
import {MediaItem, MediaType} from '../config/MediaItemInterface';

export const CarouselSlider = ({
  currentIndex,
  data,
  isImageDetail,
  setCurrentIndex,
  setScale,
  setTranslateX,
  setTranslateY,
  isImageDots,
}: any) => {
  return (
      <View style={styles.main}>
        {isImageDetail
          ? data.map(({index, type, url}: any) => {
              return type !== 'video' && type !== 'youtube' ? (
                index === currentIndex ? (
                  <ActiveImage data={url} index={index} />
                ) : (
                  <InactiveImage
                    data={url}
                    setCurrentIndex={setCurrentIndex}
                    index={index}
                    setScale={setScale}
                    setTranslateX={setTranslateX}
                    setTranslateY={setTranslateY}
                  />
                )
              ) : null;
            })
          : data.map(({index, type, url}: any) => {
              return type !== 'video' &&
                type !== 'youtube' ? (
                index === currentIndex ? (
                  <ActiveDot />
                ) : (
                  <InactiveDot
                    isImageDetail={isImageDetail}
                    setCurrentIndex={setCurrentIndex}
                    index={index}
                    setScale={setScale}
                    setTranslateX={setTranslateX}
                    setTranslateY={setTranslateY}
                  />
                )
              ) : index === currentIndex ? (
                <ActiveVideoIcon />
              ) : (
                <InactiveVideoIcon />
              );
            })}
             <View style={styles.paddingRight} />
      </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paddingRight: {
    paddingRight: 4,
  },
});
