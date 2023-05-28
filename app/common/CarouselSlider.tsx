import {StyleSheet, View } from "react-native";
import { ActiveDot, ActiveVideoIcon, InactiveDot, InactiveVideoIcon } from "./SliderIcons";

export const CarouselSlider = ({currentIndex, data, isImageDetail, setCurrentIndex, setScale, setTranslateX, setTranslateY}: any) => {
      return (
    <View style={styles.main}>
     {data.map((images: { image: any; isVideo: boolean }, index: React.Key | null | undefined) => (
        !images?.isVideo ? index === currentIndex  ? <ActiveDot />
          : <InactiveDot isImageDetail={isImageDetail} setCurrentIndex={setCurrentIndex} index={index} setScale={setScale} setTranslateX={setTranslateX} setTranslateY={setTranslateY} /> : null
       ))}
     {!isImageDetail && data.map((images: { image: any; isVideo: boolean }, index: React.Key | null | undefined) => 
        (
          images?.isVideo ? index === currentIndex  ? <ActiveVideoIcon /> : <InactiveVideoIcon /> : null
        ))}
        <View style={styles.paddingRight} />
      </View>
    )
}

const styles = StyleSheet.create({
    main: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paddingRight: {
        paddingRight: 4,
    }
  });