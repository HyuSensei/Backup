import React, { Component , useContext, useState} from 'react'
import { Text, StyleSheet, View, TextInput, Button, TouchableOpacity } from 'react-native'
import { AuthContext } from '../context/AuthContext';
const RegiterScreen =({navigation})=>{
    const [fullName, setFullName] = useState(null);
    const [userName, setUserName] = useState(null);
    const [password, setPassword] = useState(null);
    const {register} = useContext(AuthContext);
    return(
        <View style={styles.container}>
             <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#428FF5', marginBottom:20}}>ĐĂNG KÝ</Text>
            </View>
            <View style={styles.wrapper}>
                <TextInput style={styles.input} 
                    placeholder='Họ và tên'
                    onChangeText={text=> setFullName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Tên đăng nhập'
                    onChangeText={text=> setUserName(text)}
                />
                <TextInput style={styles.input} 
                    placeholder='Mật khẩu' 
                    secureTextEntry
                    onChangeText={text=> setPassword(text)}
                />
                <TouchableOpacity
                        style={styles.loginbtn}
                        onPress={
                            ()=>{
                                register(fullName, userName, password);
                            }
                        }
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                        >Đăng Ký</Text>
                    </TouchableOpacity>
                {/* <Button title='Register' 
                    onPress={
                        ()=>{
                            register(fullName, userName, password);
                        }
                    }
                /> */}
                <View style={{flexDirection: 'row', marginTop:20}}>
                    <Text>Bạn đã có tài khoản ?</Text>
                    <TouchableOpacity
                        onPress={()=>navigation.navigate('Login')}
                    >
                        <Text style={{color: 'blue'}}>   Đăng Nhập</Text>
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
        alignItems: 'center'
    },
    wrapper:{
        width: '80%'
    },
    input:{
        marginBottom: 12,
        borderWidth: 1,
        borderColor: '#bbb',
        borderRadius: 5,
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
        marginTop: 5,
        backgroundColor: '#00ab90'
    }
})
export default RegiterScreen;