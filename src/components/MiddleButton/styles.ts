import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 54,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: theme.colors.purple200,
  },
  containerline: {
    borderWidth: 1,
    borderColor: theme.colors.purple200,
  },
  title: {
    color: theme.colors.white100,
    textAlign: 'center',

  }
});