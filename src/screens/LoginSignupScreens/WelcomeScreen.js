import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

import { colors, hr80 } from "../../globals/style";
import { firebase } from "../../../Firebase/firebaseConfig";

const WelcomeScreen = ({ navigation }) => {
  const [userlogged, setUserlogged] = useState(null);
  useEffect(() => {
    const checklogin = () => {
      firebase.auth().onAuthStateChanged((user) => {
        // console.log(user);
        if (user) {
          // navigation.navigate('home');
          setUserlogged(user);
        } else {
          // No user is signed in.
          console.log("no user");
        }
      });
    };
    checklogin();
  }, []);

  const handlelogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        setUserlogged(null);
        console.log("signed out");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Foodie</Text>
      <View style={styles.logoout}>
        <Image
          source={{
            uri: "https://img.freepik.com/free-vector/way-concept-illustration_114360-1191.jpg?size=626&ext=jpg&ga=GA1.2.166751666.1681723533&semt=ais",
          }}
          style={styles.Banner}
          resizeMode="contain"
        />
      </View>
      {userlogged === null ? (
        <View style={styles.btnout}>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.btn}>Sign up</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("login")}>
            <Text style={styles.btn}>Log In</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={styles.logged}>
          <Text style={styles.txtlog}>
            Signed in as :<Text style={styles.txtlogin}>{userlogged.email}</Text>
          </Text>
          <View style={styles.btnout}>
            <TouchableOpacity onPress={() => navigation.navigate("home")}>
              <Text style={styles.btn}>Next</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlelogout()}>
              <Text style={styles.btn}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
    alignItems:"center",
    justifyContent:"center",
    backgroundColor:'white'
  },
  title: {
    fontSize: 50,
    color:"black",
    textAlign: "center",
    marginVertical: 10,
    fontWeight: "200",
  },
  logoout: {
    height:"40%",
    width:"80%",
    backgroundColor:'#fff',
    alignItems:"center"
  },
  Banner:{
    height:300,
    width:300
   },
  text: {
    fontSize: 18,
    width: "80%",
    color: colors.col1,
    textAlign: "center",
  },
  btnout: {
    flexDirection: "row",
  },
  btn: {
    fontSize: 20,
        backgroundColor:"red",
        textAlign:"center",
        marginVertical: 30,
        marginHorizontal:10,
        fontWeight:"700",
        borderRadius:10,
        padding:10,
        paddingHorizontal:20,
        color:"white"
  },
  logged: {
    alignItems: "center",
  },
  txtlog: {
    fontSize: 16,
    color:"red",
    fontWeight:"500"
  },
  txtlogin: {
    fontSize: 16,
    color: "black",
    fontWeight: "700",
    textDecorationStyle: "solid",
    textDecorationLine: "none",
    justifyContent:"center",
    textAlign:"center"
  },
});
export default WelcomeScreen;
