import React, { useState,Component } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import register from '../../api/register';

// export default class SignUp extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             rePassword: ''
//         };
//     }

//     onSuccess() {
//         Alert.alert(
//             'Notice',
//             'Sign up successfully',
//             [
//                 { text: 'OK', onPress: this.props.gotoSignIn() }
//             ],
//             { cancelable: false }
//         );
//     }

//     onFail() {
//         Alert.alert(
//             'Notice',
//             'Email has been used by other',
//             [
//                 { text: 'OK', onPress: () => this.removeEmail.bind(this) }
//             ],
//             { cancelable: false }
//         );
//     }

//     removeEmail() {
//         this.setState({ email: '' });
//     }

//     registerUser() {
//         // const { username, email, password } = this.state;
//         // register(email, username, password)
//         // .then(res => {
//         //     if (res === 'THANH_CONG') return this.onSuccess();
//         //     this.onFail();
//         // });
//         this.props.navigation.navigate('SignIn')
//         Alert.alert("Đăng kí thành công")
//     }

//     render() {
//         const { inputStyle, bigButton, buttonText, row1, titleStyle, container } = styles;
//         return (
//             <View style={container}>
//                 <View style={row1}>
//                     <Text style={titleStyle}>ĐĂNG NHẬP</Text>
//                 </View>
//                 <TextInput 
//                     style={inputStyle} 
//                     placeholder="Tên tài khoản" 
//                     value={this.state.username}
//                     onChangeText={text => this.setState({ username: text })}
//                 />
//                 <TextInput 
//                     style={inputStyle} 
//                     placeholder="Mật khẩu" 
//                     value={this.state.password}
//                     secureTextEntry
//                     onChangeText={text => this.setState({ password: text })}
//                 />
//                 <TextInput 
//                     style={inputStyle} 
//                     placeholder="Nhập lại mật khẩu" 
//                     value={this.state.rePassword}
//                     secureTextEntry
//                     onChangeText={text => this.setState({ rePassword: text })}
//                 />
//                 <TouchableOpacity style={bigButton} onPress={this.registerUser.bind(this)}>
//                     <Text style={buttonText}>ĐĂNG KÝ</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
const SignUpScreen = (props) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { inputStyle, bigButton, buttonText, row1, titleStyle, container } = styles;
    const gotoSignIn = () => {
        navigation.navigate('SignIn')
    }
    const onSuccess = () => {
        Alert.alert(
            'Sign up successfully',
            [
                { text: 'OK', onPress: () => gotoSignIn() }
            ],
            { cancelable: false }
        );
    }
    const onFail = () => {
        Alert.alert(
            'Notice',
            'Username has been used by other',
            [
                { text: 'OK', onPress: () => removeUsername() }
            ],
            { cancelable: false }
        );
    }
    const removeUsername = () => {
        setUsername({ username: '' });
    }
    const handlingSignup = () => {
        register( username, password)
        .then(res => {
            if (res.success == '1') return onSuccess();
            else 
                onFail();
        });
        Alert.alert("Đăng nhập thành công!")
        navigation.navigate('SignIn')
    }
    return (
        <View style={container}>
            <View style={row1}>
                <Text style={titleStyle}>ĐĂNG KÝ</Text>
            </View>
            <TextInput 
                style={inputStyle} 
                placeholder="Tên tài khoản" 
                value={username}
                onChangeText={(text) => setUsername(text)}
            />
            <TextInput 
                style={inputStyle} 
                placeholder="Mật khẩu" 
                value={password}
                secureTextEntry
                onChangeText={(text) => setPassword(text)}
            />
            {/* <TextInput 
                style={inputStyle} 
                placeholder="Nhập lại mật khẩu" 
                value={this.state.rePassword}
                secureTextEntry
                onChangeText={text => this.setState({ rePassword: text })}
            /> */}
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