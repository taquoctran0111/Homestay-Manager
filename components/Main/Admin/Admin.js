import React, {useState, Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class Admin extends Component{
  constructor(props){
    super(props);
  }
  state = {
    toggle: true
  }
  _onPress(){
    const newState = !this.state.toggle
    this.setState({toggle: newState})
    this.props.navigation.navigate('AdminDetail')
  }
  render(){
    let {toggle} = this.state;
    let bgcolor = toggle?"dodgerblue":"red";
    return(
      <View style = {styles.content} >
      <Text style = {styles.title} > Quản lý phòng</Text>
      <View style = {styles.floor} >
          <View>
            <TouchableOpacity onPress = {() => this._onPress()} style={styles.room} > 
              <Text style={styles.name}>101</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity onPress={() => this._onPress()} style={{backgroundColor: bgcolor, padding: 10, width: 50, height: 40, alignItems: "center", borderRadius: 5, marginRight: 10, marginTop: 5,}} >
              <Text style={styles.name}>102</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>103</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>104</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>105</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style = {styles.floor} >
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>201</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>202</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>203</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>204</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>205</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style = {styles.floor} >
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>301</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>302</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>303</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>304</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>305</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style = {styles.floor} >
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>401</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>402</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>403</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>404</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.nameRoom}>
            <TouchableOpacity onPress={() => this._onPress()}>
              <Text style={styles.name}>405</Text>
            </TouchableOpacity>
          </View>
      </View>
      <View style = {{marginTop: 50,}}>
        <View style={styles.note}>
            <View style={styles.nameRoom}>
              <TouchableOpacity>
                <Text style={styles.name}></Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.txtNote}>Chưa có người đặt</Text>
        </View>
        <View style={styles.note}>
            <View style={styles.bookedRoom}>
              <TouchableOpacity>
                <Text style={styles.name}></Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.txtNote}>Đã có người đặt</Text>
        </View>
      </View>
    </View>
    );
  }
}

// function User({navigation}) {
//   click = () => {
//     navigation.navigate('UserDetail')
//   }
//   return (
//     <View style = {styles.content} >
//       <Text style = {styles.title} >Danh sách phòng</Text>
//       <View style = {styles.floor} >
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>101</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>102</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>103</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>104</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>105</Text>
//             </TouchableOpacity>
//           </View>
//       </View>
//       <View style = {styles.floor} >
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>201</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>202</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>203</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>204</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>205</Text>
//             </TouchableOpacity>
//           </View>
//       </View>
//       <View style = {styles.floor} >
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>301</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>302</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>303</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>304</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>305</Text>
//             </TouchableOpacity>
//           </View>
//       </View>
//       <View style = {styles.floor} >
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>401</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>402</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>403</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>404</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.nameRoom}>
//             <TouchableOpacity onPress={() => this._onPress()}>
//               <Text style={styles.name}>405</Text>
//             </TouchableOpacity>
//           </View>
//       </View>
//       <View style = {{marginTop: 50,}}>
//         <View style={styles.note}>
//             <View style={styles.nameRoom}>
//               <TouchableOpacity>
//                 <Text style={styles.name}></Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.txtNote}>Chưa có người đặt</Text>
//         </View>
//         <View style={styles.note}>
//             <View style={styles.bookedRoom}>
//               <TouchableOpacity>
//                 <Text style={styles.name}></Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={styles.txtNote}>Đã có người đặt</Text>
//         </View>
//       </View>
//     </View>
//   );
// }
const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 10,
    backgroundColor: '#3EBA77',
  },
  floor: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center"
  },
  title: {
    fontSize: 25,
    color: '#fff',
    marginBottom: 30,
  },
  note: {
    flexDirection: "row",
    marginLeft: 20,
    alignItems: "center",
  },
  txtNote: { 
    color: '#fff',
    marginLeft: 10,
  },
  nameRoom: {
    backgroundColor: "dodgerblue",
    padding: 10,
    width: 50,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
  room: {
    backgroundColor: "dodgerblue",
    padding: 10,
    width: 50,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
  name: {
    color: "white",
  },
  bookedRoom:{
    backgroundColor: "red",
    padding: 10,
    width: 50,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
  },
});

// export default User;
