import React, {useRef, useState} from 'react';
import {View, SafeAreaView, PanResponder, Pressable, Text} from 'react-native';
import {styles} from './styles/ImageDetailScreenStyle';
import {CarouselSlider} from '../common/CarouselSlider';
import Svg, {Image} from 'react-native-svg';
import {windowHeight, windowWidth} from '../config/helper';
import {CloseButton} from '../common/CloseButton';

const ImageDetailScreen = ({fullImage, currentIndex, data}: any) => {
  const imageWidth = windowWidth;
  const imageHeight = windowHeight;

  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [currentNewIndex, setCurrentNewIndex] = useState(currentIndex);

  const imageRef = useRef();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const {dx, dy} = gesture;
      if (translateX + dx <= 0 && translateX + dx >= -390 && scale > 1) {
        if (translateY + dy >= -500 && translateY + dy <= -380) {
          setTranslateX(translateX + dx);
          setTranslateY(translateY + dy);
        }
      }
    },
  });

  const handleDoubleTap = () => {
    const newScale = scale === 1 ? 2 : 1;
    setScale(newScale);

    // Calculate the position of the double tap
    const tapX = imageWidth / 2;
    const tapY = imageHeight / 2;

    // Calculate the translation values based on the double tap position
    const newTranslateX = tapX - (tapX / scale) * newScale;
    const newTranslateY = tapY - (tapY / scale) * newScale;

    setTranslateX(scale === 1 ? newTranslateX : 0);
    setTranslateY(scale === 1 ? newTranslateY : 0);
  };

  const transformStyle = {
    transform: [
      {translateX: translateX},
      {translateY: translateY},
      {scale: scale},
    ],
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topContainer}>
        <CloseButton onPress={() => fullImage()}/>
      </View>
      <View style={styles.container}>
        <Svg
          width={imageWidth}
          height={imageHeight}
          style={styles.svgContainer}
          {...panResponder.panHandlers}>
          <Image
            ref={imageRef}
            width={imageWidth}
            height={imageHeight}
            href={data?.type === 'local-data'? data[currentNewIndex] : data[currentNewIndex]?.url}
            onPress={handleDoubleTap}
            style={transformStyle}
          />
        </Svg>
      </View>
      <View style={styles.bottomContainer}>
        <CarouselSlider
          data={data}
          setScale={setScale}
          isImageDots={true}
          setTranslateX={setTranslateX}
          setTranslateY={setTranslateY}
          isImageDetail={true}
          setCurrentIndex={setCurrentNewIndex}
          currentIndex={currentNewIndex}
        />
      </View>
    </SafeAreaView>
  );
};

export default ImageDetailScreen;
