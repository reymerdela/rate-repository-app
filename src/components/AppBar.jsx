import { View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.background.headerBg,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    color: '#fff',
    fontSize: theme.fontSizes.heading,
    fontWeight: theme.fontWeights.bold,
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab labelStyles={styles.text} label="Sign in" path="/signin" />
        <AppBarTab labelStyles={styles.text} label="Respositories" path="/" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
