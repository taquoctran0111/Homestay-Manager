import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native'


import checkLogin from '../../api/checkLogin';
// import global from '../global';

// import saveToken from '../../api/saveToken';

// export default class Login extends Component {  
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: ''
//         };
//     }
//     onSignIn() {
//         const { username, password } = this.state;
//         signIn(username, password)
//             .then(res => {
//                 global.onSignIn(res.user);
//                 this.props.goBackToMain();
//                 saveToken(res.token);
//             })
//             .catch(err => console.log(err));
//     }
//     gotoAdmin(){
//         this.props.navigation.navigate('User')
//     }
//     gotoSignUp(){
//         this.props.navigation.navigate('SignUp')
//     }
//     render() {
//         const { inputStyle, bigButton, buttonText, container, txtSignUp, row1, titleStyle } = styles;
//         const { username, password } = this.state;
//         return (
//             <View style={container}>
//                 <View style={row1}>
//                     <Text style={titleStyle}>ĐĂNG NHẬP</Text>
//                 </View>
//                 <TextInput
//                     style={inputStyle}
//                     placeholder="Tên tài khoản"
//                     value={username}
//                     onChangeText={text => this.setState({ username: text })}
//                 />
//                 <TextInput
//                     style={inputStyle}
//                     placeholder="Mật khẩu"
//                     value={password}
//                     onChangeText={text => this.setState({ password: text })}
//                     secureTextEntry
//                 />
//                 <TouchableOpacity style={bigButton} onPress={() => this.gotoAdmin()}>
//                     <Text style={buttonText}>ĐĂNG NHẬP</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity  onPress={() => this.gotoSignUp()}>
//                     <Text style = {txtSignUp}>Đăng ký</Text>
//                 </TouchableOpacity>
//             </View>
//         );
//     }
// }
const SignInScreen = (props) => {
    const navigation = useNavigation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checkLoginn] = useState(0);
    const { inputStyle, bigButton, buttonText, container, txtSignUp, row1, titleStyle } = styles;
    const gotoSignUp = () => {
        navigation.navigate('SignUp')
    }
    const gotoAdmin = () => {       
        checkLogin( username, password)
        .then(res => {
            if (res.success > 0) {
                Alert.alert("Thông báo!","Bạn đã đăng nhập thành công!");
                navigation.navigate('Admin')
            }
            else{
                Alert.alert("Thông báo!","Bạn đã đăng nhập không thành công!");
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
            <TouchableOpacity style={bigButton} onPress={() => gotoAdmin()}>
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