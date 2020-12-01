import React from 'react';
import {  View,  Text, Button, TextInput, StyleSheet, } from 'react-native';


function Login({route}) {
  const {nameRoom, nameCustomerPR, phoneCustomerPR, timeRentalPR, totalMoneyPR, statesPR} = route.params;
  const [nameCustomer, txtName] = React.useState(nameCustomerPR);
  const [phoneCustomer, txtPhone] = React.useState(phoneCustomerPR);
  const [timeRental, txtTime] = React.useState(timeRentalPR);
  const [totalMoney, txtTotal] = React.useState(totalMoneyPR);
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Phòng {nameRoom}</Text>
      <Text style={styles.title1}>{statesPR}</Text>
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
            onChangeText={text => txtPhone(text)}
            value={phoneCustomer}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Thời gian thuê (giờ)</Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtTime(text)}
            value={timeRental}
          />
      </View>
      <View style={styles.abc}>
          <Text style={styles.titleInput}> Tổng tiền </Text>
          <TextInput style={styles.textInput}          
            onChangeText={text => txtTotal(text)}
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
  
});
export default Login;