import react from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../asserts/splash_bg.jpg')} />
            <View style={styles.middle}>
                <Image style={styles.rounded} source={require('../asserts/bg_center_1.jpg')} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: "100%",
        height: "100%",
        position: 'absolute',
        resizeMode: 'cover',
    },
    middle: {
        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: '#00dfff',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 5,
        borderColor: '#00dfff',
        marginBottom: 100
    },
    rounded: {
        width: 185,
        height: 185,
        borderRadius: 90,
    },
});

export default SplashScreen;



// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Recipe!</Text>
//       <Image
//         source={require('./images/food.png')}
//         style={styles.image}
//       />
//       <StatusBar style="auto" />
//     </View>
//   );
// }
// const styles = StyleSheet.create({
// container: {
// flex: 1,
// marginTop: 450,
// backgroundColor: '#fff',
// alignItems: 'center',
// justifyContent: 'center',
// fontSize: 100,
// fontWeight: 'bold',
// },
// });