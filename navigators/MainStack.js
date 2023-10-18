import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../lib/theme";

import Home from "../screens/Home";
import Overlay from "../screens/Overlay";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.violet500,
                },
                headerTintColor: COLORS.gray100,
                headerTitleStyle: {
                    fontWeight: "bold",
                },
            }}
        >
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ title: "Pixabay Lite" }}
            />
            <Stack.Screen
                name="Overlay"
                component={Overlay}
                options={{ title: "View Photo" }}
            />
        </Stack.Navigator>
    );
}
