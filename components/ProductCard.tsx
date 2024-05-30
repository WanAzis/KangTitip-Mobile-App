import { COLORS, SIZES } from '@/constants';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity } from 'react-native';

interface Product {
  name: string;
  price: string;
  deadline: string;
  shippingDate: string;
  image: any;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/productDetails`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.productCard}>
      <View style={styles.imageWrapper}>
        <Image
            source={product.image}
            style={styles.image}
          />
      </View>
      <View style={styles.productDetail}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>Rp{product.price}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>{product.deadline}</Text>
        <Text style={styles.date}>{product.shippingDate}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: 170,
    height: 250,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.offwhite,
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    marginRight: SIZES.medium,
  },
  imageWrapper: {
    flex: 1,
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
    // alignSelf: 'center',
    // fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: SIZES.medium,
    marginBottom: 10,
    fontWeight: 'bold',
    color: COLORS.ligthGreen,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 10,
  },
});

export default ProductCard;
