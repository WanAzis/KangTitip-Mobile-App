
import { COLORS, SIZES } from '@/constants';
import { FontAwesome } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useSegments } from 'expo-router';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import { doc, firestore, getDoc } from '@/firebaseConfig';

// Definisikan tipe untuk produk
interface Product {
  id: string,
  nama: string,
  asalNegara: string,
  harga: number,
  deadline: string,
  shippingDate: string,
  toko: string,
  kategori: string,
  berat: string,
  deskripsi: string,
  foto: string,
}

const ProductDetails = () => {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetails = async () => {
    // Pastikan productId ada dan merupakan string
    if (typeof id !== 'string') {
      console.error('Invalid productId');
      setLoading(false);
      return;
    }

    try {
      const docRef = doc(firestore, "Product", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const productData = docSnap.data();
        const fileId = productData.foto.split('/d/')[1].split('/')[0];
        const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;

        // Set product dengan tipe Product
        setProduct({
          id: id,
          nama: productData.nama,
          asalNegara: productData.asalNegara,
          harga: productData.harga,
          deadline: productData.deadline,
          shippingDate: productData.shippingDate,
          toko: productData.toko,
          kategori: productData.kategori,
          berat: productData.berat,
          deskripsi: productData.deskripsi,
          foto: imageUrl,
        });
      } else {
        console.error('No such document!');
      }
    } catch (error) {
      console.error('Error fetching product details: ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
        <Text>Product id : {id} </Text>
        <Text>Product data : {product} </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Image source={{ uri: product.foto }} style={styles.image} resizeMode="cover" />
        <View style={styles.infoContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.price}>Rp {product.harga.toLocaleString('id-ID')}</Text>
              <Text style={styles.name}>{product.nama}</Text>
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
          <Text style={styles.jastiperInfo}>{product.toko}</Text>
          <View style={styles.divider} />
          <View style={styles.details}>
            <Text style={styles.title}>Detail Produk</Text>
            <Text style={styles.detailText}>Kategori: {product.kategori}</Text>
            <Text style={styles.detailText}>Berat: {product.berat}</Text>
          </View>
          <Text style={styles.title}>Deskripsi Produk</Text>
          <Text style={styles.description}>{product.deskripsi}</Text>
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
