import React, { useRef, useState } from 'react';
import { View, SafeAreaView, ScrollView, PanResponder, Pressable } from 'react-native';
import { CloseButton } from '../common/CloseButton';
import { styles } from './styles/ImageDetailScreenStyle';
import { CarouselSlider } from '../common/CarouselSlider';
import Svg, { Image } from 'react-native-svg';
import { windowHeight, windowWidth } from '../config/helper';

interface ImageDetailProps {
  navigation: any;
  route?: any;
  params?: any;
  currentNewIndex?: any;
  setCurrentNewIndex?: any;
}
const ImageDetailScreen: React.FC<ImageDetailProps> = props => {
  const imageWidth = windowWidth;
  const imageHeight = windowHeight;

  const [scale, setScale] = useState(1);
  const [translateX, setTranslateX] = useState(0);
  const [translateY, setTranslateY] = useState(0);
  const [previousDistance, setPreviousDistance] = useState(0);

  const imageRef = useRef();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      const { dx, dy, pinch, previousPinch } = gesture;

      if (pinch && previousPinch) {
        const distance = calculateDistance(
          pinch,
          previousPinch
        );
        const newScale = scale * (distance / previousDistance);
        setScale(newScale);
      } else {
        setTranslateX(translateX + dx);
        setTranslateY(translateY + dy);
      }
    },
    onPanResponderRelease: () => {
      setPreviousDistance(0);
    },
    onPanResponderTerminate: () => {
      setPreviousDistance(0);
    },
  });

  const handleDoubleTap = () => {
    const newScale = scale === 1 ? 2 : 1;
    setScale(newScale);

    // Calculate the position of the double tap
    const tapX = imageWidth / 2;
    const tapY = imageHeight / 2;

    // Calculate the translation values based on the double tap position
    const imageRefWidth = imageWidth * newScale;
    const imageRefHeight = imageHeight * newScale;
    const newTranslateX = tapX - (tapX / scale) * newScale;
    const newTranslateY = tapY - (tapY / scale) * newScale;

    setTranslateX(newTranslateX);
    setTranslateY(newTranslateY);
  };

  const calculateDistance = (pinch, previousPinch) => {
    const dx = pinch.x - previousPinch.x;
    const dy = pinch.y - previousPinch.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const transformStyle = {
    transform: [
      { translateX: translateX },
      { translateY: translateY },
      { scale: scale },
    ],
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.topContainer}>
        <CloseButton navigation={props?.navigation} />
      </View>
        <View style={styles.container}>
      <Svg
        width={imageWidth}
        height={imageHeight}
        style={styles.svgContainer}
        {...panResponder.panHandlers}
      >
        <Image
          ref={imageRef}
          width={imageWidth}
          height={imageHeight}
          href={props?.params?.data[props?.currentNewIndex]?.image}
          onPress={handleDoubleTap}
          style={transformStyle}
        />
      </Svg>
    </View>
      <View style={styles.bottomContainer}>
        <CarouselSlider
          data={props?.params?.data}
          setScale={setScale}
          setTranslateX={setTranslateX}
          setTranslateY={setTranslateY}
          isImageDetail={true}
          setCurrentIndex={props?.setCurrentNewIndex}
          currentIndex={props?.currentNewIndex} />
      </View>
    </SafeAreaView>
  );
};

export default ImageDetailScreen; 