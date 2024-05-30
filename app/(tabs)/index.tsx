import React from 'react';
import { View, Text } from '@/constants/Themed';
// import { SliderBox } from 'react-native-image-slider-box'
import styles from './index.style';
import { FlatList, Image, ScrollView } from 'react-native';
import ProductCard from '@/components/ProductCard';

// // Data dummy untuk produk
// // const products = Array.from({ length: 10 }, (_, index) => ({
// //   id: index.toString(),
// //   name: `Product ${index + 1}`,
// // }));

const dummyData = [
  {
    id: '1',
    name: 'TV Set',
    price: '50.000',
    deadline: '2024-06-15',
    shippingDate: '2024-06-20',
    image: require('../../assets/images/product-1.jpeg'),
  },
  {
    id: '2',
    name: 'Gelas Motif Bunga',
    price: '62.500',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-2.jpeg'),
  },
  {
    id: '3',
    name: 'Proyektor Modern',
    price: '350.000',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-3.jpeg'),
  },
  {
    id: '4',
    name: 'Oven/Microwave Standard',
    price: '735.000',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-4.jpeg'),
  },
  {
    id: '5',
    name: 'Sisir Rambut',
    price: '55.000',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-1.jpeg'),
  },
  {
    id: '6',
    name: 'Sapu Serba Guna',
    price: '33.333',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-2.jpeg'),
  },
  {
    id: '7',
    name: 'Stiker Spongebob',
    price: '27.000',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-3.jpeg'),
  },
  {
    id: '8',
    name: 'Kompor Listrik',
    price: '1.000.999',
    deadline: '2024-06-16',
    shippingDate: '2024-06-21',
    image: require('../../assets/images/product-4.jpeg'),
  },
  // Tambahkan data dummy lainnya...
];

export default function HomePage() {
  const slides = [
    '../../assets/images/product-1.jpeg',
    '../../assets/images/product-2.jpeg',
    '../../assets/images/product-3.jpeg',
    '../../assets/images/product-4.jpeg',
  ]
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      <View style={styles.sliderContainer}>
        {/* <SliderBox images={slides} */}
        <Image
          source={require('../../assets/images/cover.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.container1}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Jelajahi Dunia</Text>
        </View>
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
      <View style={styles.container1}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>Keliling Indonesia</Text>
        </View>
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
};
