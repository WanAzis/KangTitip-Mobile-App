import { COLORS, SIZES } from '@/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity, StyleProp } from 'react-native';

interface Product {
  id: string,
  nama: string,
  harga: number,
  deadline: string,
  shippingDate: string,
  toko: string,
  kategori: string,
  berat: string,
  deskripsi: string,
  image: any
}

interface ProductCardProps {
  product: Product;
  style: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, style }) => {
// const ProductCard = ({ product, style }) => {  
  const router = useRouter();

  const handlePress = () => {
    router.push(`/productDetails`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.productCard, style]}>
      <View style={styles.imageWrapper}>
        <Image
            source={product.image}
            style={styles.image}
          />
      </View>
      <View style={styles.productDetail}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.productName}>{product.nama}</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.productPrice}>{`Rp$${product.harga}`}</Text>
      </View>
      <View style={styles.dateContainer}>
        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
          <MaterialCommunityIcons name="clock-outline" color="#1FBCED" />
          <Text style={styles.date}>{product.deadline}</Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
          <MaterialCommunityIcons name="truck-outline" color="#1FBCED" />
          <Text style={styles.date}>{product.shippingDate}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

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
  },
  imageWrapper: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 1,
    // borderColor: '#ccc',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    aspectRatio: 1,
    borderRadius: SIZES.small,
    // marginBottom: 10,
  },
  productDetail: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: SIZES.medium,
    textAlign: 'center',
    // alignSelf: 'center',
    // fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: SIZES.medium,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.ligthGreen,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 8,
  },
});

export default ProductCard;
