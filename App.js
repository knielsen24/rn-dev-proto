import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import MainStack from "./navigators/MainStack";

export default function App() {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <StatusBar style="auto" />
                <MainStack />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
