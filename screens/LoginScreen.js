import { 
    Text, 
    View, 
    SafeAreaView, 
    KeyboardAvoidingView,
    Image,
    Pressable,
    Alert
} from 'react-native'
import React, { useState } from 'react'
import { Input } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native';
import { 
    getAuth,
    signInWithEmailAndPassword
  } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from '../auth/firebase-config';

const LoginScreen = () => {
    const [input, setInput] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState("");
    const navigation = useNavigation();

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, input, password)
        .then((userCredential) => {
            setUser(userCredential.user);
            navigation.navigate("Home")
            setInput("");
            setPassword("");
        })
        .catch(error => {
            Alert.alert("User not found or wrong password");
        })
    }

  return (
    <SafeAreaView style={{flex:1, backgroundColor:"black", padding:10, alignItems:"center"}}>
        <KeyboardAvoidingView>
            {/* Header Section */}
            <View style={{alignItems:"center", justifyContent:"space-between"}}>
                <Image
                    style={{ height: 50, width: 190, marginTop: 30 }}
                    source={require('../assets/logo-removebg.png')}
                />
            </View>

            {/* Login Form Section */}
            <View style={{width:320, marginTop:45}}>
                <Input 
                    value={input}
                    onChange={(event) => setInput(event.nativeEvent.text)}
                    type="email"
                    inputContainerStyle={{borderBottomWidth:0}} 
                    placeholder="Email" 
                    placeholderTextColor={"white"}
                    style={{width:330, padding:15,
                    borderRadius:5, color:"white", backgroundColor:"gray"}} />

                <Input 
                    value={password}
                    onChange={(event) => setPassword(event.nativeEvent.text)}
                    type="password"
                    secureTextEntry={true}
                    inputContainerStyle={{borderBottomWidth:0}} 
                    placeholder="Password" 
                    placeholderTextColor={"white"}
                    style={{width:330, padding:15,
                    borderRadius:5, color:"white", backgroundColor:"gray"}} />
            </View>

            {/* Sign In Button */}
            <Pressable 
                disabled={!input && !password}
                onPress={handleSignIn}
                style={
                    password.length > 5 ? {
                        width:300, 
                        backgroundColor:"red",
                        marginLeft:"auto", 
                        marginRight:"auto",
                        justifyContent:"center", 
                        alignItems:"center",
                        padding:14
                    } : {
                        width:300, 
                        marginLeft:"auto", 
                        marginRight:"auto",
                        justifyContent:"center", 
                        alignItems:"center",
                        borderColor:"white",
                        borderWidth:2,
                        padding:14
                    }
                }>
                <Text 
                    style={{
                        textAlign:"center",
                        fontSize:19,
                        fontWeight:"700",
                        color:"white"}}>
                    Sign In
                </Text>
            </Pressable>

            {/* Sign Up Link */}
            <Pressable onPress={() => navigation.navigate("Register")}>
            <View style={{flexDirection: 'row'}}>
  <Text 
    style={{
      textAlign:"center",
      color:"white",
      fontSize:19,
      fontWeight:"600",
      marginTop:14
    }}
  >
    Don't have an account? 
  </Text>
  <Text 
    style={{
        marginLeft:6,
      textAlign:"center",
      color:"red",
      fontSize:19,
      fontWeight:"600",
      marginTop:14
    }}
  >
    Sign up
  </Text>
</View>
            </Pressable>
        </KeyboardAvoidingView>
        
    </SafeAreaView>
  )
}

export default LoginScreen