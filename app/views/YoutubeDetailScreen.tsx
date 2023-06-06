import React from 'react';
import {SafeAreaView} from 'react-native';
import {CloseButton} from '../common/CloseButton';
import {styles} from './styles/YoutubeDetailScreenStyle';
import WebView from 'react-native-webview';
import { windowHeight } from '../config/helper';

const YoutubeDetailScreen = ({fullYoutubeVideo, url}: any) => {
  return (
    <SafeAreaView style={styles.root}>
      <CloseButton onPress={() => fullYoutubeVideo()} />
      <WebView source={{uri: url}} style={styles.container} />
    </SafeAreaView>
  );
};

export default YoutubeDetailScreen;
