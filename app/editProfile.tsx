import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { MonoText } from '@/components/StyledText';
import { useState } from 'react';
import { router } from 'expo-router';

export default function editProfile() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');

  const handleSave = () => {
    // Implement save functionality
    router.push('/profile');
    console.log('Saved', { name, phoneNumber, address });
  };

  const handleCancel = () => {
    // Implement cancel functionality
    console.log('Cancelled');
  };
  
  return (
    <View style={styles.backdrop}>
      <Image source={require('../assets/images/profile.png')} style={styles.profileImage} />
      <Text style={styles.textInput}>Nama</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Masukkan nama Anda"
      />
      <Text style={styles.textInput}>Nomor Telepon</Text>
      <TextInput
        style={styles.input}
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        placeholder="Masukkan nomor ponsel Anda"
        keyboardType="phone-pad"
      />
      <Text style={styles.textInput}>Alamat</Text>
      <TextInput
        style={styles.input}
        value={address}
        onChangeText={setAddress}
        placeholder="Masukkan alamat Anda"
      />
      <TouchableOpacity 
        onPress={handleSave}
        style={styles.saveButton}
      >
        <Text style={{ color: 'white', fontWeight: 'bold'}}>Simpan</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        onPress={handleCancel}
        style={styles.cancelButton}  
      >
        <Text>Batal</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    paddingTop: 30,
    paddingHorizontal: 20,
    rowGap: 20,
    backgroundColor: "#F0F0F0",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 75,
    width: 75,
    alignSelf: 'center',
  },
  input: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    justifyContent: 'center',
    height: 40,
    borderRadius: 10,
    padding: 10,
  },
  textInput: {
    alignSelf: 'flex-start',
    fontSize: 14,
    fontWeight: 'regular',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  saveButton: {
    backgroundColor: '#4A8FE1',
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  cancelButton: {
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  }
});
