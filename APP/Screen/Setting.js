// import {
//   Text, 
//   View,
//   ScrollView, 
//   SafeAreaView,
//   useContext,
//   Button
// } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import { AuthContext } from '../context/AuthContext';

// const Setting =()=> {
//     const {logout} = useContext(AuthContext);
//     return(
//     <SafeAreaView style={{
//       flex: 1,
//       backgroundColor: 'white'
//   }}>
//       <ScrollView>
//           <View style={{
//               height: 40,
//               backgroundColor: 'rgba(0,0,0,0.2)',    
//               justifyContent: 'center',            
//           }}>
//               <Text style={{
//                   color:'black',
//                   fontSize:'20px',
//                   color: 'red', 
//                   paddingStart: 10,
//               }}>Common</Text>                
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='globe'
//                   style={{ marginStart: 10 }}
//                   size={20} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Language</Text>                
//               <View style={{flex: 1}} />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingEnd: 10,
//                   opacity: 0.5,
//               }}>English</Text> 
//               <Icon
//                   name='chevron-right'
//                   style={{ 
//                       paddingEnd: 10,
//                       opacity: 0.5,
//                   }}
//                   size={20} color={'black'}
//               />
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='cloud'
//                   style={{ marginStart: 10 }}
//                   size={16} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Environment</Text>                
//               <View style={{flex: 1}} />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingEnd: 10,
//                   opacity: 0.5,
//               }}>Production</Text> 
//               <Icon
//                   name='chevron-right'
//                   style={{ 
//                       paddingEnd: 10,
//                       opacity: 0.5,
//                   }}
//                   size={20} color={'black'}
//               />
//           </View>
//           <View style={{
//               height: 40,
//               backgroundColor: 'rgba(0,0,0,0.2)',    
//               justifyContent: 'center',            
//           }}>
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'red', 
//                   paddingStart: 10,
//               }}>Account</Text>                
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='phone'
//                   style={{ marginStart: 10 }}
//                   size={16} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Phone number</Text>                
//               <View style={{flex: 1}} />                
//               <Icon
//                   name='chevron-right'
//                   style={{ 
//                       paddingEnd: 10,
//                       opacity: 0.5,
//                   }}
//                   size={20} color={'black'}
//               />
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='envelope'
//                   style={{ marginStart: 10 }}
//                   size={16} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Email</Text>                
//               <View style={{flex: 1}} />                
//               <Icon
//                   name='chevron-right'
//                   style={{ 
//                       paddingEnd: 10,
//                       opacity: 0.5,
//                   }}
//                   size={20} color={'black'}
//               />
//           </View>
//           <View style={{
//               height: 40,
//               backgroundColor: 'rgba(0,0,0,0.2)',    
//               justifyContent: 'center',            
//           }}>
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'red', 
//                   paddingStart: 10,
//               }}>Security</Text>                
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='door-closed'
//                   style={{ marginStart: 10 }}
//                   size={16} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize:'20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Lock app in background</Text>                
//               <View style={{flex: 1}} />                               
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='fingerprint'
//                   style={{ marginStart: 10 }}
//                   size={16} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Use fingerprint</Text>                
//               <View style={{flex: 1}} />            
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='lock'
//                   style={{ marginStat: 10 }}
//                   size={16} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Change password</Text>                
//               <View style={{flex: 1}} />                             
//           </View>
//           <View style={{
//               height: 40,
//               backgroundColor: 'rgba(0,0,0,0.2)',    
//               justifyContent: 'center',            
//           }}>
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'red', 
//                   paddingStart: 10,
//               }}>Misc</Text>                
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='file-alt'
//                   style={{ marginStart: 10 }}
//                   size={20} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Term of Service</Text>                
//               <View style={{flex: 1}} />                
//               <Icon
//                   name='chevron-right'
//                   style={{ 
//                       paddingEnd: 10,
//                       opacity: 0.5,
//                   }}
//                   size={20} color={'black'}
//               />
//           </View>
//           <View style={{
//               flexDirection: 'row',
//               paddingVertical: 10,
//               alignItems: 'center'
//           }}>
//               <Icon
//                   name='passport'
//                   style={{ marginStart: 10 }}
//                   size={20} color={'black'}
//               />
//               <Text style={{
//                   color:'black',
//                   fontSize: '20px',
//                   color: 'black', 
//                   paddingStart: 10,
//               }}>Open source licenses</Text>                
//               <View style={{flex: 1}} />                
//               <Icon
//                   name='chevron-right'
//                   style={{ 
//                       paddingEnd: 10,
//                       opacity: 0.5,
//                   }}
//                   size={20} color={'black'}
//               />
//           </View>
//             <Button  
//                 title='Đăng Xuất' 
//                 style={{
//                     flexDirection: 'row',
//                     paddingVertical: 10,                
//                     alignItems: 'center',
//                 }}  
//                 onPress={()=>{logout()}}
//             />
//       </ScrollView>
//   </SafeAreaView>
//   )
//     return (
      
//       <View style={{flex: 1,justifyContent: 'center', alignItems:'center'}}>
//         <Button title='Log out'
//             onPress={()=>{logout()}}
//         />
//       </View>
//     )
// }
// export default Setting;
import React, { Component , useContext} from 'react'
import { Text, StyleSheet, View , Button} from 'react-native'
import { AuthContext } from '../context/AuthContext';

const Setting =()=> {
    const {logout} = useContext(AuthContext);
    return (
      <View style={{flex: 1,justifyContent: 'center', alignItems:'center'}}>
        <Button title='Log out'
            onPress={()=>{logout()}}
        />
      </View>
    )
  
}

const styles = StyleSheet.create({})
export default Setting;