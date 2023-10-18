import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../lib/theme";

import Home from "../screens/Home";

const Stack = createNativeStackNavigator();

export default function MainStack() {
    return (
        <Stack.Navigator initialRouteName="Home"
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
                options={{ title: "ARNDP Image Search Engine" }}
            />
        </Stack.Navigator>
    );
}
