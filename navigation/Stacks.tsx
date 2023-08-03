import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import Settings from "../views/Settings";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
}

export const SettingsStack = () => {
    return (
        <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
}