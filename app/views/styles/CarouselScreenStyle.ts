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
      width: windowWidth,
      height: 300,
      resizeMode: 'contain',
      backgroundColor: 'lightgrey'
    },
  });