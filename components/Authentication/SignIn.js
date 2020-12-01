import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'

//192.168.43.232
let url = "http://192.168.0.3:8797/login"

const SignInScreen = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkLoginn] = useState(0);
    const { inputStyle, bigButton, buttonText, container, txtSignUp, row1, titleStyle } = styles;
    const gotoSignUp = () => {
        navigation.navigate('SignUp')
    }
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
            <View style={row1}>
                <Text style={titleStyle}>ĐĂNG NHẬP</Text>
            </View>
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
            <TouchableOpacity  onPress={() => gotoSignUp()}>
                <Text style = {txtSignUp}>Đăng ký</Text>
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
    row1: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    titleStyle: { color: '#FFF', fontSize: 30 , marginBottom: 50},
    inputStyle: {
        height: 50,
        width: 300,
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 30
    },
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
    },
    txtSignUp:{
        color: 'white',
        marginTop: 10,
    }
});

export default SignInScreen;