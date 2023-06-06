import { Image, Pressable, StyleSheet, Text } from "react-native";
import Glyphs from "../config/Glyphs";

export const CloseButton = ({onPress}: any) => {
    return (
        <Pressable style={styles.buttonContainer} onPress={onPress}>
            <Image style={styles.image} source={Glyphs.CloseIcon} />
        </Pressable>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      padding: 12,
      width: 40,
      height: 40,
      marginLeft: 15,
    },
    image: {
       height: 30,
       width: 30,
    }
  });