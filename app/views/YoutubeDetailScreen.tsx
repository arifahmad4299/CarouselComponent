import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Video from 'react-native-video';
import { CloseButton } from '../common/CloseButton';
import { styles } from './styles/YoutubeDetailScreenStyle';
import WebView from 'react-native-webview';

interface VideoDetailProps {
  navigation: any;
}
const YoutubeDetailScreen: React.FC<VideoDetailProps> = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <CloseButton navigation={props?.navigation} />
        <WebView
        source={{ uri: 'https://www.youtube.com/watch?v=g2eaNeFzw1Q' }} // Replace with your desired URL
        style={styles.container}
      />
    </SafeAreaView>
  );
};

export default YoutubeDetailScreen;