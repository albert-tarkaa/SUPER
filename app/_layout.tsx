import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Inter-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="OnboardingScreen" options={{ headerShown: false }} />
        <Stack.Screen name="SignInScreen" options={{
          headerShown: false,
          headerTitle: '',
          headerBackTitleVisible: false,
          headerTransparent: true,
         }} />
        <Stack.Screen name="LetsKnowYouScreen" options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTransparent: true,
        }}
        />
        <Stack.Screen name="ForgotPasswordScreen" options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTransparent: true,
        }} />
        <Stack.Screen name="ResetPasswordScreen" options={{
            headerTitle: '',
            headerBackTitleVisible: false,
            headerTransparent: true,
        }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
    </ThemeProvider>
  );
}
