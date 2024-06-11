import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { COLORS, SIZES } from '@/constants';

import { useColorScheme } from '@/components/useColorScheme';
import { LinearGradient } from 'expo-linear-gradient';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    SegoeRegular: require('../assets/fonts/Segoe-UI.ttf'),
    SegoeBold: require('../assets/fonts/Segoe-UI-Bold.ttf'),
    SegoeItalic: require('../assets/fonts/Segoe-UI-Italic.ttf'),
    SegoeBoldItalic: require('../assets/fonts/Segoe-UI-Bold-Italic.ttf'),
    InterRegular: require('../assets/fonts/Inter-Regular.otf'),
    InterBold: require('../assets/fonts/Inter-Bold.otf'),
    InterItalic: require('../assets/fonts/Inter-Italic.otf'),
    InterBoldItalic: require('../assets/fonts/Inter-Bold-Italic.otf'),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen 
          name="productDetails"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Product Details',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="cart"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Keranjang(4)',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="checkout"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Detail Pesanan',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="editProfile"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Profil Pengguna',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="payment"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Bayar',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}
        />
        <Stack.Screen 
          name="chat"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Chat',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
        <Stack.Screen 
          name="notification"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Notification',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center',
          }}
        />
        <Stack.Screen 
          name="requestForm"
          // component={NotifScreen}
          options={{ 
            presentation: 'modal', 
            headerTitle: 'Request Form',
            headerBackground: () => (
              <LinearGradient
                colors={['#366FB3', '#4A8FE1']}
                style={{ flex: 1 }}
              />
            ),
            headerTintColor: COLORS.offwhite,
            headerTitleStyle: {
              fontWeight: 'bold',
            }
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
