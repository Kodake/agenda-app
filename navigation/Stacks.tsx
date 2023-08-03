import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();

const HomeView = () => {
    return (
        <>
            <Text>HomeView</Text>
        </>
    )
}

const SettingsView = () => {
    return (
        <>
            <Text>SettingsView</Text>
        </>
    )
}

export const HomeStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Home"
                component={HomeView}
            />
        </Stack.Navigator>
    );
}

export const SettingsStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen
                name="Settings"
                component={SettingsView} />
        </Stack.Navigator>
    );
}