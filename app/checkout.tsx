import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { router } from 'expo-router';

export default function CheckoutScreen() {
  const products = [1, 2, 3, 4, 5];

  return (
    <View style={styles.backdrop}>
      <ScrollView
      contentContainerStyle={{paddingTop: 20, rowGap: 20, backgroundColor: 'transparent'}}
      showsVerticalScrollIndicator={false}>
      {/* title alamat dan tombol pilih alamat lain */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', backgroundColor: 'transparent', paddingHorizontal: 20}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>Alamat Pengiriman</Text>
          <TouchableOpacity
            onPress={() => router.push('/profile')}
          >
          <Text style={{fontSize: 12}}>Ganti Alamat</Text>
          </TouchableOpacity>
        </View>
        {/* Detail alamat */}
        <View style={{padding: 20, rowGap: 10}}>
          {/* nama + no. telp */}
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold'}}>Kartika Sari</Text>
            <Text>+62 818221007</Text>
          </View>
          {/* alamat */}
          <View style={{flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', columnGap: 5}}>
            <Ionicons name="location-outline" size={24} color="#0047A0" />
            <Text
                numberOfLines={2} 
                ellipsizeMode='tail' 
                style={{maxWidth: '90%'}}
            >
              Jl. Inaja, Nomor 16, RT/RW 001/002, Kelurahan Tanjung Duren, Kecamatan Duren Tanjung, Kota Tangerang, Banten
            </Text>
          </View>
        </View>
        {/* Pesanan */}
        <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 20}}>Pesanan</Text>
        {/* productCheckout component */}
        <View 
            style={{backgroundColor: 'transparent'}}
          >
          {products.map((product, index) => (
            <ProductCheckout key={index} />
          ))}
          {/* Rincian Pembayaran */}
          <Text style={{fontWeight: 'bold', fontSize: 18, marginLeft: 20, marginBottom: 20}}>Rincian Pembayaran</Text> 
          {/* Detailss + metode pembayaran */}
          <View style={{padding: 20, rowGap: 5, marginBottom: 100}}>
            {/* total harga */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 5}}>
              <Text style={{fontSize: 12}}>Total Harga (8 barang)</Text>
              <Text style={{fontSize: 12}}>Rp560.000</Text>
            </View>
            {/* total ongkir */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 5}}>
              <Text style={{fontSize: 12}}>Total Harga (8 barang)</Text>
              <Text style={{fontSize: 12}}>Rp560.000</Text>
            </View>
            {/* biaya layanan */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 5}}>
              <Text style={{fontSize: 12}}>Total Harga (8 barang)</Text>
              <Text style={{fontSize: 12}}>Rp560.000</Text>
            </View>
            {/* separator */}
            <View style={[styles.separator, {backgroundColor: 'black', marginVertical: 10}]} />
            {/* total belanja */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 5}}>
              <Text style={{fontSize: 14}}>Total Belanja</Text>
              <Text style={{fontSize: 14, fontWeight: 'bold'}}>Rp560.000</Text>
            </View>
          </View>
        </View>
      </ScrollView>
        {/* Final Cart and button */}
        <View style={{
          position: 'absolute', 
          bottom: 0, 
          height: 60, 
          zIndex: 10,
          width: '100%', 
          backgroundColor: 'white', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          paddingHorizontal: 20,
          borderTopWidth: 3,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }}>
          {/* Total bre */}
          <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start'}}>
            <Text style={{textAlign: 'left', fontSize: 14}}>Total</Text>
            <Text style={{fontWeight: 'bold', textAlign: 'left', fontSize: 16}}>Rp560.000</Text>
          </View>
          {/* Button */}
          <TouchableOpacity
            style={{
              backgroundColor: '#4A8FE1',
              paddingHorizontal: 50,
              paddingVertical: 10,
              borderRadius: 10,
            }}
            onPress={() => router.push('/payment')}
          >
            <Text style={{fontWeight: 'bold', color: 'white'}}>Bayar</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
}

const ProductCheckout = () => {
  return (
    <View style={[styles.container, {marginBottom: 20, padding: 20, rowGap: 10}]}>
      {/* title and location */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'}}>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Super Jastip</Text>
        {/* location */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="location-outline" size={20} color="#1556A4" />
          <Text style={{fontWeight: 'regular', fontSize: 12, color: '#0047A0'}}>Korea Selatan</Text>
        </View>
      </View>
      {/* separator */}
      <View style={styles.separator} />
      {/* Dikirim dari + waktu */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'regular', fontSize: 12}}>Dikirim dari <Text style={{fontWeight: 'bold', fontSize: 12}}>Bekasi</Text></Text>
        <Text style={{fontWeight: 'regular', fontSize: 12}}>12/05/2024 20:00 WIB</Text>
      </View>
      {/* separator */}
      <View style={styles.separator} />
      {/* Product */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch',justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', columnGap: 10}}>
          {/* Image */}
          <Image source={require('../assets/images/product-1.png')} style={{width: 100, height: 100}}/>
          {/* description */}
          <View style={{flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5, maxWidth: 125}}>
            <Text>BIODANCE Bio-Collagen Real Deep Mask</Text>
            <Text>Rp. 70.000</Text>
          </View>
        </View>
        {/* quantity */}
        <Text>x3</Text>
      </View>
      {/* separator */}
      <View style={styles.separator} />
      {/* Total */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
        <Text style={{fontWeight: 'regular', fontSize: 14}}>Total Pesanan (3 Produk)</Text>
        <Text style={{fontWeight: 'bold', fontSize: 14}}>Rp280.000</Text>
      </View>
      {/* Pengiriman */}
      <View style={{borderColor: '#A9A9A9', borderRadius:10, borderWidth: 1, padding: 10, flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
        {/* nama kurir + estimasi tiba */}
        <View>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>Nama Kurir</Text>
          <Text style={{fontWeight: 'regular', fontSize: 12}}>Estimasi tiba: 27/04 - 02/05</Text>
        </View>
        {/* harga pengiriman */}
        <Text>Rp10.0000</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
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
    backgroundColor: '#A9A9A9',
    height: 1,
    width: '100%',
  },
});
