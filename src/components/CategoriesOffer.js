import { StyleSheet, Text, View, ScrollView , Image } from 'react-native'
import React from 'react'
import { colors } from '../globals/style'


const CategoriesOffer = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.cTxt}>Hello! what's on your mind? </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/pizza_318-900169.jpg?size=626&ext=jpg&ga=GA1.2.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Pizza</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/hamburger_318-855926.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Burger</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/milkshake_318-816383.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=ais'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Shakes</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/cake_318-938128.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Cakes</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/spaghetti_318-135719.jpg?size=626&ext=jpg&ga=GA1.2.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Pasta</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/ice-cream_318-938117.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=ais'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Ice Cream</Text>
                </View>

                <View style={styles.box}>
                <Image source={{uri:'https://img.freepik.com/free-icon/momo_318-879349.jpg?size=626&ext=jpg&ga=GA1.1.166751666.1681723533&semt=sph'}}
                  style={styles.Banner} resizeMode="contain"
    /> 
                    <Text style={styles.mytext}>Momo's</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default CategoriesOffer

const styles = StyleSheet.create({
    container: {
        backgroundColor:"#03fcdf",
        width: '100%',
        height: 100,
        // alignItems: 'center',
        borderColor:"black"
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
    },
    cTxt:{
        paddingLeft:15,
        fontWeight:"800"
    }
})