import React from 'react';
import { useFonts } from 'expo-font';
import Footer from './components2/Footer';

const App = () => {
  const [fontsLoaded, error] = useFonts({
    'OpenSans-Regular': require('./assets/fonts/OpenSans-Regular.ttf'),
    'OpenSans-SemiBold': require('./assets/fonts/OpenSans-SemiBold.ttf'),
    'OpenSans-Bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'Poppins-Regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'Poppins-Medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'Poppins-SemiBold': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Bold': require('./assets/fonts/Poppins-Bold.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter-Regular.ttf')
  });

  if (!fontsLoaded && !error) return null;

  return <Footer />;
};
export default App;
