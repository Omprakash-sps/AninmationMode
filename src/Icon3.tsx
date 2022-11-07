import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Modal,
    ImageBackground,
    TouchableOpacity,
    Image,
    Text,
    Animated,
    Button,
    Easing
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Lottie from 'lottie-react-native';
const Icon3 = (props) => {
    let opacity = new Animated.Value(0);
    let opacity1 = new Animated.Value(0);
    let opacity2 = new Animated.Value(0);
    let opacity3 = new Animated.Value(0);
    let opacity4 = new Animated.Value(0);
    let opacity5 = new Animated.Value(0);
    let opacity6 = new Animated.Value(0);
    let opacity7 = new Animated.Value(0);
    let opacity8 = new Animated.Value(0);
    let opacity9 = new Animated.Value(0);
    let droppingAnimation = new Animated.Value(0);
    let closeButton = new Animated.Value(0);

    useEffect(() => {
        setTimeout(() => {
            animate()
        }, 1500)
        animate1()
        droppingView()

    }, [props.visible])

    const droppingView = easing => {
        Animated.timing(droppingAnimation, {
            toValue: 50,
            duration: 3000,
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
            delay: 400,
            easing: Easing.bounce,
        }).start();
        opacity3.setValue(0)
        Animated.spring(opacity3, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 600,
            easing: Easing.bounce,
        }).start();
        opacity4.setValue(0)
        Animated.spring(opacity4, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 800,
            easing: Easing.bounce,
        }).start();
        opacity5.setValue(0)
        Animated.spring(opacity5, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1000,
            easing: Easing.bounce,
        }).start();
        opacity6.setValue(0)
        Animated.spring(opacity6, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 1200,
            easing: Easing.bounce,
        }).start();
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
    };

    const animate1 = easing => {
        Animated.spring(opacity1, {
            toValue: 1,
            useNativeDriver: true,
            duration: 900,
            bounciness: 10,
        }).start();

        Animated.spring(closeButton, {
            toValue: 1,
            useNativeDriver: true,
            duration: 700,
            bounciness: 10,
        }).start();
    };

    const closeAnimate = () => {
        Animated.spring(opacity1, {
            toValue: 0,
            useNativeDriver: true,
            delay: 800,
            bounciness: 10,
        }).start();

        Animated.spring(closeButton, {
            toValue: 0,
            useNativeDriver: true,
            delay: 300,
            bounciness: 10,
        }).start();
    }

    const size = opacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const size1 = opacity1.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const closeView = closeButton.interpolate({
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
    const animationStyles = {
        transform: [{ translateY: droppingAnimation }],
    };



    const closeModal = () => {
        closeAnimate()
        setTimeout(() => {
            props.backHandle()
        }, 1000)
    }

    return (
        <Modal
            transparent={true}
            visible={props.visible}
            backHandle={() => setModalVisible1(false)}
            onRequestClose={() =>
                props.backHandle()
            }>
            <View style={styles.modalView} >
                <Animated.View style={[{ transform: [{ scale: size1 }] }]}>
                    <Animated.View style={{ transform: [{ scale: closeView }] }} >
                        <TouchableOpacity onPress={() => closeModal()}>
                            <Image
                                style={styles.tinyLogo}
                                source={require('../assets/cancel.png')}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                    <ImageBackground source={require('../assets/Night.jpg')} style={styles.modalContainer}>
                    </ImageBackground>
                </Animated.View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContainer: {
        width: wp(90),
        height: hp(70),
        borderRadius: 5,
        borderColor: 'orange',
        borderWidth: 2,
        padding: 10,
        backgroundColor: 'lightgreen',
        overflow: 'hidden'
    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginTop: -40,
        alignSelf: 'flex-end'
    },
})

export default Icon3;