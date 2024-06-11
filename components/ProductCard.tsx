import { COLORS, SIZES } from '@/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, TouchableOpacity, StyleProp } from 'react-native';


interface ProductCardProps {
  product: any;
  style: any;
}

// Function to format the price with thousand separator
const formatPrice = (price: any) => {
  // return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return price.toLocaleString('id-ID');
};

const ProductCard: React.FC<ProductCardProps> = ({ product, style }) => {
// const ProductCard = ({ product, style }) => {  
  const router = useRouter();

  const handlePress = () => {
    router.push(`/productDetails/${product.id}`);
  };

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.productCard, style]}>
      {/* logo negara */}
      <View style={{position: 'absolute', right: 5, top: 5, zIndex: 50}}>
        <Image
          source={{ uri: 'https://img.icons8.com/?size=100&id=nMjaQrfPvnDz&format=png&color=000000'}}
          style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 10 }}
        />
      </View>
      <View style={styles.imageWrapper}>
        <Image
            source={{ uri: product.imageUrl }}
            style={styles.image}
          />
      </View>
      <View style={styles.productDetail}>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.productName}>{product.nama}</Text>
        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.productPrice}>Rp {formatPrice(product.harga)}</Text>
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
