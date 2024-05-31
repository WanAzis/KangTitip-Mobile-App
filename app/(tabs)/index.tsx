import React from "react";
import { View, Text } from "@/constants/Themed";
// import { SliderBox } from 'react-native-image-slider-box'
// import styles from './index.style';
import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "@/constants";
import { FlatList, Image, ScrollView } from "react-native";
import ProductCard from "@/components/ProductCard";

// // Data dummy untuk produk
// // const products = Array.from({ length: 10 }, (_, index) => ({
// //   id: index.toString(),
// //   name: `Product ${index + 1}`,
// // }));

const dummyData = [
  {
    id: "1",
    name: "TV Set",
    price: "50.000",
    deadline: "2024-06-15",
    shippingDate: "2024-06-20",
    image: require("../../assets/images/product-1.jpeg"),
  },
  {
    id: "2",
    name: "Gelas Motif Bunga",
    price: "62.500",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-2.jpeg"),
  },
  {
    id: "3",
    name: "Proyektor Modern",
    price: "350.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-3.jpeg"),
  },
  {
    id: "4",
    name: "Oven/Microwave Standard",
    price: "735.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-4.jpeg"),
  },
  {
    id: "5",
    name: "Sisir Rambut",
    price: "55.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-1.jpeg"),
  },
  {
    id: "6",
    name: "Sapu Serba Guna",
    price: "33.333",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-2.jpeg"),
  },
  {
    id: "7",
    name: "Stiker Spongebob",
    price: "27.000",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-3.jpeg"),
  },
  {
    id: "8",
    name: "Kompor Listrik",
    price: "1.000.999",
    deadline: "2024-06-16",
    shippingDate: "2024-06-21",
    image: require("../../assets/images/product-4.jpeg"),
  },
  // Tambahkan data dummy lainnya...
];

type Country = {
  id: string;
  name: string;
  flag: string;
};

type CountryProps = {
  country: Country;
};

const countryData = [
  {
    id: "1",
    name: "Indonesia",
    flag: "https://img.icons8.com/?size=100&id=lph_obIfg-jT&format=png&color=000000",
  },
  {
    id: "2",
    name: "Malaysia",
    flag: "https://img.icons8.com/?size=100&id=nQtyhesxmxhM&format=png&color=000000",
  },
  {
    id: "3",
    name: "Singapore",
    flag: "https://img.icons8.com/?size=100&id=8H-8FMObN4vB&format=png&color=000000",
  },
  {
    id: "4",
    name: "Thailand",
    flag: "https://img.icons8.com/?size=100&id=IWVDTvmUNsig&format=png&color=000000",
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
  {
    id: "7",
    name: "Myanmar",
    flag: "https://img.icons8.com/?size=100&id=15530&format=png&color=000000",
  },
  {
    id: "8",
    name: "Brunei",
    flag: "https://img.icons8.com/?size=100&id=60221&format=png&color=000000",
  },
  {
    id: "9",
    name: "Cambodia",
    flag: "https://img.icons8.com/?size=100&id=j8AsAniVuzYv&format=png&color=000000",
  },
  {
    id: "10",
    name: "Laos",
    flag: "https://img.icons8.com/?size=100&id=2ui1n4CYeion&format=png&color=000000",
  },
];

// Flag component
const Flag: React.FC<CountryProps> = ({ country }) => {
  return (
    <View
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          columnGap: 5,
          marginLeft: 5,
          padding: 5,
          paddingBottom: 5,
          borderRadius: 25,
          minHeight: 25,
          backgroundColor: "#D9D9D9",
        },
      ]}>
      <Image
        source={{ uri: country.flag }}
        style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 10 }}
      />
      <Text
        style={{
          fontSize: 11,
          textAlign: "center",
          textAlignVertical: "center",
        }}>
        {country.name}
      </Text>
    </View>
  );
};

export default function HomePage() {
  const slides = [
    "../../assets/images/product-1.jpeg",
    "../../assets/images/product-2.jpeg",
    "../../assets/images/product-3.jpeg",
    "../../assets/images/product-4.jpeg",
  ];
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.sliderContainer}></View>
      <View style={styles.imageContainer}>
        {/* <SliderBox images={slides} */}
        <Image
          source={require("../../assets/images/cover.png")}
          style={styles.image}
        />
      </View>
      <View style={styles.container1}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Jelajahi Dunia</Text>
        </View>
        <FlatList
          data={countryData}
          renderItem={({ item }) => <Flag country={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.productRow}>
          <FlatList
            data={dummyData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard product={item} />} // Gunakan komponen ProductCard untuk setiap item dalam FlatList
            // contentContainerStyle={styles.productList}
          />
        </View>
      </View>
      <View style={[styles.container1, { marginTop: -5 }]}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Keliling Indonesia</Text>
        </View>
        <FlatList
          data={countryData}
          renderItem={({ item }) => <Flag country={item} />}
          keyExtractor={(item) => item.id}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.productRow}>
          <FlatList
            data={dummyData}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => <ProductCard product={item} />} // Gunakan komponen ProductCard untuk setiap item dalam FlatList
            // contentContainerStyle={styles.productList}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <Text style={styles.title}>Produk lainnya</Text>
        <View style={styles.productRow}>
          <FlatList
            data={dummyData}
            keyExtractor={(item) => item.id}
            numColumns={2}
            renderItem={({ item }) => <ProductCard product={item} />}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
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
    fontFamily: SegoeRegular,
  },
  titleRow: {
    marginBottom: SIZES.medium,
  },
  productRow: {
    marginVertical: SIZES.medium,
    backgroundColor: COLORS.offwhite,
  },
});
