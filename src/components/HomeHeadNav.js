import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { colors } from '../globals/style';

const HomeHeadNav = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigation.navigate('userprofile') }}>
                <FontAwesome5 name="user-circle" size={26} color="black" style={styles.myicon} />
            </TouchableOpacity>
        </View>
    )
}

export default HomeHeadNav

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: "flex-end",
        padding: 10,
        alignItems: "flex-end",
        backgroundColor: colors.col1,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    containerin: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    myicon: {
        color:"black",
    },
    mytext: {
        color: colors.text1,
        fontSize: 24,
    },
})