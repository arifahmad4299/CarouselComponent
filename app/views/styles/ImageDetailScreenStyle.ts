import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../config/helper";

export const styles = StyleSheet.create({
    root: {
      flex: 1,
      justifyContent: 'space-around'
    },
    closeIcon: {
      paddingRight: 10,
      paddingBottom: 10,
    },
    topContainer: {
      flex: 0.1,
      zIndex: 200,
    },
    mainContainer: {
      flex: 1,
    },
    bottomContainer: {
      flex: 0.1,
      justifyContent: 'flex-end',
    },
    tapOverlay: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },  
    resetButton: {
      position: 'absolute',
      bottom: 16,
      left: 16,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
      padding: 8,
      borderRadius: 8,
    },
    resetButtonText: {
      color: 'white',
      fontWeight: 'bold',
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    svgContainer: {
      backgroundColor: 'white',
    },
    image: {
      width: windowWidth - 10,
      marginHorizontal: 4,
      flex: 0.2,
      resizeMode: 'contain',
    },
  });