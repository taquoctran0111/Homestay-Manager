import React, { useState,Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native'

let url = "http://192.168.43.232:8797/users"
// let url = 'http://192.168.43.232:8797/users';

const SignUpScreen = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');

    const { inputStyle, bigButton, buttonText, row1, titleStyle, container, image, row2 } = styles;
    const handlingSignup = () => {
        fetch(url,
        {   
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                "username": username ,
                "password": password ,
                "email": email ,
                "password_confirmation": password_confirmation
            })
        })
        .then(res => res.json())
        .then(res => {
            if (res.success == 1){
                Alert.alert("Đăng ký thành công!");
                navigation.navigate("SignIn");     
            }
            else if (res.success == 2){
                Alert.alert(res.message)
            }
            else{
                Alert.alert("Email đã được sử dụng!")
                setEmail('')
            }
        }) 
    }
    return (
        <View style={container}>
            <ImageBackground source={require("../../images/bgSignUp.jpg")} style={image}>
                <View style={row1}>
                    <Text style={titleStyle}>ĐĂNG KÝ</Text>
                </View>
                <View  style={row2}>
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Tên người dùng" 
                        value={username}
                        onChangeText={(text) => setUsername(text)}
                    />
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Email" 
                        value={email.toString()}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Mật khẩu" 
                        value={password}
                        secureTextEntry
                        onChangeText={(text) => setPassword(text)}
                    />
                    <TextInput 
                        style={inputStyle} 
                        placeholder="Nhập lại mật khẩu" 
                        value={password_confirmation}
                        secureTextEntry
                        onChangeText={(text) => setpassword_confirmation(text)}
                    />
                    <TouchableOpacity style={bigButton} onPress={() => handlingSignup()}>
                        <Text style={buttonText}>ĐĂNG KÝ</Text>
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
    inputStyle: {
        height: 50,
        width: 250,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',marginTop: 100, },
    row2: {marginTop: 100,},
    titleStyle: { color: '#A9A9A9', fontSize: 20 , marginBottom: 50},
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
    }
});
export default SignUpScreen;