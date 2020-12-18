import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Home = () => {
    const navigation = useNavigation();
    const gotoSignIn = () => {
        navigation.navigate('SignIn')
    }
    const gotoSignUp = () => {
        navigation.navigate('SignUp')
    }
    return (
        <View style = {styles.container}>
            <ImageBackground source={require("../../images/imgBg.jpg")} style={styles.image}> 
                <Text style = {styles.title}> Welcome to our app </Text>  
                <TouchableOpacity style={styles.buttonSignIn} onPress={() => {gotoSignIn()}}>
                    <Text style = {styles.text}>ĐĂNG NHẬP</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSignUp} onPress={() => {gotoSignUp()}}>
                    <Text style = {styles.text1}>ĐĂNG KÝ</Text>
                </TouchableOpacity>
            </ImageBackground>
        </View>
    ); 
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    title: {
        color: "#A9A9A9",
        marginTop: 50,
    },
    text: {
        color: "#fff",
    },
    text1: {
        color: "#fff",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
    },
    buttonSignIn: {
        width: 250,
        height: 50,
        backgroundColor: "#708090",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 550,
    },
    buttonSignUp: {
        width: 250,
        height: 50,
        backgroundColor: "#A9A9A9",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25,
        marginTop: 10,
    }
})
export default Home;