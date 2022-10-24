import React from 'react'
import {View,Image,StatusBar } from 'react-native'
import Screen from '../component/Screen'
import SearchBar from '../component/SearchBar'
import BreakingNews from '../component/BreakingNews'
import TechNews from '../component/TechNews'
import FeaturedNews from '../component/FeaturedNews'
import data from '../../dataAPI'
import VelticalList from '../component/VelticalList'

const HomeScreen =()=>{
    const breaking = data.filter(item=>item.category === "breaking-news")
    const tech = data.filter(item=>item.category === "tech")
    const political = data.filter(item=>item.category === "political")
    return(
        <Screen>
           <View style={{justifyContent:'center',alignItems:'center',marginBottom:30}}>
           <StatusBar
            animated={true}
            backgroundColor="#61dafb"
            
             />
            <Image
                    style={{height:50,width:120, marginTop:30}}
                    source={require('../img/logoo.png')}
                />
                {/* <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#428FF5', marginTop:50 }}>BÁO MỚI</Text> */}
          </View>
            <SearchBar/>
            <BreakingNews data={breaking}/>
            <TechNews data={tech}/>
            <FeaturedNews
                item={{
                    
                    id: "8",
                    title: "Quảng Ngãi: Sạt lở ở thủy điện Kà Tinh nghi vùi lấp công nhân trực tổ máy",
                    desc:
                            "Theo thông tin ban đầu, vụ sạt lở xảy ra khoảng 18h20 tối nay 10/10. Khả năng một tổ máy bị lấp trong lớp đất núi nhão. Đến 21h cùng ngày, một công nhân trực tổ máy thủy điện vẫn chưa liên lạc được.",
                    thumbnail: "https://cdn.baogiaothong.vn/upload/images/2022-4/article_img/2022-10-10/img-bgt-2021-b2-1665412429-width1280height720.jpg",
                    category: "tech"
                }}
            />
            <VelticalList data={political}/>
        </Screen>
    )
}
export default HomeScreen;