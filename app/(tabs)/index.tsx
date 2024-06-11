import React, { useEffect, useState } from "react";
import { View, Text } from "@/constants/Themed";
import Swiper from 'react-native-swiper';
// import { SliderBox } from 'react-native-image-slider-box'
// import styles from './index.style';
import { SectionList, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, SIZES } from "@/constants";
import { FlatList, Image, ScrollView } from "react-native";
import ProductCard from "@/components/ProductCard";
// import fetchProducts from "../../Firebase/fetchProducts"
import { collection, firestore, getAuth, getDocs } from "@/firebaseConfig";
import Flag from "@/components/flag";

const countryData = [
  {
    id: "1",
    name: "Indonesia",
    flag: "https://img.icons8.com/?size=100&id=lph_obIfg-jT&format=png&color=000000",
  },
  {
    id: "3",
    name: "Singapore",
    flag: "https://img.icons8.com/?size=100&id=8H-8FMObN4vB&format=png&color=000000",
  },
  {
    id: "11",
    name: "Amerika Serikat",
    flag: "https://img.icons8.com/?size=100&id=aRiu1GGi6Aoe&format=png&color=000000",
  },
  {
    id: "4",
    name: "Thailand",
    flag: "https://img.icons8.com/?size=100&id=IWVDTvmUNsig&format=png&color=000000",
  },
  {
    id: "8",
    name: "Jerman",
    flag: "https://img.icons8.com/?size=100&id=hTMPE6ntTofO&format=png&color=000000",
  },
  {
    id: "9",
    name: "Jepang",
    flag: "https://img.icons8.com/?size=100&id=McQbrq9qaQye&format=png&color=000000",
  },
  {
    id: "10",
    name: "Korea Selatan",
    flag: "https://img.icons8.com/?size=100&id=-_RS8ho736Fs&format=png&color=000000",
  },
  {
    id: "7",
    name: "Myanmar",
    flag: "https://img.icons8.com/?size=100&id=mdqlbmCXtG0X&format=png&color=000000",
  },
  {
    id: "5",
    name: "Vietnam",
    flag: "https://img.icons8.com/?size=100&id=60257&format=png&color=000000",
  },
  {
    id: "6",
    name: "Philippines",
    flag: "https://img.icons8.com/?size=100&id=15530&format=png&color=000000",
  },
];
export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCountries, setSelectedCountries] = useState([]);

  const { currentUser } = getAuth();

  // Function to fetch data from Firestore
  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(firestore, 'Product'));
      const productList = [];
    
      querySnapshot.forEach((doc) => {
        const productData = doc.data();
        // Extract image file ID from Google Drive link
        const fileId = productData.foto.split('/d/')[1].split('/')[0];
        const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

        productList.push({
          ...productData,
          id: doc.id,
          imageUrl, // Add converted image URL to product data
        });
      });
      setProducts(productList);
    } catch (error) {
      console.error('Error fetching documents: ', error);
    } finally {
      setLoading(false);
    }
  };

  // Use effect to fetch data on component mount
  useEffect(() => {
    fetchProducts();
  }, []);

  const toggleCountrySelection = (countryName: string) => {
    setSelectedCountries((prevSelected) => {
      if (prevSelected.includes(countryName)) {
        return prevSelected.filter((name) => name !== countryName);
      } else {
        return [...prevSelected, countryName];
      }
    });
  };

  const filteredProducts = products.filter((product) =>
    selectedCountries.length === 0 ? true : selectedCountries.includes(product.asalNegara)
  );

  return (
    <ScrollView nestedScrollEnabled={true} showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.sliderContainer}></View>
      <View style={styles.imageContainer}>
        {/* sliding images */}
        <Swiper
          autoplay={true}
          autoplayTimeout={3}
          dotStyle={{
            backgroundColor: 'rgba(0,0,0,.2)', 
            borderRadius: 5,
            width: 8,
            height: 8,
            bottom: -40
          }}
          activeDotStyle={{
            backgroundColor: '#007aff', 
            borderRadius: 5,
            width: 30,
            height: 8,
            bottom: -40
          }}
        >
          <Image source={require("../../assets/images/cover1.png")} style={styles.image} />
          <Image source={require("../../assets/images/cover2.png")} style={styles.image} />
          <Image source={require("../../assets/images/cover3.png")} style={styles.image} />
        </Swiper>
      </View>
      <View style={styles.container1}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Jelajahi Dunia</Text>
        </View>
        <View style={{ backgroundColor: 'transparent' }}>
          <FlatList
            data={countryData}
            renderItem={({ item }) => 
            <Flag
              country={item}
              isActive={selectedCountries.includes(item.name)}
              onSelectCountry={toggleCountrySelection}
            />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.productRow}>
          <FlatList
            data={filteredProducts}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard key={item.id} style={styles.smallProductCard} product={item} />} // Gunakan komponen ProductCard untuk setiap item dalam FlatList
            // contentContainerStyle={styles.productList}
          />
        </View>
      </View>
      {/* <View style={[styles.container1, { marginTop: -5 }]}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Keliling Indonesia</Text>
        </View>
        <View style={{ backgroundColor: 'transparent' }}>
          <FlatList
            data={countryData}
            renderItem={({ item }) => 
            <Flag
              country={item}
              isActive={selectedCountries.includes(item.name)}
              onSelectCountry={toggleCountrySelection}
            />}
            keyExtractor={(item) => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={styles.productRow}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard key={item.id} style={styles.smallProductCard} product={item} />} // Gunakan komponen ProductCard untuk setiap item dalam FlatList
            // contentContainerStyle={styles.productList}
          />
        </View>
      </View> */}
      <View style={styles.container2}>
        <Text style={styles.title}>Produk lainnya</Text>
        <View style={styles.productRow}>
          <FlatList
            data={products}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => <ProductCard key={item.id} style={styles.productCard} product={item} />} // Gunakan komponen ProductCard untuk setiap item dalam FlatList
            // contentContainerStyle={styles.productList}
          />
        </View>
      </View>
    </ScrollView>
  );
}

// export default HomePage;

const styles = StyleSheet.create({
  productCard: {
    flex: 1,
    maxWidth: 170,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.offwhite,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginRight: SIZES.medium,
  },
  smallProductCard: {
    flex: 1,
    maxWidth: 150,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.offwhite,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginRight: SIZES.medium,
  },
  container: {
    flex: 1,
    color: COLORS.offwhite,
  },
  sliderContainer: {
    flex: 1,
    height: 200,
    top: -75,
    zIndex: 50,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    alignSelf: "stretch",
    backgroundColor: COLORS.primary,
  },
  imageContainer: {
    alignSelf: "center",
    justifyContent: "center",
    marginTop: SIZES.medium,
    width: 350,
    height: 150,
    backgroundColor: "transparent",
    position: "absolute",
    zIndex: 50,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: SIZES.small,
  },
  container1: {
    marginTop: SIZES.large,
    marginLeft: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  },
  container2: {
    marginLeft: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  },
  title: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    color: COLORS.green,
    backgroundColor: COLORS.offwhite,
    fontFamily: 'SegoeRegular',
  },
  titleRow: {
    marginBottom: SIZES.medium,
  },
  productRow: {
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  },
});
