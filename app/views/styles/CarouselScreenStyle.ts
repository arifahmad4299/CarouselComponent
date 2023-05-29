import { StyleSheet } from "react-native";
import { windowWidth } from "../../config/helper";

export const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: windowWidth - 30,
      marginHorizontal: 15,
      height: 300,
      resizeMode: 'stretch',
      borderRadius: 10,
      backgroundColor: 'lightgrey'
    },
    imageView: {
      width: windowWidth,
      height: 300,
      shadowColor: '#000000',
      shadowOffset: {
        width: 0,
        height: 1
      },
      shadowRadius: 5,
      shadowOpacity: 0.1,
      // resizeMode: 'contain',
      marginHorizontal: 15,
      backgroundColor: 'transparent',
    },
    detailsContainer: {
      // flex: 1,
      margin: 15,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    descriptionText: {
      fontSize: 20,
      fontWeight: '700',
      marginBottom: 9,
      color: 'grey'
    },
    price: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
      color: 'darkgreen'
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
    },
    featuresTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    features: {
      fontSize: 16,
    },
    addButton: {
      justifyContent: 'flex-end',
      backgroundColor: '#ff6f00',
      paddingVertical: 12,
      borderRadius: 4,
      alignItems: 'center',
    },
    addButtonLabel: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#fff',
    },
  });