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
    const [email, setEmail] = useState('');
    const [password_confirmation, setpassword_confirmation] = useState('');


    const { inputStyle, bigButton, buttonText, row1, titleStyle, container } = styles;
    
    // const onSuccess = () => {
    //     Alert.alert(
    //         "Xác nhận",
    //         'Đăng kí thành công',
    //         [
    //             { text: "OK", onPress: () => navigation.navigate('SignIn')}
    //         ],
    //         { cancelable: false }
    //     );
    // }
    // const onFail = () => {
    //     Alert.alert(
    //         'Chú ý',
    //         'Email đã được sử dụng',
    //         [
    //             { text: 'OK', onPress: () => setEmail({ email: '' }) }
    //         ],
    //         { cancelable: false }
    //     );
    // }
    const handlingSignup = () => {
        register( username, password, email, password_confirmation)
        
        .then(res => {
            console.log(res.success);
            console.log(res.validator);
            if (res.success == 1){
                Alert.alert("Đăng ký thành công!");
                navigation.navigate("SignIn");
            }
            else if (res.success == 2){
                // console.log(res.validator)
                let notice = res.validator;
                Alert.alert(notice)
            }
            else{
                Alert.alert("Email đã được sử dụng!")
                setEmail({ email: '' });
            }
        });  
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