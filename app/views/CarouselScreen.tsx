import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  View,
  Text,
  Pressable,
} from 'react-native';
import React, { useState } from 'react';
import Glyphs from '../config/Glyphs';
import { data } from '../config/mockData';
import { windowWidth } from '../config/helper';
import { CarouselSlider } from '../common/CarouselSlider';
import { styles } from './styles/CarouselScreenStyle';

interface CarouselScreenProps {
  navigation: any;
  carouselData?: any;
  currentIndex?: any;
  setCurrentIndex?: any;
  handleVideoNavigation: any;
  handleImageNavigation: any;
}
const CarouselScreen: React.FC<CarouselScreenProps> = props => {

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(event) => {
            const scrollOffset = event.nativeEvent.contentOffset.x;
            const newIndex = Math.round(scrollOffset / windowWidth);
            props?.setCurrentIndex(newIndex);
         }}
        >
        {data.map((item) => (
          item?.isVideo ? (
            <Pressable onPress={() => props?.handleVideoNavigation(item?.isFromYoutube, item?.videoUrl)}>
            <Image key={item?.index} source={{uri: item?.image}} style={styles.image} />
          </Pressable>
          )
          : 
          <Pressable onPress={() => props?.handleImageNavigation(data, props?.currentIndex)}>
            <Image key={item?.index} source={{uri: item?.image}} style={styles.image} />
          </Pressable>
        ))}
      </ScrollView>
    </View>
      <CarouselSlider data={data} currentIndex={props?.currentIndex} isImageDetail={false} />
    </SafeAreaView>
  );
};


export default CarouselScreen;
