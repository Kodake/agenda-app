import { DrawerNavigationOptions, createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react'
import { HomeStack, SettingsStack } from './Stacks';

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
    return (
        <NavigationContainer>
            <Drawer.Navigator
                screenOptions={options}>
                <Drawer.Screen
                    name="Home page"
                    options={{
                        drawerLabel: 'Home',
                        title: 'Home'
                    }}
                    component={HomeStack} />
                <Drawer.Screen
                    name="Settings page"
                    options={{
                        drawerLabel: 'Settings',
                        title: 'Settings'
                    }}
                    component={SettingsStack} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default MainNavigation;