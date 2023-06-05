import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
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
});