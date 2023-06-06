import {StyleSheet} from 'react-native';
import {windowHeight} from '../../config/helper';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    zIndex: 430,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: windowHeight * 0.056,
    bottom: 0,
  },
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
    color: 'white',
  },
});