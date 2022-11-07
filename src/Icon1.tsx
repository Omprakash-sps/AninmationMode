import React, { useEffect, useState, useRef } from 'react';
import {
    View,
    StyleSheet,
    Dimensions,
    Modal,
    TouchableOpacity,
    Image,
    Animated,
    Easing,
    Text,
    ImageBackground
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Icon1 = (props) => {
    const [modalVisible, setModalVisible] = useState<boolean>(false);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const opacity = useRef(new Animated.Value(0)).current;
    let opacity1 = new Animated.Value(0);
    const img1 = useRef(new Animated.Value(0)).current;
    const img2 = useRef(new Animated.Value(0)).current;
    const img3 = useRef(new Animated.Value(0)).current;
    const Image4 = useRef(new Animated.Value(0)).current;
    const fadeAnim = useRef(new Animated.Value(0)).current;
    let opacity7 = new Animated.Value(0);
    let droppingAnimation = new Animated.Value(0);

    useEffect(() => {
        if (props.visible) {
            animate()
            droppingView()
            animate2()
        } else {
            animate1()
            droppingView()
            animate2()
        }
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

    const animate = (props) => {
        Animated.spring(opacity, {
            toValue: 1,
            duration: 1200,
            easing: Easing.bounce,
            useNativeDriver: true,
            friction: 1
        }).start();

        Animated.spring(img1, {
            toValue: 1,
            delay: 200,
            easing: Easing.elastic(4),
            useNativeDriver: true,
            friction: 1
        }).start();

        Animated.spring(img2, {
            toValue: 1,
            delay: 400,
            easing: Easing.elastic(4),
            useNativeDriver: true,
            friction: 1
        }).start();

        Animated.spring(img3, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
            friction: 1
        }).start();
        Animated.spring(img3, {
            toValue: 1,
            duration: 1200,
            useNativeDriver: true,
            friction: 1
        }).start();
    };



    const animate1 = (props) => {
        Animated.spring(opacity, {
            toValue: 0,
            duration: 1200,
            easing: Easing.bounce,
            useNativeDriver: true,
            friction: 1
        }).start();

        Animated.spring(img1, {
            toValue: 0,
            delay: 200,
            easing: Easing.elastic(4),
            useNativeDriver: true,
            friction: 1
        }).start();

        Animated.spring(img2, {
            toValue: 0,
            delay: 400,
            easing: Easing.elastic(4),
            useNativeDriver: true,
            friction: 1
        }).start();

        Animated.spring(img3, {
            toValue: 0,
            duration: 1200,
            useNativeDriver: true,
            friction: 1
        }).start();
        Animated.timing(Image4, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    };

    const size1 = img1.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });

    const size2 = img2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });


    const size3 = img3.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg']
    });
    const size4 = Image4.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const rotate = opacity7.interpolate({
        inputRange: [0, 1],
        outputRange: ['180deg', '360deg']
    });

    const size13 = opacity1.interpolate({
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
                <Animated.View style={[{ transform: [{ scale: size13 }] },]}>
                    <TouchableOpacity onPress={() => props.backHandle()}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/cancel.png')}
                        />
                    </TouchableOpacity>
                    <ImageBackground source={require('../assets/Naturepic.png')} style={styles.modalContainer}>
                        {/* <Animated.View style={{
                            alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row', marginTop: 20
                        }}>
                            <Animated.Image source={require("../assets/Image5.png")} style={{ height: 50, width: 50, margin: 15, transform: [{ rotate: size1 }, { scale: droppingAnimation }] }} />
                            <Animated.Image source={require("../assets/Image4.png")} style={{ height: 50, width: 50, margin: 15, transform: [{ rotate: size1 }, { scale: droppingAnimation }] }} />
                            <Animated.Image source={require("../assets/Image3.png")} style={{ height: 50, width: 50, margin: 15, transform: [{ rotate: size2 }, { scale: droppingAnimation }] }} />
                            <Animated.Image source={require("../assets/Image2.png")} style={{ height: 50, width: 50, margin: 15, transform: [{ rotate: size3 }, { scale: droppingAnimation }] }} />
                        </Animated.View> */}
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
        height: hp(50),
        borderRadius: 9,
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
        alignSelf: 'flex-end',
    },
})

export default Icon1;      