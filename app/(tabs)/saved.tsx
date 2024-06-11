import { FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import ProductCard from '@/components/ProductCard';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { auth, collection, firestore, getDocs } from '@/firebaseConfig';


export default function SavedScreen() {
  const [savedProducts, setSavedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSavedProducts = async () => {
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;
        const savedProductsRef = collection(firestore, userId, 'productSaved', 'products');
        try {
          const savedProductsSnapshot = await getDocs(savedProductsRef);
          // const productList = [];

          const productsList = savedProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            imageUrl: doc.data().foto,
            ...doc.data()
          }));
          // savedProductsSnapshot.forEach((doc) => {
          //   const productData = doc.data();
          //   // Extract image file ID from Google Drive link
          //   const fileId = productData.foto.split('/d/')[1].split('/')[0];
          //   const imageUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
    
          //   productList.push({
          //     ...productData,
          //     id: doc.id,
          //     imageUrl, // Add converted image URL to product data
          //   });
          // });

          setSavedProducts(productsList);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching saved products: ", error);
        }
      }
    };

    fetchSavedProducts();
  }, []);
  
  return (
    <View style={styles.backdrop}>
      {/* Ttile + filter and sort */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}>
        <Text style={{ color: "#004859", fontWeight: "bold", fontSize: 14 }}>
          XX Produk
        </Text>
        <View
          style={{
            flexDirection: "row",
            columnGap: 10,
            backgroundColor: "transparent",
          }}>
          <TouchableOpacity
            style={{
              aspectRatio: 1,
              borderRadius: 1000,
              backgroundColor: "#D9D9D9",
              padding: 5,
            }}>
            <Ionicons name="filter" size={14} color="#616161" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              aspectRatio: 1,
              borderRadius: 1000,
              backgroundColor: "#D9D9D9",
              padding: 5,
            }}>
            <AntDesign name="filter" size={14} color="#616161" />
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={savedProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => <ProductCard style={{marginHorizontal: 5}} product={item} />}
        showsVerticalScrollIndicator={false}
      >
      </FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
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
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
