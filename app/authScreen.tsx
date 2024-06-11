import { createUserWithEmailAndPassword, signInWithEmailAndPassword, auth } from '@/firebaseConfig';
import { useRouter } from 'expo-router';
import React, { useState, useEffect } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal'
import { View, Text, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const authScreen = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const router = useRouter();
    const [alertMessage, setAlertMessage] = useState('');
    const [isAlertVisible, setAlertVisible] = useState(false); 

    const showErrorAlert = (message: string) => {
      setAlertMessage(message);
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 2000); 
  };
  
    const handleAuth = async () => {
        setError('');
        try {
          if (isLogin) {
            signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    if (user) router.replace("/(tabs)");
                })
                .catch((err) => {
                  const errorMessage = getCustomErrorMessage(err.code);
                  showErrorAlert(errorMessage);
                });
          } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    if (user) router.replace("/(tabs)");
                })
                .catch((err) => {
                  const errorMessage = getCustomErrorMessage(err.code);
                  showErrorAlert(errorMessage);
                });
          }
        //   router.replace('/(tabs)'); // Mengarahkan ke halaman home setelah login/signup berhasil
        } catch (error: any) {
          const errorMessage = getCustomErrorMessage(error.message);
          setError(errorMessage);
        }
      };

      function getCustomErrorMessage(errorCode: any) {
        switch (errorCode) {
          case 'auth/invalid-email':
            return 'Email tidak valid!';
          case 'auth/user-not-found':
            return 'Email belum terdaftar!';
          case 'auth/invalid-credentials':
            return 'Email/Password salah!';
          case 'auth/wrong-password':
            return 'Email/Password salah!';
          case 'auth/missing-password':
            return 'Masukkan password!';
          case 'auth/email-already-in-use':
            return 'Email sudah digunakan, silahkan gunakan email lain!';
          case 'auth/weak-password':
            return 'Password terlalu lemah: minimal 6 karakter!';
          default:
            return 'An unknown error occurred';
        }
      }
    
      interface CustomAlertProps {
        message: string;
      }

      const CustomAlert: React.FC<CustomAlertProps> = ({ message }) => {
        return (
          <View style={styles.alert}>
            <Ionicons name="alert-circle" color="#cf142b" />
            <Text style={styles.alertText}>{alertMessage}</Text>
          </View>
        );
      };

    return (
      <View
        style={styles.container}

      >
        <Text style={styles.title}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.textInput}>Email</Text>
          <TextInput
            placeholder="Masukkan email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
            keyboardType="email-address"
          />
          <Text style={styles.textInput}>Password</Text>
          <TextInput
            placeholder="Masukkan password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
          {isAlertVisible && <CustomAlert message={alertMessage}/>}
        </View>
        
        {error ? <Text style={styles.error}>{error}</Text> : null}
  
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleAuth}
            style={{width: '40%'}}
          >
            <LinearGradient 
              colors={['#4A8FE1', '#2A67B0']}
              style={styles.loginButton}  
            >
              <Text style={styles.buttonText}>{isLogin ? 'Log In' : 'Sign Up'}</Text>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={{flexDirection: 'row', padding: 30}}
            onPress={() => setIsLogin(!isLogin)}
          >
            <Text style={styles.switchText}>{isLogin ? "Doesn't have an account? " : 'Already have an account? '}</Text>
            <Text style={[styles.switchText, {fontWeight: 'bold'}]}>{isLogin ? 'Sign Up' : 'Log In'}</Text>
          </TouchableOpacity>
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
      width: '90%',
      rowGap: 10,
    },
    input: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 10,
      marginTop: 5,
    },
    textInput: {
      fontSize: 14,
      fontWeight: 'regular',  
    },
    buttonContainer: {
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 40,
    },
    title: {
        fontSize: 32,
        color: '#004859',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    error: {
        color: 'red',
        marginBottom: 20,
        textAlign: 'center',
    },
    buttonText: {
      color: 'white',
      fontWeight: '700',
      fontSize: 16,
    },
    loginButton: {
      backgroundColor: '#0782F9',
      width: '100%',
      padding: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    switchText: {
      fontSize: 12,
      fontWeight: 'regular',
      color: '#004859',
      textAlign: 'center'
    },
    modal: {
      backgroundColor: 'white',
      position: 'absolute',
      bottom: 300,
      top: 100,
      borderRadius: 15,
      padding: 20,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', 
      rowGap: 10,
    },
    alert: {
      flexDirection: 'row', 
      alignItems: 'center', 
      columnGap: 5
    },
    alertText: {
      color: '#cf142b',
      fontWeight: 'regular', 
      fontSize: 12,
    } 
  })