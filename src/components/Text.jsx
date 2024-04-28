import { Text as NativeText, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.textPrimary,
  },
  fontSizeSubHeanding: {
    fontSize: theme.fontSizes.subheading,
  },
  colorAlert: {
    color: theme.colors.alert,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});

const Text = ({ color, fontSize, fontWeight, style, children, ...props }) => {
  const textStyle = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorTextSecondary,
    color === 'alert' && styles.colorAlert,
    fontSize === 'subheading' && styles.fontSizeSubHeanding,
    fontWeight === 'bold' && styles.fontWeightBold,
    style,
  ];

  return (
    <NativeText style={textStyle} {...props}>
      {children}
    </NativeText>
  );
};

export default Text;
