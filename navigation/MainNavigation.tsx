import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { HomeStack, SettingsStack } from './Stacks';
import store from '../store/sharedStateStore';

const Drawer = createDrawerNavigator();

const options: DrawerNavigationOptions = {
  drawerStyle: {
    backgroundColor: '#fff',
    width: 200
  },
  headerStyle: {
    backgroundColor: '#254bbe',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold'
  }
}

const MainNavigation = () => {
  useEffect(() => {
    store.setCita('');
  }, []);
  
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={options}>
        <Drawer.Screen
          name="Settings page"
          options={{
            drawerLabel: 'Settings',
            title: 'Settings'
          }}
          component={SettingsStack} />
        <Drawer.Screen
          name="Home page"
          options={{
            drawerLabel: 'Home',
            title: 'Home'
          }}
          component={HomeStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigation;