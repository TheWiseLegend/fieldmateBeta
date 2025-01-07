import React from 'react';
import { GluestackUIProvider } from './components/ui/gluestack-ui-provider';
import { useFonts } from 'expo-font';
import Footer from './components/Footer';
import './global.css';

export default function App() {
  const [fontsLoaded, error] = useFonts({
    // @ts-expect-error
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'), // @ts-expect-error
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'), // @ts-expect-error
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'), // @ts-expect-error
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'), // @ts-expect-error
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'), // @ts-expect-error
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'), // @ts-expect-error
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'), // @ts-expect-error
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'), // @ts-expect-error
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'), // @ts-expect-error
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  });

  if (!fontsLoaded && !error) return null;

  return (
    <GluestackUIProvider mode="light">
      <Footer />
    </GluestackUIProvider>
  );
}
