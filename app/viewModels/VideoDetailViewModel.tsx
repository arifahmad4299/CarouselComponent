import React from 'react';
import VideoDetailScreen from '../views/VideoDetailScreen';

interface VideoDetailViewModelProps {
  navigation: any;
  route: any;
}
const VideoDetailViewModel: React.FC<VideoDetailViewModelProps> = props => {

  return( 
    <VideoDetailScreen 
      {...{
        navigation: props.navigation,
     }}
    />
  );
};

export default VideoDetailViewModel;

