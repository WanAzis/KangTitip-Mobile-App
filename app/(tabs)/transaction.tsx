import { ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { SetStateAction, useState } from 'react';
import { Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function TransactionScreen() {
  const [activeButton, setActiveButton] = useState("Menunggu Konfirmasi");
  const handleFilterRequest = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName);
  };
  
  const activeStyle = { backgroundColor: "#3A76BD", color: "white" };
  const activeTextStyle = { color: "white" };
  const products = [1, 2, 3, 4, 5];


  return (
    <View style={styles.backdrop}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor: "transparent",
          marginLeft: 20
        }}>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
              justifyContent: "center",
              height: 30,
              marginRight: 10,
            },
            activeButton === "Menunggu Konfirmasi" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Menunggu Konfirmasi")}>
          <Text
            style={[
              { color: "#8C8C8C", fontSize: 14},
              activeButton === "Menunggu Konfirmasi" ? activeTextStyle : {},
            ]}>
            Menunggu Konfirmasi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
              justifyContent: "center",
              height: 30,
              marginRight: 10,
            },
            activeButton === "Dikonfirmasi" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Dikonfirmasi")}>
          <Text
            style={[
              { color: "#8C8C8C", fontSize: 14},
              activeButton === "Dikonfirmasi" ? activeTextStyle : {},
            ]}>
            Dikonfirmasi
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
              justifyContent: "center",
              height: 30,
              marginRight: 10,
            },
            activeButton === "Dikemas" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Dikemas")}>
          <Text
            style={[
              { color: "#8C8C8C", fontSize: 14},
              activeButton === "Dikemas" ? activeTextStyle : {},
            ]}>
            Dikemas
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
              justifyContent: "center",
              height: 30,
              marginRight: 10,
            },
            activeButton === "Dikirim" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Dikirim")}>
          <Text
            style={[
              { color: "#8C8C8C", fontSize: 14},
              activeButton === "Dikirim" ? activeTextStyle : {},
            ]}>
            Dikirim
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 5,
              justifyContent: "center",
              height: 30,
              marginRight: 10,
            },
            activeButton === "Selesai" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Selesai")}>
          <Text
            style={[
              { color: "#8C8C8C", fontSize: 14},
              activeButton === "Selesai" ? activeTextStyle : {},
            ]}>
            Selesai
          </Text>
        </TouchableOpacity>
      </ScrollView>
      <View style={[styles.containerItem, {flex: 20, backgroundColor: 'transparent'}]}>
        {/* make a scrollable list of productOrdered */}
        <ScrollView 
          showsVerticalScrollIndicator={false}
        >
          {products.map((product, index) => (
            <ProductOrdered key={index} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const ProductOrdered = () => {
  const moveToPage = (page: string) => {
    // Handle button press
    router.push(page);
  };
  
  return (
    <View style={[styles.container, {marginBottom: 20}]}>
      {/* title and location */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'}}>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Super Jastip</Text>
        {/* location */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Ionicons name="location" size={20} color="#1556A4" />
          <Text style={{fontWeight: 'regular', fontSize: 14}}>Korea Selatan</Text>
        </View>
      </View>
      {/* image, description, and amount */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch',justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        {/* Image */}
        <Image source={require('../../assets/images/product-1.png')} style={{width: 100, height: 100}}/>
        {/* description */}
          <View style={{marginLeft: 5, maxWidth: 150}}>
            <Text>BIODANCE Bio-Collagen Real Deep Mask</Text>
            <Text>Rp. 70.000</Text>
          </View>
        </View>
        {/* amount */}
        <Text>x3</Text>
      </View>
      {/* separator line */}
      <View style={styles.separator} />
      {/* tot. product and price */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between'}}>
        <Text>3 Produk</Text>
        <Text style={{fontWeight: 'bold', color: '#1188AE'}}>total: Rp210.000</Text>
      </View> 
      <View style={styles.separator} />
      {/* status pesanan, chat + detail */}
      <View style={{flexDirection: 'row', alignSelf: 'stretch', justifyContent: 'space-between', alignItems: 'center'}}>
        <Text style={{fontSize: 16}}>Status Pesanan</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 10}}>
          <TouchableOpacity><MaterialCommunityIcons name="message-text-outline" size={32} color="#A9A9A9" /></TouchableOpacity>
          <TouchableOpacity 
            style={{backgroundColor: '#4A8FE1', borderRadius: 10, paddingHorizontal: 30, paddingVertical: 5}}
            onPress={() => moveToPage("/productDetails")}
          >
            <Text style={{color: 'white', fontWeight: 'bold', fontSize: 16}}>Detail</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
    rowGap: 20,
    backgroundColor: "#F0F0F0",
  },
  containerItem: {
    flex: 1,
    marginHorizontal: 20,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    borderRadius: 15,
    rowGap: 15
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
