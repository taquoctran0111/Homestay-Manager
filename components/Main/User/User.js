import React, {useState, Component} from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'

// class Room extends Component{
//   constructor(props){
//     super(props);
//   }
//   state = {
//     toggle: true
//   }
//   _onPress(){
//     const newState = !this.state.toggle
//     this.setState({toggle: newState})
//     this.props.navigation.navigate('UserDetail')
//   }
//   render(props){
//     let {toggle} = this.state;
//     let bgcolor = toggle?"dodgerblue":"red";
//     const bg = {
//       backgroundColor: bgcolor, padding: 10, width: 50, height: 40, alignItems: "center", borderRadius: 5, marginRight: 10, marginTop: 5
//     }
//     const name = { color: "white",}
//     return(
//       <View>
//             <TouchableOpacity style={bg} onPress = {() => {this._onPress() }}  >
//               <Text style={name}>{this.props.name}</Text>
//             </TouchableOpacity>
//       </View>
//     );
//   }
// }
// export default class User extends Component{
//   render(){
//     const {content, title, floor, room, name, note, txtNote, bookedRoom} = styles; 
//     return(
//       <View style = {content} >
//       <Text style = {title} >Danh sách phòng</Text>
//       <View style = {floor} >
//           <Room name = "101"/>
//           <Room name = "102"/>
//           <Room name = "103"/>
//           <Room name = "104"/>
//           <Room name = "105"/>
//       </View>
//       <View style = {floor} >
//           <Room name = "201"/>
//           <Room name = "202"/>
//           <Room name = "203"/>
//           <Room name = "204"/>
//           <Room name = "205"/>
//       </View>
//       <View style = {floor} >
//           <Room name = "301"/>
//           <Room name = "302"/>
//           <Room name = "303"/>
//           <Room name = "304"/>
//           <Room name = "305"/>
//       </View>
//       <View style = {floor} >
//           <Room name = "401"/>
//           <Room name = "402"/>
//           <Room name = "403"/>
//           <Room name = "404"/>
//           <Room name = "405"/>
//       </View>
//       <View style = {{marginTop: 50,}}>
//         <View style={note}>
//             <View>
//               <TouchableOpacity style={room}>
//                 <Text style={name}></Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={txtNote}>Chưa có người đặt</Text>
//         </View>
//         <View style={note}>
//             <View style={bookedRoom}>
//               <TouchableOpacity>
//                 <Text style={name}></Text>
//               </TouchableOpacity>
//             </View>
//             <Text style={txtNote}>Đã có người đặt</Text>
//         </View>
//       </View>
//     </View>
//     );
//   }
// }

const Room = (props) => {
  const [background, setBackground] = useState('dodgerblue'); 
  const navigation = useNavigation();
  const datasendtoDetail = {
    PRnameRoom: props.name
  }
  const _onPress = (background) => {
    navigation.navigate('UserDetail', datasendtoDetail)    
    setBackground(background)
  }
  const bg = {
      backgroundColor: background, padding: 10, width: 50, height: 40, alignItems: "center", borderRadius: 5, marginRight: 10, marginTop: 5
  }
  const name = { color: "white",}
  return(
    <View>
      <TouchableOpacity style={bg} onPress = {() => { _onPress('red')}}>
        <Text style={name}>{props.name}</Text>
      </TouchableOpacity>
    </View>
  );
}
const User = () => {
  const {content, title, floor, room, name, note, txtNote, bookedRoom} = styles; 
  return(
    <View style = {content} >
       <Text style = {title} >Danh sách phòng</Text>
       <View style = {floor} >
           <Room name = "101"/>
           <Room name = "102"/>
           <Room name = "103"/>
           <Room name = "104"/>
           <Room name = "105"/>
       </View>
       <View style = {floor} >
           <Room name = "201"/>
           <Room name = "202"/>
           <Room name = "203"/>
           <Room name = "204"/>
           <Room name = "205"/>
       </View>
       <View style = {floor} >
           <Room name = "301"/>
           <Room name = "302"/>
           <Room name = "303"/>
           <Room name = "304"/>
           <Room name = "305"/>
       </View>
       <View style = {floor} >
           <Room name = "401"/>
           <Room name = "402"/>
           <Room name = "403"/>
           <Room name = "404"/>
           <Room name = "405"/>
       </View>
       <View style = {{marginTop: 50,}}>
         <View style={note}>
             <View>
               <TouchableOpacity style={room}>
                 <Text style={name}></Text>
               </TouchableOpacity>
             </View>
             <Text style={txtNote}>Chưa có người đặt</Text>
         </View>
         <View style={note}>
             <View style={bookedRoom}>
               <TouchableOpacity>
                 <Text style={name}></Text>
               </TouchableOpacity>
             </View>
             <Text style={txtNote}>Đã có người đặt</Text>
         </View>
       </View>
     </View>
  );
}
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
  name: {
    color: "white",
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
  room: {
    backgroundColor: 'dodgerblue',
    padding: 10,
    width: 50,
    height: 40,
    alignItems: "center",
    borderRadius: 5,
    marginRight: 10,
    marginTop: 5,
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

export default User;