import { StyleSheet } from "react-native";
import { windowHeight, windowWidth } from "../../config/helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    zIndex: 340,
    position: 'absolute',
    backgroundColor: 'white',
    left: 0,
    right: 0,
    top: windowHeight * 0.056,
    bottom: 0,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    width: 75,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: 'grey',
    backgroundColor: 'red',
    borderRadius: 5,
  },
  closeText: {
      fontWeight: '500',
      fontSize: 16,
      color: 'white'
  },
  backgroundVideo: {
    height: 250,
    width: windowWidth,
  },
  closeView: {
    padding: 20,
  },
});