import { StyleSheet, Text, View, StatusBar, TextInput, FlatList, Image, ScrollView, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import CategoriesOffer from '../components/CategoriesOffer'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons';
import { colors, veg, nonveg } from '../globals/style'

import { firebase } from '../../Firebase/firebaseConfig'
import Cardslider from '../components/Cardslider'
import BottomNav from '../components/BottomNav'
import { Entypo } from '@expo/vector-icons';
import { windowHeight } from '../components/BottomNav'

const HomeScreen = ({ navigation }) => {

    const [foodData, setFoodData] = useState([]);
    const [VegData, setVegData] = useState([]);
    const [NonVegData, setNonVegData] = useState([]);


    const foodRef = firebase.firestore().collection('FoodData');

    useEffect(() => {
        foodRef.onSnapshot(snapshot => {
            setFoodData(snapshot.docs.map(doc => doc.data()))
        }
        )
    }, [])

    useEffect(() => {
        setVegData(foodData.filter((item) => item.foodType == 'veg'))
        setNonVegData(foodData.filter((item) => item.foodType == 'non-veg'))
    }, [foodData])

    const [search, setSearch] = useState('')
    return (
        <View style={styles.container}>
            <StatusBar />

            <HomeHeadNav navigation={navigation} />

            <View style={styles.bottomnav}>
                <BottomNav navigation={navigation} />
            </View>


            <ScrollView>
                <View style={styles.searchbox}>
                    <AntDesign name="search1" size={24} color="black" style={
                        styles.searchicon
                    } />
                    <TextInput style={styles.input} placeholder="Search" onChangeText={(e) => {
                        setSearch(e)
                    }} />

                </View>
                {search != '' && <View style={styles.seacrhresultsouter}>
                    <FlatList style={styles.searchresultsinner} data={foodData} renderItem={
                        ({ item }) => {
                            if (item.foodName.toLowerCase().includes(search.toLowerCase())) {
                                return (
                                    <View style={styles.searchresult}>
                                        <AntDesign name="arrowright" size={24} color="black" />
                                        <Text style={styles.searchresulttext}>{item.foodName}</Text>
                                    </View>
                                )
                            }
                        }
                    } />
                </View>}
                <Categories />
                <OfferSlider />
                {/* <Text>HomeScreen</Text> */}
                <Cardslider title={"Today's Special"} data={foodData} navigation={navigation} />
                <CategoriesOffer/>
                <Cardslider title={"Non-Veg"} data={NonVegData} navigation={navigation} />
                <Cardslider title={"Veg"} data={VegData} navigation={navigation} />
                <View style={styles.end} >
                <View style={styles.footertxtc}>
                    <Text style={styles.footertxt}>Eat Well,</Text>
                    <Text style={styles.footertxt2}>Live Well with Our App</Text>
                    <Text style={styles.footertxt3}>Made in India , Delivered with Love <Entypo name="heart" size={20} color="red" /></Text>
                    </View>
                </View>
            </ScrollView>


        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        // marginTop: 50,
        flex: 1,
        backgroundColor: colors.col1,
        // alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    searchbox: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: colors.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        margin: 20,
        elevation: 10,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 18,
        color: colors.text1,
    },
    searchicon: {
        color: colors.text1,
    },
    seacrhresultsouter: {
        width: '100%',
        marginHorizontal: 30,
        height: '100%',
        backgroundColor: colors.col1,
    },
    searchresultsinner: {
        width: '100%',
    },
    searchresult: {
        width: '100%',
        flexDirection: 'row',
        // alignItems: 'center',
        padding: 5,
    },
    searchresulttext: {
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1,
    },
    bottomnav: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: colors.col1,
        zIndex: 20,
    },
    end:{
        height:200,
        width:"100%",
        backgroundColor:"#03fcdf"
    },
    footertxt:{
        paddingLeft:10,
        paddingTop:20,
        fontSize:20,
        fontWeight:"bold"
    },
    footertxt2:{
        paddingLeft:10, 
        fontWeight:"900" 
    },
    footertxt3:{
        paddingTop:23,
        paddingLeft:10, 
        fontWeight:"500" 
    }
  
})
export default HomeScreen