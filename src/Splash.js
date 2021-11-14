import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

export default class Splash extends Component {
    render() {
        return (
            <View style={styles.layout}>
                <View style={styles.anim}>
                    <LottieView
                        style={styles.anim}
                        source={require('../assets/SplashScreen/Splash.json')}
                        autoPlay
                        speed= {1.3}
                        loop={false}
                        onAnimationFinish={() => {
                            console.log('Animation Finished!')
                            this.props.navigation.replace('App');
                        }}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    layout: {
        flex: 1,
        backgroundColor: '#f6e2bc',
        justifyContent: 'center',
        alignItems: 'center',
    },
    anim: {
        width: 325,
        height: 325    
    }
})
