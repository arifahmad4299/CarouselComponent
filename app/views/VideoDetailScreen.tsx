import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Video from 'react-native-video';
import { CloseButton } from '../common/CloseButton';
import { styles } from './styles/VideoDetailScreenStyle';

interface VideoDetailProps {
  navigation: any;
}
const VideoDetailScreen: React.FC<VideoDetailProps> = props => {
  return (
    <SafeAreaView style={styles.container}>
        <CloseButton navigation={props?.navigation} />
          <Video 
           style={styles.backgroundVideo} 
           source={{uri: 'https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4'}}
           ignoreSilentSwitch="ignore"
           controls={true}
           fullscreen={true}
           resizeMode={'contain'}
          />
        <View style={styles.closeView}/>
    </SafeAreaView>
  );
};

export default VideoDetailScreen;