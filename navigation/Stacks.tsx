import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../views/Home";
import Settings from "../views/Settings";
import Customer from "../views/Customer";

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
        <Stack.Navigator initialRouteName="Settings" screenOptions={{ headerShown: false, headerBackTitleVisible: true }}>
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Customer" component={Customer}
                options={{
                    headerShown: true,
                    contentStyle: {backgroundColor: 'transparent'},
                    title: "",
                }}
            />
        </Stack.Navigator>
    );
}