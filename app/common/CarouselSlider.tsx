import { StyleSheet, View } from 'react-native';
import { MediaItem } from '../config/MediaItemInterface';
import {
  ActiveDot,
  ActiveImage,
  ActiveVideoIcon,
  InactiveDot,
  InactiveImage,
  InactiveVideoIcon,
} from './SliderIcons';

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
          ? data.map(({index, type, url}: MediaItem) => {
              return type !== 'video' && type !== 'youtube' ? (
                index === currentIndex ? (
                  <ActiveImage data={url} index={index} dataType={type} />
                ) : (
                  <InactiveImage
                    data={url}
                    setCurrentIndex={setCurrentIndex}
                    index={index}
                    setScale={setScale}
                    setTranslateX={setTranslateX}
                    setTranslateY={setTranslateY}
                    dataType={type}
                  />
                )
              ) : null;
            })
          : data?.map(({index, type, url}: MediaItem) => {
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
