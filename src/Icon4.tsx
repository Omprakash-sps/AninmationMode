import react, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Image,
    Animated,
    Easing
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

const Icon4 = (props) => {

    let opacity = new Animated.Value(0);
    let opacity2 = new Animated.Value(0);
    let opacity3 = new Animated.Value(0);
    let opacity4 = new Animated.Value(0);
    let opacity5 = new Animated.Value(0);
    let opacity6 = new Animated.Value(0);
    let opacity7 = new Animated.Value(0);
    let opacity8 = new Animated.Value(0);
    let opacity9 = new Animated.Value(0);
    const rotate1 = new Animated.Value(0);
    let droppingAnimation = new Animated.Value(0);

    useEffect(() => {
        setTimeout(() => {
            animate()
        }, 500)
        droppingView()
        animate1()
    }, [props.visible])

    const droppingView = easing => {
        Animated.timing(droppingAnimation, {
            toValue: 50,
            duration: 500,
            delay: 200,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    }

    const animate = easing => {
        opacity.setValue(0)
        Animated.spring(opacity, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 20,
            delay: 200,
            easing: Easing.bounce,
        }).start();
        opacity2.setValue(0)
        Animated.spring(opacity2, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 800,
            easing: Easing.bounce,
        }).start();
        opacity3.setValue(0)
        Animated.spring(opacity3, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1400,
            easing: Easing.bounce,
        }).start();
        opacity4.setValue(0)
        Animated.spring(opacity4, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1600,
            easing: Easing.bounce,
        }).start();
        opacity5.setValue(0)
        Animated.spring(opacity5, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1200,
            easing: Easing.bounce,
        }).start();
        opacity6.setValue(0)
        Animated.spring(opacity6, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1000,
            easing: Easing.bounce,
        }).start();
        opacity7.setValue(0)
        Animated.spring(opacity7, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1800,
            easing: Easing.bounce,
        }).start();
        opacity8.setValue(0)
        Animated.spring(opacity8, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 600,
            easing: Easing.bounce,
        }).start();
        opacity9.setValue(0)
        Animated.spring(opacity9, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 400,
            easing: Easing.bounce,
        }).start();
    };

    const animate1 = easing => {
        rotate1.setValue(0);
        Animated.spring(rotate1, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
            easing: Easing.bounce,
            bounciness: 10,
        }).start()
    };

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const size2 = opacity2.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const size3 = opacity3.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const size4 = opacity4.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const size5 = opacity5.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const size6 = opacity6.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });
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
    const rotate = rotate1.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 0]
    });

    const animationStyles = {
        transform: [{ translateY: droppingAnimation }],
    };

    return (
        <Modal
            transparent={true}
            animated
            animationType="fade"
            visible={props.visible}
            backHandle={() => setModalVisible1(false)}
            onRequestClose={() =>
                props.backHandle()
            }>
            <View style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                alignItems: 'center',
                justifyContent: 'center'

            }}>
                <Animated.View style={[styles.modalContainer, { transform: [{ translateY: rotate }] }]}>
                    <TouchableOpacity onPress={() => props.backHandle()} >
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/cancel.png')}
                        />
                    </TouchableOpacity>
                    <View>
                        <Animated.Text style={[{ fontSize: 29, color: 'orange', fontStyle: 'italic', marginTop: -50, marginLeft: 60, fontWeight: 'bold' }, animationStyles]}>Popup Card</Animated.Text>
                        <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 50, width: 163, marginLeft: 57 }}></Animated.View>
                    </View>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-evenly'
                    }}>
                        <View>
                            <Animated.Image source={require("../assets/Image5.png")} style={{ height: 70, width: 70, transform: [{ scale: size }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                        <View>
                            <Animated.Image source={require("../assets/Image4.png")} style={{ height: 70, width: 70, transform: [{ scale: size2 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                        <View>
                            <Animated.Image source={require("../assets/Image3.png")} style={{ height: 70, width: 70, transform: [{ scale: size3 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-evenly'
                    }}>
                        <View>
                            <Animated.Image source={require("../assets/Image5.png")} style={{ height: 70, width: 70, transform: [{ scale: size4 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                        <View>
                            <Animated.Image source={require("../assets/Image4.png")} style={{ height: 70, width: 70, transform: [{ scale: size5 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                        <View>
                            <Animated.Image source={require("../assets/Image3.png")} style={{ height: 70, width: 70, transform: [{ scale: size6 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                    </View>
                    <View style={{
                        alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-evenly'
                    }}>
                        <View>
                            <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, transform: [{ scale: size7 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                        <View>
                            <Animated.Image source={require("../assets/Magic2.gif")} style={{ height: 70, width: 70, transform: [{ scale: size8 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                        <View>
                            <Animated.Image source={require("../assets/Magic3.gif")} style={{ height: 70, width: 70, transform: [{ scale: size9 }] }} />
                            <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </Modal >
    )
}
const styles = StyleSheet.create({
    modalContainer: {
        width: wp(90),
        height: hp(70),
        borderRadius: 5,
        borderColor: 'orange',
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'lightgreen',
    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginTop: -40,
        alignSelf: 'flex-end'


    },
})
export default Icon4;