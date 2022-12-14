import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screnns/HomeScreen';
import Follow from '../screnns/Follow';
import Setting from '../screnns/Setting';
import Video from '../screnns/Video';
import { NavigationContainer } from '@react-navigation/native';
import { Text, StyleSheet, View , Image} from 'react-native'
const Tab = createBottomTabNavigator();

const Tabs=() => {
  return (
    <NavigationContainer>
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                }
            }}
        >
            <Tab.Screen name="Home" component={HomeScreen} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/tinmoiicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': 'gray',
                                    fontSize: 12
                                }}
                            >Tin Tức</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Follow" component={Follow} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/theodoiicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': 'gray',
                                    fontSize: 12
                                }}
                            >Theo Dõi</Text>
                        </View>
                    ),
                }}
            />
            
            <Tab.Screen name="Video" component={Video} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/videoicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': 'gray',
                                    fontSize: 12
                                }}
                            >Video</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name="Setting" component={Setting} 
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/Settingicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': 'gray'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': 'gray',
                                    fontSize: 12
                                }}
                            >Cài Đặt</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default Tabs;