import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 155,
    height: 54,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: theme.colors.purple200,
  },
  containerline: {
    width: 155,
    height: 54,
    alignItems: 'center',
    justifyContent: "center",
    flexDirection: 'row',
    borderRadius: 8,
    backgroundColor: theme.colors.white100,
    borderWidth: 1,
    borderColor: theme.colors.purple200,
  },
  title: {
    color: theme.colors.white100,
    textAlign: 'center',

  },
  titleLine: {
    color: theme.colors.purple200,
    textAlign: 'center',
  }
});