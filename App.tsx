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

export default function App() {
  const [fontsLoaded] = useFonts({
   Inter_400Regular,
   Inter_500Medium,
   Inter_600SemiBold,
   Inter_700Bold
  })
  
  return (
    <ThemeProvider>
      <StatusBar style='light'/ >
    </ThemeProvider>
  );
}