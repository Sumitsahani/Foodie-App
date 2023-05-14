import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../globals/style';
import { FontAwesome5 } from '@expo/vector-icons';
const BottomNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            {/* <Text>BottomNav</Text> */}
            <View style={styles.btncon1}>
            <Image source={{uri:'https://img.freepik.com/free-icon/home-icon-silhouette_318-85097.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain" onPress={() => { navigation.navigate('home') }}
    /> 

            </View>
            <View style={styles.btncon1} >
            <TouchableOpacity   onPress={() => { navigation.navigate('cart') }}>
            <Image source={{uri:'https://img.freepik.com/free-icon/carts_318-676736.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
          </TouchableOpacity>
            </View>
            <View style={styles.btncon1} >
                <FontAwesome5 name="map-marked-alt" size={30} color="black" style={styles.Banner} onPress={() => { navigation.navigate('trackorders') }} />
            </View>
        </View>
    )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        backgroundColor: 'white',
        width: '100%',
        elevation: 30,
        borderTopColor: colors.text1,
        borderTopWidth: 0.5,
        borderTopEndRadius: 20,
        borderTopStartRadius: 20,
        height:"30%"
    },
    btncon1: {
        alignItems: 'center',
    },
    btncon2: {
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        top: -20,
        backgroundColor: colors.text1,
        width: 60,
        height: 60,
        borderRadius: 60,
    },
    icon2: {
        color: 'white',

    },
    Banner:{
        height:30,
        width:30,
        marginRight:10
       }
})