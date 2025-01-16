import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from './src/context/themeContext';
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import { SignInScreen } from './src/screens/Login/SignInScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold
  })
  
  return (
    <ThemeProvider>
      {fontsLoaded && <SignInScreen/>}
      <StatusBar style='light'/ >
    </ThemeProvider>
  );
}