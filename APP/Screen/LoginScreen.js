import React, { Component, useContext, useState } from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity,Image } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import Icon from 'react-native-vector-icons/FontAwesome';
const LoginScreen =({navigation})=>{
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {login} = useContext(AuthContext);
    return(
        <View style={styles.container}>
            <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#428FF5', marginTop:20 }}>ĐĂNG NHẬP</Text>
            </View>
            <View style={styles.img}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/signin.png')}
                        />
                    </View>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} 
                    placeholder='Nhập tên đăng nhập'
                    onChangeText={text=> setUserName(text)}
                />
                <View style={{flexDirection:'row',justifyContent:'space-between',borderWidth: 1, borderColor: '#bbb', borderRadius: 5,height: 45}}>
                <TextInput style={styles.inputt} 
                    placeholder='Nhập mật khẩu' 
                    secureTextEntry={!isPasswordVisible}
                    onChangeText={text=> setPassword(text)}
                />
                <TouchableOpacity
                  onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                  <Icon 
                    style={{margin:10}} 
                    name={isPasswordVisible ? 'eye-slash' : 'eye'}
                    size={20} 
                  />
                </TouchableOpacity>
                </View>
                
                <TouchableOpacity
                        style={styles.loginbtn}
                        onPress={()=>{login(userName, password)}}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                        >Đăng Nhập</Text>
                    </TouchableOpacity>
                {/* <Button style={styles.but} title='Đăng Nhập' onPress={()=>{login(userName, password)}}/> */}
                <View style={{flexDirection: 'row', marginTop:20,}}>
                    <Text>Bạn chưa có Tài khoản?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Regiter')}
                    >
                        <Text style={{color: 'blue'}}>  Đăng Ký</Text>
                    </TouchableOpacity>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"#fff"
    },
    wrapper:{
        width: '80%'
    },
    tinyLogo: {
        width: 300,
        height: 300,
    },
    input:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
        paddingHorizontal: 14,
        height: 45,
    },
    inputt:{
        marginBottom: 12,
        paddingHorizontal: 14,
        height: 45,
    },
    loginbtn: {
        width: '100%',
        height: 50,
        borderWidth: 1,
        borderColor: '#00ab90',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        backgroundColor: '#00ab90'
    }
})
export default LoginScreen;