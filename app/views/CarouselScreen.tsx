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
          style={styles.imageView}
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
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>Bose Noise Cancelling 700 Bluetooth</Text>
        <Text style={styles.price}>$99.99</Text>
        <Text style={styles.descriptionText}>Description</Text>
        <Text style={styles.description}>
          {`Keep your phone in your pocket and your head up to the world with easy access to voice assistants for music, navigation, weather and more confidently take a call or speak to Alexa in any environment.\nA with an unrivalled adaptive four-microphone system that isolates your voice from surrounding noise.\nOptimized for Amazon Alexa and the Google Assistant. \n`}
        </Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonLabel}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


export default CarouselScreen;
