import React, { useRef, useState, useEffect } from 'react';
import {
    Text,
    ImageBackground,
    TouchableOpacity,
    Animated,
    View,
    Easing,
    StyleSheet
} from 'react-native';
import Home from './src/Home';
import Icon2 from './src/Icon2';
import Icon3 from './src/Icon3';
import Icon4 from './src/Icon4';
import * as Animatable from 'react-native-animatable';
import Shimmer from 'react-native-shimmer';
import LinearGradient from 'react-native-linear-gradient';
import Icon5 from './src/Icon5';
import Icon12 from './src/Screen/Icon12';



const MainScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);
    const [modalVisible4, setModalVisible4] = useState(false);
    const [modalVisible5, setModalVisible5] = useState(false);
    const [modalVisible6, setModalVisible6] = useState(false);
    let opacity7 = new Animated.Value(0);
    let opacity8 = new Animated.Value(0);
    let opacity9 = new Animated.Value(0);
    const position = useRef(new Animated.Value(0)).current;
    let droppingAnimation = new Animated.Value(0);

    const icons1 = () => {
        Animated.spring(position, {
            toValue: 1,
            duration: 1000,
            bounciness: 20,
            useNativeDriver: true
        }).start()
    }
    const icons2 = () => {
        Animated.spring(position, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
        }).start()
        opacity7.setValue(0)
        Animated.spring(opacity7, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1400,
            easing: Easing.bounce,
        }).start();
        opacity8.setValue(0)
        Animated.spring(opacity8, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1600,
            easing: Easing.bounce,
        }).start();
        opacity9.setValue(0)
        Animated.spring(opacity9, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1800,
            easing: Easing.bounce,
        }).start();
    }

    useEffect(() => {
        if (props.visible) {
            icons1()
        } else {
            icons2()
        }
    }, [props.visible])

    const micons1 = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    })
    const size7 = opacity7.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const size8 = opacity8.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const size9 = opacity9.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
    const animationStyles = {
        transform: [{ translateY: droppingAnimation }],
    };

    return (
        <ImageBackground source={require("./assets/nature.jpg")} resizeMode="cover" style={{ flex: 1 }}>
            <Home
                visible={modalVisible}
                backHandle={() => setModalVisible(false)}
            />
            <Icon2
                visible={modalVisible1}
                backHandle={() => setModalVisible1(false)} />
            <Icon3 visible={modalVisible2}
                backHandle={() => setModalVisible2(false)}
            />
            <Icon4
                visible={modalVisible3}
                backHandle={() => setModalVisible3(false)}
            />
            <Icon5
                visible={modalVisible4}
                backHandle={() => setModalVisible4(false)}
            />
            <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={{ width: 20, marginTop: 150 }}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./assets/Image5.png")} style={{ height: 50, width: 50, marginTop: 15, transform: [{ rotate: micons1 }] }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible6(!modalVisible6)} style={{ width: 20 }}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./assets/Image1.png")} style={{ height: 50, width: 50, marginTop: 15, transform: [{ rotate: micons1 }] }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible2(!modalVisible2)} style={{ width: 20 }}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./assets/Image3.png")} style={{ height: 50, width: 50, marginTop: 15, transform: [{ rotate: micons1 }] }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible4(!modalVisible4)} style={{ width: 20 }}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./assets/Image1.png")} style={{ height: 50, width: 50, marginTop: 15, transform: [{ rotate: micons1 }] }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible1(!modalVisible1)} style={{ width: 20 }}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./assets/Image4.png")} style={{ height: 50, width: 50, marginTop: 15, transform: [{ rotate: micons1 }] }} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setModalVisible3(!modalVisible3)} style={{ width: 20 }}>
                <Animatable.Image animation="pulse" easing="ease-out" iterationCount="infinite" source={require("./assets/Image2.png")} style={{ height: 50, width: 50, marginTop: 15, transform: [{ rotate: micons1 }] }} />
            </TouchableOpacity>
            <View>
                <Shimmer style={styles.loading} duration={1000}>
                    <TouchableOpacity >
                        <View style={{ borderRadius: 8, paddingHorizontal: 8, paddingVertical: 14, backgroundColor: 'red', borderWidth: 1, marginLeft: 50, marginRight: 50 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', textTransform: 'uppercase', fontSize: 16, textAlign: 'center' }}>Click me</Text>
                        </View>
                    </TouchableOpacity>
                </Shimmer>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    loading: {
        marginVertical: 20,
    },
    linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5,
        marginBottom: 250,
        marginLeft: 50,
        marginRight: 50
    },
    buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 20,
        color: '#ffffff',
        backgroundColor: 'transparent',

    },
});

export default MainScreen;