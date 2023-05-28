import { StyleSheet } from "react-native";
import { windowWidth } from "../../config/helper";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  backgroundVideo: {
    height: 250,
    width: windowWidth,
  },
  closeView: {
    padding: 20,
  },
});