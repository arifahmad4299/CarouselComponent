import { Pressable, StyleSheet, Text } from "react-native";

export const CloseButton = ({navigation}: any) => {
    return (
        <Pressable style={styles.buttonContainer} onPress={() => navigation.goBack()}>
            <Text style={styles.closeText}>Close</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
    }
  });