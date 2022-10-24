import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'
import Screen from '../component/Screen'
import SearchBar from '../component/SearchBar';
import data from '../../dataAPI'
import VelticalList from '../component/VelticalList';
const Follow =()=>{
    const political = data.filter(item=>item.follow === "1")
    return(
        <Screen>
           <View style={{justifyContent:'center',alignItems:'center',marginBottom:50}}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#428FF5', marginTop:50 }}>Theo dõi</Text>
          </View>
            <SearchBar/>           
            <VelticalList data={political}/>
        </Screen>
    )
}

const styles = StyleSheet.create({
 
})
export default Follow;