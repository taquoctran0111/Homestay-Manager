import React, {useState, Component} from 'react';
import {  View,  Text, Button, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';


let url = 'http://192.168.0.3:8797/update/';

export default function UserDetail({route, navigation}){
    const [nameCustomer, txtName] = React.useState('');
    const [phoneCustomer, txtSDT] = React.useState('');
    const [timeRental, txtTime] = React.useState('');
    const [totalMoney, txttotal] = React.useState('');
    const {nameRoom} = route.params;
    const bookRoom = () => {
      fetch(url + nameRoom.toString(),
        {   
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ 
                'nameCustomer': nameCustomer,
                'phoneCustomer': phoneCustomer,
                'timeRental': timeRental,
            })
        })
        .then(res => res.json())
        .then((res) => {
          if(res.success == 1){
            Alert.alert('Đặt phòng thành công!')
            navigation.navigate('User')
          }
        })
    }
    return (
      <View style={styles.content}>
        <Text style={styles.title}>Phòng {nameRoom}</Text>
        <View style={styles.abc}>
            <Text style={styles.titleInput}> Tên người thuê </Text>
            <TextInput style={styles.textInput}          
              onChangeText={text => txtName(text)}
              value={nameCustomer}
            />
        </View>
        <View style={styles.abc}>
            <Text style={styles.titleInput}> Số điện thoại </Text>
            <TextInput style={styles.textInput}          
              onChangeText={text => txtSDT(text)}
              value={phoneCustomer}
            />
        </View>
        <View style={styles.abc}>
            <Text style={styles.titleInput}> Thời gian thuê </Text>
            <TextInput style={styles.textInput}          
              onChangeText={text => txtTime(text)}
              value={timeRental}
            />
        </View>
        <View style={styles.btnCheckout}>
          <TouchableOpacity>
            <Button title="Đặt phòng"  onPress={() => {bookRoom()}}  />
          </TouchableOpacity>
        </View>
        <View style={styles.abc}>
            <Text style={styles.titleInput}> Tổng tiền </Text>
            <TextInput style={styles.textInput}          
              onChangeText={text => txttotal(text)}
              value={totalMoney}
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
  btnCheckout: {
      width: 150,
      marginTop:30,
      marginLeft: 160,
  },
  
});