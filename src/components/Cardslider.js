import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { colors, veg, nonveg } from '../globals/style'
import { FontAwesome } from '@expo/vector-icons';

const Cardslider = ({ title, data, navigation }) => {
    const openProductPage = (item) => {
        // console.log('clicked ', item)
        navigation.navigate('productpage', item)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.cardouthead}>
                {title}
            </Text>
            <FlatList style={styles.cardsout}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={data}
                renderItem={({ item }) => (
                    <TouchableOpacity key={item.index}
                        onPress={() => { openProductPage(item) }}>
                        <View style={styles.card}>
                            <View style={styles.s1}>
                                <Image source={{
                                    uri: item.foodImageUrl
                                }} style={styles.cardimgin} />
                            </View>
                            <View style={styles.s2}>
                                <Text style={styles.txt1}>{item.foodName}</Text>
                            </View>
                                <View style={styles.s2in}>
                                    <Text style={styles.txt2}><FontAwesome name="rupee" size={20} color="black" />{item.foodPrice}/-</Text>
                                </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Cardslider

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        borderRadius:20,
    },
    //card
    cardouthead: {
        color: colors.text3,
        width: '90%',
        fontSize: 30,
        fontWeight: "bold",
        borderRadius: 10,
        marginHorizontal: 10,
    },
    cardsout: {
        width: '100%',
        // backgroundColor: 'red',
    },
    card: {
        // backgroundColor: "aqua",
        margin:15
       
    },
    cardimgin: {
        width: "100%",
        height: 170,
        borderRadius: 6,
        aspectRatio:8/6
    },
    s2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // backgroundColor: 'aqua',
    },
    txt1: {
        fontSize: 16,
        color: colors.text3,
       // marginHorizontal: 5,
    //  width: 300,
    fontWeight:"500",
    marginTop:10

    },
    txt2: {
        fontSize: 20,
        color: colors.text2,
       
        fontWeight:"600"
    },
    s2in: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 5,

    },
    s3: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 1,
        width: '100%',
    },
    buybtn: {
        backgroundColor: colors.text1,
        color: colors.col1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        fontSize: 20,
        borderRadius: 10,
        width: '90%',
        textAlign: 'center',
    }
})