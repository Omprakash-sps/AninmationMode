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
    Text
} from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
const Icon5 = (props) => {
    const [modalVisible1, setModalVisible1] = useState<boolean>(false);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const position = useRef(new Animated.Value(0)).current;
    const position2 = useRef(new Animated.Value(0)).current;
    const rotate1 = useRef(new Animated.Value(0)).current;
    const bounces = useRef(new Animated.Value(0)).current;
    const titlebounces = useRef(new Animated.Value(0)).current;

    const Icon1 = () => {
        position.setValue(0)
        Animated.timing(position, {
            toValue: 1,
            duration: 1000,
            delay: 1000,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();
        position2.setValue(0)
        Animated.timing(position2, {
            toValue: 1,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();

        Animated.spring(rotate1, {
            toValue: 1,
            delay: 1200,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();
    }

    const Icon2 = () => {
        position.setValue(0)
        Animated.timing(position, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: true,
        }).start();
        position2.setValue(0)
        Animated.timing(position2, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.bounce
        }).start();
        Animated.spring(position, {
            toValue: 0,
            duration: 600,
            useNativeDriver: true,
        }).start();
    }

    useEffect(() => {
        if (props.visible) {
            animate()
            setTimeout(() => {
                Icon1()
            }, 800);
        } else {
            Icon2()
        }

    }, [props.visible])

    const animate = () => {
        titlebounces.setValue(0);
        Animated.spring(titlebounces, {
            toValue: 1,
            useNativeDriver: true,
            delay: 300,
            bounciness: 10,
        }).start();

        bounces.setValue(0);
        Animated.spring(bounces, {
            toValue: 1,
            useNativeDriver: true,
            delay: 800,
            bounciness: 10,
        }).start();
    }

    const animateCloseTitle = () => {
        // titlebounces.setValue(0);
        Animated.spring(titlebounces, {
            toValue: 0,
            useNativeDriver: true,
            delay: 100,
            bounciness: 10,
        }).start();

        // bounces.setValue(0);
        Animated.spring(bounces, {
            toValue: 0,
            useNativeDriver: true,
            delay: 500,
            bounciness: 10,
        }).start();
    }

    const mtop = position.interpolate({
        inputRange: [0, 1],
        outputRange: [10, -10],
    })
    const ttop = position2.interpolate({
        inputRange: [0, 1],
        outputRange: [-30, 30],
    })

    const imgRotate = position.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

    const imgRotate1 = position2.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    })

    const bounceView = bounces.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const titleView = titlebounces.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1]
    });

    const closeModal = () => {
        animateCloseTitle()
        setTimeout(() => {
            props.backHandle()
        }, 1000)
    }


    return (
        <Modal
            // animationType="slide"
            transparent={true}
            visible={props.visible}
            backHandle={() => setModalVisible1(false)}
            onRequestClose={() =>
                props.backHandle()
            }>
            <View style={styles.modalView} >
                <Animated.View style={{ flexDirection: 'row', justifyContent: 'space-between', transform: [{ scale: titleView }] }}>
                    <Image source={require('../assets/Flowers2.jpeg')} style={{ fontSize: 29, color: 'orange', fontStyle: 'italic', fontWeight: 'bold', marginBottom: 10, marginRight: 30, width: 100, height: 100, borderRadius: 50 }} />
                    <TouchableOpacity onPress={() => closeModal()} style={{ alignSelf: 'flex-end', marginBottom: 5, position: 'absolute', right: -100, bottom: 120 }}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../assets/cancel.png')}
                        />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[{ transform: [{ scale: bounceView }] }]}>
                    <Animated.View style={{
                        justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',
                    }}>
                        <View style={{ borderRadius: 1, borderWidth: 10, borderColor: 'orange', width: 100, height: 200, top: 150, marginRight: 20 }}>
                            <View>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 7, marginLeft: 5 }} />
                                <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                            </View>
                            <View>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 7, marginLeft: 5 }} />
                                <Animated.View style={{ borderBottomWidth: 2, borderBottomColor: 'orange', marginTop: 15, }}></Animated.View>
                            </View>
                        </View>
                        <View style={{ borderRadius: 2, borderWidth: 10, borderColor: 'orange', width: 100, height: 270, top: 115, marginRight: 20 }}>
                            <View>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 1, marginLeft: 5 }} />
                            </View>
                            <View>
                                <Animated.Image source={require("../assets/Magic3.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 8, marginLeft: 5 }} />
                            </View>
                            <View>
                                <Animated.Image source={require("../assets/Magic2.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 10, marginLeft: 5 }} />
                            </View>
                        </View>
                        <View style={{ borderRadius: 2, borderWidth: 10, borderColor: 'orange', width: 100, height: 400, top: 50 }}>
                            <View>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 19, marginLeft: 5 }} />
                            </View>
                            <View>
                                <Animated.Image source={require("../assets/Magic3.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 10, marginLeft: 5 }} />
                            </View>
                            <View>
                                <Animated.Image source={require("../assets/Magic2.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 25, marginLeft: 5 }} />
                            </View>
                            <View>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 19, marginLeft: 5 }} />
                            </View>
                        </View>
                    </Animated.View>
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
        borderRadius: 10,
        padding: 10,
        backgroundColor: 'lightgreen'
    },
    tinyLogo: {
        width: 20,
        height: 20,
        alignSelf: 'flex-end'
    },
})

export default Icon5;      