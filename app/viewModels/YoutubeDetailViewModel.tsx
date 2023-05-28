import React from 'react';
import YoutubeDetailScreen from '../views/YoutubeDetailScreen';

interface YoutubeDetailViewModelProps {
  navigation: any;
  route: any;
}
const YoutubeDetailViewModel: React.FC<YoutubeDetailViewModelProps> = props => {

  return( 
    <YoutubeDetailScreen 
      {...{
        navigation: props.navigation,
     }}
    />
  );
};

export default YoutubeDetailViewModel;

