import { View, StyleSheet, Text, Pressable } from "react-native";

export const ActiveDot = () => {
    return (<View style={styles.activeDot} />)
}

export const InactiveDot = ({setCurrentIndex, index, isImageDetail, setScale, setTranslateX, setTranslateY}: any) => {
    return (
      <Pressable 
      onPress={() => {
        if(isImageDetail) {
          setScale(1);
          setTranslateX(0);
          setTranslateY(0);
          setCurrentIndex(index)
        }
        }}>
        <View style={styles.inactiveDot} />
      </Pressable>
    )
}


 export const ActiveVideoIcon = () => {
    return (
      <View style={styles.container}>
        <View style={styles.triangle} />
      </View>
    );
  };

  export const InactiveVideoIcon = () => {
    return (
      <View style={styles.container}>
        <View style={styles.inactiveTriangle} />
      </View>
    );
  };


const styles = StyleSheet.create({
    activeDot: {
      width: 10,
      margin: 4,
      height: 10,
      backgroundColor: 'darkblue',
      borderRadius: 25,
    },
    inactiveDot: {
        width: 10,
        margin: 4,
        height: 10,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 25, 
    },
    container: {
        width: 15,
        height: 15,
        margin: 4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      triangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'darkblue',
        transform: [{ rotate: '90deg' }],
      },
      inactiveTriangle: {
        width: 0,
        height: 0,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderLeftWidth: 6,
        borderRightWidth: 6,
        borderBottomWidth: 10,
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        borderBottomColor: 'lightgrey',
        transform: [{ rotate: '90deg' }],
      }
  });