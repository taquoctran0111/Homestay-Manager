import React from 'react';
import {  View,  Text, Button, TextInput, StyleSheet,TouchableOpacity, Alert } from 'react-native';

let url = 'http://192.168.43.232:8797/rooms/reset/';

const InfoUser = ({route}) => {
    const {nameRoom, nameCustomerPR, phoneCustomerPR, timeRentalPR, totalMoneyPR, statesPR} = route.params;
    // const [nameCustomer, txtName] = React.useState(nameCustomerPR);
    // const [phoneCustomer, txtPhone] = React.useState(phoneCustomerPR);
    // const [timeRental, txtTime] = React.useState(timeRentalPR);
    // const [totalMoney, txtTotal] = React.useState(totalMoneyPR);
    // let data = {
    //     nameCustomer: nameCustomer,
    //     phoneCustomer: phoneCustomer,
    //     timeRental: timeRental,
    // }
    return(
        <View style = {styles.container}>
            <Text style = {styles.title}>THÔNG TIN ĐẶT PHÒNG</Text>
            <View style = {styles.viewInfo}>
                <Text style = {styles.text1}>Phòng {nameRoom}</Text>
                <View style = {styles.viewOutput}>
                    <Text style = {styles.text}>Tên người thuê: </Text>
                    <Text style = {styles.output}>{nameCustomerPR}</Text>
                </View>
                <View style = {styles.viewOutput}>
                    <Text style = {styles.text}>SĐT: </Text>
                    <Text style = {styles.output}>{phoneCustomerPR}</Text>
                </View>
                <View style = {styles.viewOutput}>
                    <Text style = {styles.text}>Thời gian thuê(h): </Text>
                    <Text style = {styles.output}>{timeRentalPR}</Text>
                </View>
                <View style = {styles.viewOutput}>
                    <Text style = {styles.text}>Tổng tiền(VNĐ): </Text>
                    <Text style = {styles.output}>{totalMoneyPR}</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#888888",
        alignItems: "center"
    },
    title: {
        marginTop: 50,
        fontSize: 20,
        marginBottom: 20,
        color: "lightgray",
        textAlign: "center",
    },
    viewInfo: {
        width: 300,
        height: 400,
        backgroundColor: "#FFFAF0",
        borderRadius: 20,
        padding: 15,
    },
    viewOutput: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 15,
        alignItems: "center"
    },
    output: {
        width: 140,
        height: 35,
        backgroundColor: "lightgray",
        borderRadius: 10,
        padding: 5,
        fontSize: 15,
    },
    text: {
        color: "gray",
        fontSize: 15,
    },
    text1: {
        color: "gray",
        fontSize: 20,
    }
})

export default InfoUser;