import {StyleSheet, View} from 'react-native';
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
        ? data.map(
            (
              images: {image: any; isVideo: boolean},
              index: React.Key | null | undefined,
            ) =>
              !images?.isVideo ? (
                index === currentIndex ? (
                  <ActiveImage data={images?.image} index={index} />
                ) : (
                  <InactiveImage
                    data={images?.image}
                    setCurrentIndex={setCurrentIndex}
                    index={index}
                    setScale={setScale}
                    setTranslateX={setTranslateX}
                    setTranslateY={setTranslateY}
                  />
                )
              ) : null,
          )
        : data.map(
            (
              images: {image: any; isVideo: boolean},
              index: React.Key | null | undefined,
            ) =>
              !images?.isVideo ? (
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
              ) : null,
          )}
      {!isImageDetail &&
        data.map(
          (
            images: {image: any; isVideo: boolean},
            index: React.Key | null | undefined,
          ) =>
            images?.isVideo ? (
              index === currentIndex ? (
                <ActiveVideoIcon />
              ) : (
                <InactiveVideoIcon />
              )
            ) : null,
        )}
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
