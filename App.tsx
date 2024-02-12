import { Appearance, StyleSheet, Text, View, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer, Theme, DarkTheme, DefaultTheme } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import DarkMode from './src/utils/darkmode.contex';

type Props = {};

const App = (props: Props) => {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [useDeviceSettings, setUseDeviceSettings] = useState(false);

  const scheme = useColorScheme(); 

  const CustomDarkTheme: Theme = {
    ...DarkTheme,
    dark: true,
    colors: {
      ...DarkTheme.colors,
      primary: 'white',
      background: '#202120',
      card: '#121212',
    },
  };

  useEffect(() => {
    let subscription: any;

    if (useDeviceSettings) {
      subscription = Appearance.addChangeListener((scheme: any) => {
        setIsDarkMode(scheme.colorScheme === 'dark');
      });
    }

    return () => {
      if (subscription) {
        subscription.remove();
        subscription = null;
      }
    };
  }, [scheme, isDarkMode, useDeviceSettings]);

  return (
    <DarkMode.Provider
      value={{
        isDarkMode, 
        setIsDarkMode,
        useDeviceSettings,
        setUseDeviceSettings
      }}
    >
      <NavigationContainer theme={isDarkMode ? CustomDarkTheme : DefaultTheme} >
        <StackNavigator />
      </NavigationContainer>
    </DarkMode.Provider>
    
  );
};

export default App;

const styles = StyleSheet.create({});
