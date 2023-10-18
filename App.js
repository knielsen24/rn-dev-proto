import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { COLORS } from "./lib/theme";

import MainStack from "./navigators/MainStack";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {Platform.OS === "ios" ? (
                    <StatusBar barStyle={"light-content"} />
                ) : (
                    <StatusBar
                        barStyle="light-content"
                        backgroundColor={COLORS.violet400}
                    />
                )}
                <MainStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
