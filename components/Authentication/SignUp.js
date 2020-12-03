import React, { useState,Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

let url = "http://192.168.0.4:8797/users"

const SignUpScreen = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');

    const { inputStyle, bigButton, buttonText, row1, titleStyle, container } = styles;
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
                setEmail({ email: '' });
            }
        }) 
    }
    return (
        <View style={container}>
            <View style={row1}>
                <Text style={titleStyle}>ĐĂNG KÝ</Text>
            </View>
            <TextInput 
                style={inputStyle} 
                placeholder="Tên người dùng" 
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
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
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EBA77',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontSize: 30 , marginBottom: 50},
    bigButton: {
        height: 45,
        width: 300,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center', 
    },
    buttonText: {
        color: '#fff',
        fontWeight: '400'
    }
});
export default SignUpScreen;