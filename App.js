import { StatusBar } from 'expo-status-bar';
import Main from './src/components/Main';
import { NativeRouter } from 'react-router-native';
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { useFonts } from 'expo-font';
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Roboto_400Regular,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <NativeRouter>
        <Main />
      </NativeRouter>
      <StatusBar style="auto" />
    </>
  );
}
