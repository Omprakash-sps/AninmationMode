import react, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Image,
    Animated,
    Easing,
    Text
} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as Animatable from 'react-native-animatable';

const Icon6 = (props) => {

    let opacity7 = new Animated.Value(0);
    let opacity8 = new Animated.Value(0);
    let opacity9 = new Animated.Value(0);
    let arrow = new Animated.Value(0);
    const rotate1 = new Animated.Value(0);
    let droppingAnimation = new Animated.Value(0);

    useEffect(() => {
        setTimeout(() => {
            droppingView()
        }, 1000)
        animate1()
    }, [props.visible])

    const droppingView = easing => {
        opacity7.setValue(0)
        Animated.timing(droppingAnimation, {
            toValue: 20,
            duration: 1000,
            delay: 50,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
        opacity8.setValue(0)
        Animated.timing(droppingAnimation, {
            toValue: 50,
            duration: 1000,
            delay: 200,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
        opacity9.setValue(0)
        Animated.timing(droppingAnimation, {
            toValue: 50,
            duration: 1000,
            delay: 200,
            easing: Easing.bounce,
            useNativeDriver: true,
        }).start();
    };

    const arrowmove = () => {
        arrow.setValue(0);
        Animated.timing(arrow, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true
        }).start();
    }

    const animate1 = easing => {
        Animated.timing(rotate1, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true
        }).start()
    };


    const size = opacity7.interpolate({
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
    const size10 = arrow.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 30]
    });

    const rotate = rotate1.interpolate({
        inputRange: [0, 1],
        outputRange: [200, 0]
    });

    const closeModal = () => {
        arrowmove()
        setTimeout(() => {
            props.backHandle()
        }, 400)
    }

    const animationStyles = {
        transform: [{ translateY: droppingAnimation }],
    };

    return (
        <Modal
            transparent={true}
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
                <View style={{ flexDirection: 'row' }}>
                    <Animated.View style={[{ transform: [{ translateY: rotate }] }]}>

                        <Animated.View style={{ transform: [{ translateX: size10 }] }}>
                            <TouchableOpacity onPress={() => closeModal()}  >
                                <Image
                                    style={styles.tinyLogo}
                                    source={require('../assets/Leftarrow.png')}
                                />
                            </TouchableOpacity>
                        </Animated.View>

                        <Image source={require('../assets/Night.jpg')} style={{ height: 100, width: 320, borderRadius: 10, marginBottom: 30 }} />
                        <View>
                            <View style={{ flexDirection: 'row' }}>
                                <Animated.View style={{ marginBottom: 20, borderWidth: 2, borderColor: '#ba956a', width: 110 }}></Animated.View>
                                <Animated.Text style={{ marginLeft: 20, marginTop: -4, fontSize: 20, fontStyle: 'italic', fontWeight: 'bold', color: 'orange' }}>Spins</Animated.Text>
                                <Animated.View style={{ marginBottom: 20, borderWidth: 2, borderColor: '#ba956a', width: 108, marginLeft: 10 }}></Animated.View>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-evenly'
                        }}>
                            <View style={{ borderRadius: 13, width: 100, height: 170, marginBottom: 18, backgroundColor: '#e0cead', zIndex: 50, elevation: 90 }}>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 50, marginLeft: 10 }} />
                                <View style={{ borderWidth: 2, marginTop: 20, borderRadius: 80, height: 30, backgroundColor: '#aee05c' }}>
                                    <Text>USS DOLLOR</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 13, width: 100, height: 170, marginBottom: 18, backgroundColor: '#e0cead', zIndex: 50, elevation: 90 }}>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 50, marginLeft: 10 }} />
                                <View style={{ borderWidth: 2, marginTop: 20, borderRadius: 80, height: 30, backgroundColor: '#aee05c' }}>
                                    <Text>USS DOLLOR</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 13, width: 100, height: 170, marginBottom: 18, backgroundColor: '#e0cead', zIndex: 50, elevation: 90 }}>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 50, marginLeft: 10 }} />
                                <View style={{ borderWidth: 2, marginTop: 20, borderRadius: 80, height: 30, backgroundColor: '#aee05c' }}>
                                    <Text>USS DOLLOR</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{
                            alignItems: 'center', flexDirection: 'row', marginTop: 40, justifyContent: 'space-evenly'
                        }}>
                            <View style={{ borderRadius: 13, width: 100, height: 170, marginBottom: 18, backgroundColor: '#e0cead', zIndex: 50, elevation: 90 }}>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 50, marginLeft: 10 }} />
                                <View style={{ borderWidth: 2, marginTop: 20, borderRadius: 80, height: 30, backgroundColor: '#aee05c' }}>
                                    <Text>USS DOLLOR</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 13, width: 100, height: 170, marginBottom: 18, backgroundColor: '#e0cead', zIndex: 50, elevation: 90 }}>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 50, marginLeft: 10 }} />
                                <View style={{ borderWidth: 2, marginTop: 20, borderRadius: 80, height: 30, backgroundColor: '#aee05c' }}>
                                    <Text>USS DOLLOR</Text>
                                </View>
                            </View>
                            <View style={{ borderRadius: 13, width: 100, height: 170, marginBottom: 18, backgroundColor: '#e0cead', zIndex: 50, elevation: 90 }}>
                                <Animated.Image source={require("../assets/Magic1.gif")} style={{ height: 70, width: 70, borderRadius: 60, marginTop: 50, marginLeft: 10 }} />
                                <View style={{ borderWidth: 2, marginTop: 20, borderRadius: 80, height: 30, backgroundColor: '#aee05c' }}>
                                    <Text>USS DOLLOR</Text>
                                </View>
                            </View>
                        </View>
                    </Animated.View>
                </View>
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
        backgroundColor: '#a1977c'
    },
    tinyLogo: {
        width: 20,
        height: 20,
        marginTop: -40,
        alignSelf: 'flex-end',
        marginRight: 25
    },
})
export default Icon6; 