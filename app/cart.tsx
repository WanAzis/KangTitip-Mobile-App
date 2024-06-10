import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { router } from 'expo-router';

export default function CartScreen() {
  const products = [1, 2, 3, 4, 5];
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked(!isChecked);
  
  return (
    <View style={[styles.backdrop, {}]}>
        <ScrollView 
          style={{paddingTop: 20}}
          showsVerticalScrollIndicator={false}
        >
          {products.map((product, index) => (
            <ProductCart key={index} />
          ))}
          <View style={{backgroundColor: 'transparent', height: 80}}></View>
        </ScrollView>
        {/* Final Cart and Titip button */}
        <View style={{
          position: 'absolute', 
          bottom: 0, 
          height: 60, 
          width: '100%', 
          backgroundColor: 'white', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingHorizontal: 20,
          borderTopWidth: 3,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }}>
          {/* checklist box */}
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
            <TouchableOpacity onPress={toggleCheck}>
              <MaterialCommunityIcons
                name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"} 
                size={24} 
                color="#1556A4" 
              />
            </TouchableOpacity>
            <Text>Semua</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 10}}>
            {/* Total bre */}
            <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <Text style={{textAlign: 'right'}}>Total</Text>
              <Text style={{fontWeight: 'bold', textAlign: 'right', fontSize: 12}}>Rp. 560.000</Text>
            </View>
            {/* Titip Button */}
            <TouchableOpacity
              style={{
                backgroundColor: '#4A8FE1',
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 10,
              }}
              onPress={() => router.push('/checkout')}
            >
              <Text style={{fontWeight: 'bold', color: 'white'}}>Titip</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const ProductCart = () => {
  const [amount, setAmount] = useState(1);
  const [isChecked, setIsChecked] = useState(false);

  const increaseAmount = () => setAmount(prevAmount => prevAmount + 1);
  const decreaseAmount = () => setAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : 0);
  const toggleCheck = () => setIsChecked(!isChecked);

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
      {/* Product */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch',justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
        {/* checklist box */}
        <TouchableOpacity onPress={toggleCheck}>
          <MaterialCommunityIcons
            name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"} 
            size={24} 
            color="#1556A4" 
          />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', columnGap: 10}}>
        {/* Image */}
        <Image source={require('../assets/images/product-1.png')} style={{width: 100, height: 100}}/>
        {/* description */}
          <View style={{flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5, maxWidth: 125}}>
            <Text>BIODANCE Bio-Collagen Real Deep Mask</Text>
            <Text>Rp. 70.000</Text>
          </View>
        </View>
        {/* trash button */}
        <TouchableOpacity style={{alignSelf: 'flex-end'}}>
          <Ionicons name="trash-outline" size={21} color="#616161" />
        </TouchableOpacity>
        {/* add or minus amount */}
        <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', columnGap: 8}}>
          <TouchableOpacity 
            onPress={decreaseAmount} 
            style={{paddingHorizontal: 6, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: '#DEDEDE'}}
          >
            <Text style={{fontWeight: 600}}>-</Text>
          </TouchableOpacity>
            <Text>{amount}</Text>
          <TouchableOpacity 
            onPress={increaseAmount} 
            style={{paddingHorizontal: 5, borderTopRightRadius: 8, borderBottomRightRadius: 8, backgroundColor: '#DEDEDE'}}
          >
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* separator */}
      <View style={styles.separator} />
      {/* batas pemesanan */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
          <MaterialCommunityIcons name="clock-outline" size={18} color="#0047A0" />
          <Text style={{fontWeight: 'regular', fontSize: 12}}>Batas Pemesanan</Text>
        </View>
        <Text style={{fontWeight: 'regular', fontSize: 12}}>12/05/2024 20:00 WIB</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
    backgroundColor: '#A9A9A9',
    height: 1,
    width: '100%',
  },
});
