import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert , ImageBackground, Image} from 'react-native';
import { useNavigation } from '@react-navigation/native'

let url = "http://192.168.43.232:8797/login"
// let url = "http://192.168.0.5:8797/login"
// let url = "http://192.168.43.232:8797/login"

const SignInScreen = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkLoginn] = useState(0);
    const { inputStyle, bigButton, buttonText, container, txtSignUp, row1, titleStyle , image, image1, input1, row2} = styles;
    const gotoUser = () => {       
        fetch(url,
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ 
                email: email, 
                password: password 
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.success == 2){
                navigation.navigate("User");     
            }
            else if(res.role == "admin"){
                navigation.navigate("Admin")
            }
            else if (res.success == 1){
                Alert.alert(res.message)
            }
            else{
                Alert.alert(res.message)
            }
        })
    }
    return (
        <View style={container}>
            <ImageBackground source={require("../../images/bgSignIn.jpg")} style={image}>
                <View style={row1}>
                    <Text style={titleStyle}>ĐĂNG NHẬP</Text>
                </View>
                <View style={row2}>
                    <TextInput
                        style={inputStyle}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    /> 
                    <TextInput
                        style={inputStyle}
                        placeholder="Mật khẩu"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                    />
                    <TouchableOpacity style={bigButton} onPress={() => {gotoUser()}}>
                        <Text style={buttonText}>ĐĂNG NHẬP</Text>
                    </TouchableOpacity>
                </View>
                
            </ImageBackground>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        alignItems: "center",
    },
    
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 100, },
    row2: {marginTop: 100,},
    titleStyle: { color: '#A9A9A9', fontSize: 20 , marginBottom: 50},
    inputStyle: {
        height: 50,
        width: 250,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    bigButton: {
        width: 250,
        height: 50,
        backgroundColor: "#708090",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 25, 
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400'
    },
    txtSignUp:{
        color: 'white',
        marginTop: 10,
    },
    input1: {
        flexDirection: "row",
    },
    image1: {
        width: 30,
        height: 30,
        marginLeft: 50,
    },
});

export default SignInScreen;