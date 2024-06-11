import React from 'react'; // Ensure React is in scope when using JSX
import { StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { FontAwesome5, FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { auth, signOut } from '@/firebaseConfig';

export default function ProfileScreen() {
  // const user = auth.currentUser;
  
  return (
    <View style={styles.backdrop}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ alignSelf: 'stretch', backgroundColor: 'transparent'}}
        contentContainerStyle={{rowGap: 15}}
      >
        {/* profile pict, name, & pen edit button */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent', marginTop: 30, paddingHorizontal: 20}}>
          {/* profile and name */}
          <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', columnGap: 10}}>
            <Image source={require('../../assets/images/profile.png')} style={{height: 50, width: 50}}/>
            <Text style={{fontWeight: 'bold', fontSize: 21}}>Kartika Sari</Text>
          </View>
          {/* pen icon button */}
          <TouchableOpacity onPress={() => router.push('/editProfile')}>
            <FontAwesome6 name="edit" size={24} color="#4A8FE1" />
          </TouchableOpacity>
        </View>
        {/* buka jastip & button daftar */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', paddingHorizontal: 20, paddingVertical: 10}}>
          {/* icon toko + text mau buka jastip */}
          <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: 'transparent', columnGap: 10}}>
            <FontAwesome5 name="store-alt" size={24} color="#5F83EC" />
            <Text style={{fontWeight: 'regular', fontSize: 16}}>Mau Buka Jastip?</Text>
          </View>
          {/* button daftar */}
          <TouchableOpacity style={{backgroundColor: '#4A8FE1', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 20}}>
            <Text style={{fontWeight: 'bold', fontSize: 14, color: 'white'}}>Daftar</Text>
          </TouchableOpacity>
        </View>
        {/* Pengaturan */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', backgroundColor: 'transparent', paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Pengaturan</Text>
        </View>
        <ArrowedButton text="Alamat" onPress={() => {router.push('/editProfile')}}/>
        <ArrowedButton text="Toko" onPress={() => {}}/>
        <ArrowedButton text="Notifikasi" onPress={() => {router.push('/notification')}}/>
        {/* Aktivitas */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', backgroundColor: 'transparent', paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Aktivitas</Text>
        </View>
        <ArrowedButton text="Riwayat transaksi" onPress={() => {router.push('/transaction')}}/>
        <ArrowedButton text="Produk disimpan" onPress={() => {router.push('/saved')}}/>
        <ArrowedButton text="Produk request" onPress={() => {router.push('/request')}}/>
        {/* Bantuan */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', backgroundColor: 'transparent', paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>Bantuan</Text>
        </View>      
        <ArrowedButton text='Form Bantuan' onPress={() => {}}/>
        {/* Tombol keluar */}
        <TouchableOpacity style={{alignSelf: 'center', backgroundColor: 'transparent', marginVertical: 20} } onPress={() => signOut(auth)}>
          <Text style={{fontWeight: 'regular', color: '#CD2E3A', fontSize: 14}}>Keluar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

// Component Arrowed Button
type ArrowedButtonProps = {
  text: string;
  onPress: () => void; // Adjust the type based on the actual usage
};

const ArrowedButton: React.FC<ArrowedButtonProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity 
      onPress={onPress} 
      style={{
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between', 
        alignSelf: 'stretch', 
        backgroundColor: 'white', 
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: 20,
        borderRadius: 15,
      }}
    >
      <Text style={{fontSize: 14, fontWeight: 'regular'}}>{text}</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="#A9A9A9" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: 'center',
    rowGap: 20,
    backgroundColor: "#F0F0F0",
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
});
