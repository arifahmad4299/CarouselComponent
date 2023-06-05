import React from 'react';
import {View, SafeAreaView, Pressable, Text} from 'react-native';
import Video from 'react-native-video';
import {CloseButton} from '../common/CloseButton';
import {styles} from './styles/YoutubeDetailScreenStyle';
import WebView from 'react-native-webview';
import { windowHeight } from '../config/helper';

interface VideoDetailProps {
  navigation: any;
}
const YoutubeDetailScreen = ({fullYoutubeVideo, url}: any) => {
  return (
    <SafeAreaView style={{flex: 1, zIndex: 430, backgroundColor: 'white',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: windowHeight * 0.056,
    bottom: 0,
    }}>
      <Pressable
        style={styles.buttonContainer}
        onPress={() => fullYoutubeVideo()}>
        <Text style={styles.closeText}>Close</Text>
      </Pressable>
      <WebView source={{uri: url}} style={styles.container} />
    </SafeAreaView>
  );
};

export default YoutubeDetailScreen;
