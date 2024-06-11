import { createUserWithEmailAndPassword, signInWithEmailAndPassword, auth } from '@/firebaseConfig';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

const authScreen = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
  
    const handleAuth = async () => {
        setError('');
        try {
          if (isLogin) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    if (user) router.replace("/(tabs)");
                })
                .catch((err) => {
                    alert(err?.message);
                });
          } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    if (user) router.replace("/(tabs)");
                })
                .catch((err) => {
                    alert(err?.message);
                });
          }
        //   router.replace('/(tabs)'); // Mengarahkan ke halaman home setelah login/signup berhasil
        } catch (error) {
          setError(error.message);
        }
      };

    // useEffect(() => {
    //   const unsubscribe = auth.onAuthStateChanged(user => {
    //     if (user) {
    //       router.replace("(tabs)")
    //     }
    //   })
  
    //   return unsubscribe
    // }, [])
  
    // const handleSignUp = () => {
    //   createUserWithEmailAndPassword(auth, email, password)
    //     .then(userCredentials => {
    //       const user = userCredentials.user;
    //       console.log('Registered with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }
  
    // const handleLogin = () => {
    //   signInWithEmailAndPassword(auth, email, password)
    //     .then(userCredentials => {
    //       const user = userCredentials.user;
    //       console.log('Logged in with:', user.email);
    //     })
    //     .catch(error => alert(error.message))
    // }
  
    return (
      <View
        style={styles.container}
        // behavior="padding"
      >
        <Text style={styles.title}>{isLogin ? 'Login' : 'Sign Up'}</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>
        {error ? <Text style={styles.error}>{error}</Text> : null}
  
        <View style={styles.buttonContainer}>
        <Button title={isLogin ? 'Login' : 'Sign Up'} onPress={handleAuth} />
        <Button
            title={isLogin ? 'Switch to Sign Up' : 'Switch to Login'}
            onPress={() => setIsLogin(!isLogin)}
        />
        </View>
      </View>
    )
}

export default authScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    inputContainer: {
      width: '80%'
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    buttonContainer: {
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    error: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
    },
    button: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 15,
      borderRadius: 10,
      alignItems: 'center',
    },
    buttonOutline: {
      backgroundColor: 'white',
      marginTop: 5,
      borderColor: '#0782F9',
      borderWidth: 2,
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    buttonOutlineText: {
      color: '#0782F9',
      fontWeight: '700',
      fontSize: 16,
    },
  })