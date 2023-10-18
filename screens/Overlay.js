// import { Text, View, Image, StyleSheet, Dimensions } from "react-native";

// export default function Overlay({ route }) {
//     const URL = route.params.imageURL;
//     const windowHeight = Dimensions.get('window').height; // Get the height of the window

//     return (
//         <View style={styles.container}>
//             <Image source={{ uri: URL }} style={[styles.image, { height: windowHeight * 0.4 }]} />
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//     },
//     image: {
//         width: "100%",
//     },
// });

import { Text, View, Image, StyleSheet } from "react-native";

export default function Overlay({ route }) {
    const URL = route.params.imageURL;

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: URL }}
                style={styles.image}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        width: "100%",
        aspectRatio: 1,
    },
});
