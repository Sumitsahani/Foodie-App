import { StyleSheet, Text, View, ScrollView , Image } from 'react-native'
import React from 'react'
import { colors } from '../globals/style'
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Categories = () => {
    return (
        <View style={styles.container}>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/dumpling_318-530913.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=ais'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Starters</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/plate_318-916351.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Dinner</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/cutlery_318-929265.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Breakfast</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/ice-cream_318-710255.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Deserts</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default Categories

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.col1,
        width: '100%',
        // height: 100,
        // alignItems: 'center',
        borderRadius: 10,
    },
    head: {
        color: colors.text1,
        fontSize: 25,
        fontWeight: '300',
        margin: 10,
        alignSelf: 'center',
        paddingBottom: 5,
        borderBottomColor: colors.text1,
        borderBottomWidth: 1,
    },
    box: {
        backgroundColor: colors.col1,
        elevation: 20,
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    Banner:{
        height:30,
        width:30,
        marginRight:10
       },
    mytext: {
        color: colors.text3,
    }
})