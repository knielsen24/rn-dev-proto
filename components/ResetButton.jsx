import { TouchableOpacity } from "react-native";
import { COLORS } from "../lib/theme";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function ResetButton({ handleReset }) {
    return (
        <TouchableOpacity onPress={handleReset}>
            <MaterialCommunityIcons
                name="close-circle-outline"
                size={26}
                color={COLORS.gray400}
            />
        </TouchableOpacity>
    );
}
