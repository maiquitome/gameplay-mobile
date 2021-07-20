import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 103,
    height: 119,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20
  },
  title: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 15,
    marginTop: 15
  },
  check: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.secondary100,
    borderColor: theme.colors.secondary50,
    borderWidth: 1,
    borderRadius: 2
  },
  checked: {
    position: 'absolute',
    top: 7,
    right: 7,
    width: 8,
    height: 8,
    backgroundColor: theme.colors.primary,
    borderRadius: 2
  }
});
