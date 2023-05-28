import React, { useState } from 'react';
import ImageDetailScreen from '../views/ImageDetailScreen';

interface ImageDetailViewModelProps {
  navigation: any;
  route: any;
}
const ImageDetailViewModel: React.FC<ImageDetailViewModelProps> = props => {
  const { params } = props?.route;

  const [currentNewIndex, setCurrentNewIndex] = useState(props?.route?.params?.currentIndex);

  return( 
    <ImageDetailScreen 
      {...{
        navigation: props.navigation,
        params: params,
        currentNewIndex,
        setCurrentNewIndex,
     }}
    />
  );
};

export default ImageDetailViewModel;

