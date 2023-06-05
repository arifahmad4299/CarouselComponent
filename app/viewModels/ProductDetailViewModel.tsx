import React from 'react';
import ProductDetailScreen from '../views/ProductDetailScreen';

interface ProductDetailViewModelProps {
  navigation: any;
  route: any;
}
const ProductDetailViewModel: React.FC<ProductDetailViewModelProps> = props => {
  return( 
    <ProductDetailScreen 
      {...{
        navigation: props.navigation,
     }}
    />
  );
};

export default ProductDetailViewModel;

