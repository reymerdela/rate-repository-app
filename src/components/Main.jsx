import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';

import RepositoryList from './RespositoryList';
import AppBar from './AppBar';
import theme from '../theme';
import SignIn from './SignIn';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.background.mainBg,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View styles={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </View>
  );
};
export default Main;
