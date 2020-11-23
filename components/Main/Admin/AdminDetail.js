import React from 'react';
import {  View,  Text, Button, TextInput, StyleSheet, } from 'react-native';


function Login({route, navigation}) {
  const [value1, txtName] = React.useState('');
  const [value2, txtSDT] = React.useState('');
  const [value3, txtTime] = React.useState('');
  const [value4, txttotal] = React.useState('');
  const {PRnameRoom} = route.params;
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Phòng {PRnameRoom}</Text>
      <Text style={styles.title1}>Đã được đặt</Text>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Tên người thuê </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtName(text)}
            value={value1}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Số điện thoại </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtSDT(text)}
            value={value2}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Thời gian thuê </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtTime(text)}
            value={value3}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Tổng tiền </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txttotal(text)}
            value={value4}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding:20,
    backgroundColor: '#3EBA77',
    fontSize: 25,
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  title1: {
    color: "red",
    fontSize: 20,
  },
  abc: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: 'center',
    fontSize: 20,
  },
  textInput: {
    height: 40, 
    width: 180, 
    borderColor: '#fff', 
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10,
    marginTop: 30,
    fontSize: 15,
    color:"black",
    backgroundColor: "#fff",
  },
  titleInput: {
    color:"#fff",
    marginTop: 30,
  },
  
});
export default Login;