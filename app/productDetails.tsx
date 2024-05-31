
import { COLORS, SIZES } from '@/constants';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';

const ProductDetails = () => {
  // Data statik produk
  const product = {
    image: require('../assets/images/product-1.jpeg'), // Ganti dengan path gambar yang sesuai
    price: '350.000',
    name: 'Proyektor Modern',
    deadline: '01/06/2024',
    shippingDate: '05/06/2024',
    jastiperInfo: 'Informasi Jastiper',
    category: 'Kategori Produk',
    weight: '500g',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={product.image} style={styles.image} resizeMode="cover" />
        <View style={styles.infoContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.price}>Rp{product.price}</Text>
              <Text style={styles.name}>{product.name}</Text>
            </View>
            <Pressable>
              <FontAwesome size={30} style={{ marginBottom: -3 }} name='bookmark-o' color={COLORS.primary}/>
            </Pressable>
          </View>
          <View style={styles.divider} />
          <View style={styles.dates}>
            <View style={styles.dateRow}>
              <FontAwesome size={28} style={{ marginBottom: -3 }} name='clock-o' color={COLORS.primary}/>
              <View style={{marginLeft:SIZES.small}}>
                <Text style={styles.dateText}>Batas Pemesanan:</Text>
                <Text style={styles.dateInfo}>{product.deadline}</Text>
              </View>
            </View>
            <View style={styles.dateRow}>
            <FontAwesome size={28} style={{ marginBottom: -3 }} name='calendar' color={COLORS.primary}/>
              <View style={{marginLeft:SIZES.small}}>
              <Text style={styles.dateText}>Produk Dikirim:</Text>
              <Text style={styles.dateInfo}>{product.shippingDate}</Text>
              </View>
            </View>
          </View>
          <View style={styles.divider} />
          <Text style={styles.jastiperInfo}>{product.jastiperInfo}</Text>
          <View style={styles.divider} />
          <View style={styles.details}>
            <Text style={styles.title}>Detail Produk</Text>
            <Text style={styles.detailText}>Kategori: {product.category}</Text>
            <Text style={styles.detailText}>Berat: {product.weight}</Text>
          </View>
          <Text style={styles.title}>Deskripsi Produk</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable style={[styles.button, styles.cartButton]}>
          <Text style={[styles.buttonText, { color: COLORS.primary }]}>Add Keranjang</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.titipButton]}>
          <Text style={[styles.buttonText, { color: COLORS.white }]}>Titip</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0',
  },
  scrollContent: {
    paddingBottom: 100,
  },
  image: {
    width: '100%',
    height: 400,
  },
  infoContainer: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: SIZES.xLarge,
    fontWeight: 'bold',
    color: COLORS.green,
  },
  name: {
    fontSize: SIZES.large,
    marginVertical: 5,
  },
  saveIcon: {
    fontSize: 24,
  },
  divider: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  dates: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateText: {
    fontSize: SIZES.small,
  },
  dateInfo: {
    fontSize: SIZES.medium,
    fontWeight: '800'
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  jastiperInfo: {
    fontSize: SIZES.large,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  title: {
    fontSize: SIZES.large,
    fontWeight: '600',
    marginBottom: SIZES.small,
  },
  details: {
    marginVertical: 10,
    marginBottom: SIZES.medium,
  },
  detailText: {
    fontSize: 16,
    // marginBottom: SIZES.medium,
  },
  description: {
    fontSize: 16,
    // marginVertical: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
  },
  button: {
    flex: 1,
    padding: 15,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  cartButton: {
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  titipButton: {
    backgroundColor: COLORS.primary,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProductDetails;
