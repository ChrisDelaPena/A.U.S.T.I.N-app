import { useNavigation } from '@react-navigation/core'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import AppStyles from '../constants/AppStyles'
import logo from 'C:/Users/cjame/charlesgpt/assets/logo-no-background.png'
//import { auth } from '../firebase'
import { useState } from 'react'


const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()

  const handleLogin = () => {
    // auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(userCredentials => {
    //     const user = userCredentials.user;
    //     console.log('Logged in with:', user.email);
    //   })
    //   .catch(error => alert(error.message))
    console.log(`Email: ${email}, Password: ${password}`)
    navigation.replace("Home")
  }

  return (
    <View style={styles.container}>
        <Image source={logo} style={styles.mainlogo} />
      <View style={styles.logoContainer}>
        <Text style={styles.textstyle}>
        Advanced Utilization System for Tracking Insights and Numbers
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.loginContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.registerContainer}>
        <Text style={styles.text}>Not registered yet?</Text>
        <TouchableOpacity
          onPress={() => navigation.replace("Register")}
        >
          <Text style={styles.registerText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppStyles.color.background
  },
  logoContainer: {
    padding: 30,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: AppStyles.color.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  loginContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: AppStyles.color.accent,
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  text: {
    fontSize: 14,
    marginRight: 5
  },
  registerContainer: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 10,
  },
  registerText: {
    color: AppStyles.color.accent,
    fontWeight: '700',
    fontSize: 14,
  },
  mainlogo: {
    height: 130,
    width: 130,
    borderRadius: 100,
    alignItems: 'baseline',
  },
  textstyle: {
    textAlign: 'center',
    fontSize: 17,
    fontFamily: 'Iowan Old Style'
  }
})