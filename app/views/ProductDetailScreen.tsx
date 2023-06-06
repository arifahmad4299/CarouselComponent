import React from 'react';
import {Pressable, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/ProductDetailScreenStyle';
import CarouselScreen from './CarouselScreen';
import { tempData } from '../config/tempMockData';
import { localImages } from '../config/mockData';

interface ProductDetailScreenProps {
  navigation: any;
}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = props => {
  return (
    <>
      <SafeAreaView>
        <CarouselScreen data={tempData} localImagesData={localImages} />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Bose Noise Cancelling 700 Bluetooth</Text>
          <Text style={styles.price}>$99.99</Text>
          <Text style={styles.descriptionText}>Description</Text>
          <Text style={styles.description}>
            {`Keep your phone in your pocket and your head up to the world with easy access to voice assistants for music, navigation, weather and more confidently take a call or speak to Alexa in any environment.\nA with an unrivalled adaptive four-microphone system that isolates your voice from surrounding noise.\nOptimized for Amazon Alexa and the Google Assistant. \n`}
          </Text>
          <Pressable
            style={styles.addButton}
            onPress={() => props.navigation.navigate('CarouselScreen')}>
            <Text style={styles.addButtonLabel}>Add to Cart</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </>
  );
};

export default ProductDetailScreen;
