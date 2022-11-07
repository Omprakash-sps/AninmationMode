import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Modal,
    ImageBackground,
    TouchableOpacity,
    Image,
    Animated,
    Easing,
    Text
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import GestureRecognizer from 'react-native-swipe-gestures';
const Icon2 = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    let opacity1 = new Animated.Value(0);
    let opacity7 = new Animated.Value(0);
    let opacity8 = new Animated.Value(0);
    let opacity9 = new Animated.Value(0);
    let droppingAnimation = new Animated.Value(0);

    useEffect(() => {
        setTimeout(() => {
            animate()
        }, 1500)
        animate2()
        droppingView()
    }, [props.visible])

    const droppingView = easing => {
        Animated.timing(droppingAnimation, {
            toValue: 1,
            duration: 3000,
            delay: 200,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    }

    const animate2 = easing => {
        Animated.spring(opacity1, {
            toValue: 1,
            useNativeDriver: true,
            duration: 900,
            bounciness: 10,
        }).start();
    };

    const animate = easing => {
        opacity7.setValue(0)
        Animated.spring(opacity7, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 200,
            easing: Easing.bounce,
        }).start();
        opacity8.setValue(0)
        Animated.spring(opacity8, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 400,
            easing: Easing.bounce,
        }).start();
        opacity9.setValue(0)
        Animated.spring(opacity9, {
            toValue: 1,
            useNativeDriver: true,
            bounciness: 25,
            delay: 600,
            easing: Easing.bounce,
        }).start();
    };

    const size13 = opacity1.interpolate({
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
        transform: [{ scale: droppingAnimation }],
    };


    return (
        <Modal
            transparent={true}
            visible={props.visible}
            backHandle={() => setModalVisible(false)}
            onRequestClose={() =>
                props.backHandle()
            }>
            <View style={styles.modalView} >
                <Animated.View style={[{ transform: [{ scale: size13 }] }]}>
                    <TouchableOpacity onPress={() => props.backHandle()}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/cancel.png')}
                        />
                    </TouchableOpacity>
                    <ImageBackground source={require('../assets/Naturepic.png')} style={styles.modalContainer} resizeMode='cover'>
                        {/* <View style={{
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
                        </View> */}
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
    },
    modalContainer: {
        width: wp(90),
        height: hp(70),
        borderRadius: 10,
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

export default Icon2;      