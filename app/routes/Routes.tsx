import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import ImageDetailViewModel from '../viewModels/ImageDetailViewModel';
import CarouselViewModel from '../viewModels/CarouselViewModel';
import VideoDetailViewModel from '../viewModels/VideoDetailViewModel';
import YoutubeDetailViewModel from '../viewModels/YoutubeDetailViewModel';
import ProductDetailViewModel from '../viewModels/ProductDetailViewModel';

type RootStackParamList = {
  CarouselScreen: Function;
  ImageDetailScreen: Function;
  VideoDetailScreen: Function;
  YoutubeDetailScreen: Function;
  ProductDetailScreen: Function;
};

const Stack = createStackNavigator<RootStackParamList>();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="ProductDetailScreen" component={ProductDetailViewModel} />
        <Stack.Screen name="CarouselScreen" component={CarouselViewModel} />
        <Stack.Screen name="ImageDetailScreen" component={ImageDetailViewModel} />
        <Stack.Screen name="VideoDetailScreen" component={VideoDetailViewModel} />
        <Stack.Screen name="YoutubeDetailScreen" component={YoutubeDetailViewModel} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
