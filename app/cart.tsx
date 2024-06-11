import { StatusBar } from 'expo-status-bar';
import { Platform, ScrollView, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/constants/Themed';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import { router } from 'expo-router';
import { auth, collection, doc, firestore, getDocs } from '@/firebaseConfig';
import { setDoc } from '@firebase/firestore';


interface ProductCartProps {
  product: any;
  onAmountChange: (productId: string, newAmount: number) => void;
  onToggleSelect: (productId: string, isSelected: boolean) => void;
}

export default function CartScreen() {
  // const products = [1, 2, 3, 4, 5];
  const [isChecked, setIsChecked] = useState(false);

  const toggleCheck = () => setIsChecked(!isChecked);

  const [cartProducts, setCartProducts] = useState([]);
  // const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleAmountChange = (productId, newAmount) => {
    setCartProducts(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, amount: newAmount } : item
      )
    );
  };

  const handleToggleSelect = (productId, isSelected) => {
    setCartProducts(prevItems =>
      prevItems.map(item =>
        item.id === productId ? { ...item, selected: isSelected } : item
      )
    );
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [cartProducts]);

  const calculateTotalPrice = () => {
    const total = cartProducts.reduce((acc, item) => {
      if (item.selected) {
        return acc + (item.harga * item.amount);
      }
      return acc;
    }, 0);
    setTotalPrice(total);
  };

  useEffect(() => {
    const fetchCartProducts = async () => {
      const user = auth.currentUser;

      if (user) {
        const userId = user.uid;
        const cartProductsRef = collection(firestore, userId, 'cart', 'products');
        try {
          const cartProductsSnapshot = await getDocs(cartProductsRef);
          // const productList = [];

          const productsList = cartProductsSnapshot.docs.map(doc => ({
            id: doc.id,
            imageUrl: doc.data().foto,
            ...doc.data()
          }));

          setCartProducts(productsList);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching saved products: ", error);
        }
      }
    };

    fetchCartProducts();
  }, []);

  const ProductCart: React.FC<ProductCartProps> = ({ product, onAmountChange, onToggleSelect }) => {
    const [amount, setAmount] = useState(product.amount);
    const [isChecked, setIsChecked] = useState(product.selected);

    // useEffect(() => {
    //   onAmountChange(product.id, amount);
    // }, [amount]);

    // useEffect(() => {
    //   onToggleSelect(product.id, isChecked);
    // }, [isChecked]);
  
    const increaseAmount = () => {
      const newAmount = amount + 1;
      setAmount(prevAmount => prevAmount + 1);
      onAmountChange(product.id, amount + 1);

      updateProductAmountInDatabase(product.id, newAmount);
    };
    
    const decreaseAmount = () => {
      if (amount > 1) {
        const newAmount = amount + 1;
        setAmount(prevAmount => prevAmount - 1);
        onAmountChange(product.id, amount - 1);

        updateProductAmountInDatabase(product.id, newAmount);
      }
    };

    const updateProductAmountInDatabase = async (productId, newAmount) => {
      const user = auth.currentUser;
  
      if (user) {
        const userId = user.uid;
        const productDocRef = doc(firestore, userId, 'productSaved', 'products', productId);
        try {
          // Simpan produk jika belum disimpan
          await setDoc(productDocRef, {
            // productId: product.id,
            amount: newAmount
          });
          // setIsSaved(true);
          // Alert.alert('Produk berhasil disimpan');
        } catch (error) {
          console.error("Error saving or deleting product: ", error);
          // Alert.alert('Terjadi kesalahan saat menyimpan produk');
        }
      } else {
        // Alert.alert('Anda harus login untuk menyimpan produk');
      }
    };
    
    const toggleCheck = () => {
      const newCheckedState = !isChecked;
      setIsChecked(newCheckedState);
      onToggleSelect(product.id, newCheckedState);
    };
  
    return (
      <View style={[styles.container, {marginBottom: 20, padding: 20, rowGap: 10}]}>
        {/* title and location */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'}}>
          <Text style={{fontWeight: 'bold', fontSize: 14}}>{product.toko}</Text>
          {/* location */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="location-outline" size={20} color="#1556A4" />
            <Text style={{fontWeight: 'regular', fontSize: 12, color: '#0047A0'}}>{product.asalNegara}</Text>
          </View>
        </View>
        {/* separator */}
        <View style={styles.separator} />
        {/* Product */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch',justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
          {/* checklist box */}
          <TouchableOpacity onPress={toggleCheck}>
            <MaterialCommunityIcons
              name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"} 
              size={24} 
              color="#1556A4" 
            />
          </TouchableOpacity>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', columnGap: 10}}>
          {/* Image */}
          <Image source={{ uri: product.imageUrl }} style={{width: 100, height: 100}}/>
          {/* description */}
            <View style={{flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5, maxWidth: 125}}>
              <Text>{product.nama}</Text>
              <Text>Rp {product.harga.toLocaleString('id-ID')}</Text>
            </View>
          </View>
          {/* trash button */}
          <TouchableOpacity style={{alignSelf: 'flex-end'}}>
            <Ionicons name="trash-outline" size={21} color="#616161" />
          </TouchableOpacity>
          {/* add or minus amount */}
          <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', columnGap: 8}}>
            <TouchableOpacity 
              onPress={decreaseAmount} 
              style={{paddingHorizontal: 6, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: '#DEDEDE'}}
            >
              <Text style={{fontWeight: 600}}>-</Text>
            </TouchableOpacity>
              <Text>{amount}</Text>
            <TouchableOpacity 
              onPress={increaseAmount} 
              style={{paddingHorizontal: 5, borderTopRightRadius: 8, borderBottomRightRadius: 8, backgroundColor: '#DEDEDE'}}
            >
              <Text>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* separator */}
        <View style={styles.separator} />
        {/* batas pemesanan */}
        <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
            <MaterialCommunityIcons name="clock-outline" size={18} color="#0047A0" />
            <Text style={{fontWeight: 'regular', fontSize: 12}}>Batas Pemesanan</Text>
          </View>
          <Text style={{fontWeight: 'regular', fontSize: 12}}>{product.deadline}</Text>
        </View>
      </View>
    );
  }

  const renderCartItem = ({ item }) => (
    <ProductCart
      product={item}
      onAmountChange={handleAmountChange}
      onToggleSelect={handleToggleSelect}
    />
  );
  
  return (
    <View style={[styles.backdrop, {}]}>
        <ScrollView 
          style={{paddingTop: 20}}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={cartProducts}
            renderItem={renderCartItem}
            keyExtractor={item => item.id}
          />
          {/* <FlatList
            data={cartProducts}
            keyExtractor={(item) => item.id}
            // numColumns={2}
            renderItem={({ item }) => <ProductCart key={item.id} product={item} />}
            showsVerticalScrollIndicator={false}
          ></FlatList> */}
          <View style={{backgroundColor: 'transparent', height: 80}}></View>
        </ScrollView>
        {/* Final Cart and Titip button */}
        <View style={{
          position: 'absolute', 
          bottom: 0, 
          height: 60, 
          width: '100%', 
          backgroundColor: 'white', 
          flexDirection: 'row', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          paddingHorizontal: 20,
          borderTopWidth: 3,
          borderColor: 'rgba(0, 0, 0, 0.1)',
        }}>
          {/* checklist box */}
          <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
            <TouchableOpacity onPress={toggleCheck}>
              <MaterialCommunityIcons
                name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"} 
                size={24} 
                color="#1556A4" 
              />
            </TouchableOpacity>
            <Text>Semua</Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', columnGap: 10}}>
            {/* Total bre */}
            <View style={{flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end'}}>
              <Text style={{textAlign: 'right'}}>Total</Text>
              <Text style={{fontWeight: 'bold', textAlign: 'right', fontSize: 12}}>Rp {totalPrice.toLocaleString('id-ID')}</Text>
            </View>
            {/* Titip Button */}
            <TouchableOpacity
              style={{
                backgroundColor: '#4A8FE1',
                paddingHorizontal: 30,
                paddingVertical: 10,
                borderRadius: 10,
              }}
              onPress={() => router.push('/checkout')}
            >
              <Text style={{fontWeight: 'bold', color: 'white'}}>Titip</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

// const ProductCart: React.FC<ProductCartProps> = ({ product }) => {
//   const [amount, setAmount] = useState(1);
//   const [isChecked, setIsChecked] = useState(false);

//   const increaseAmount = () => setAmount(prevAmount => prevAmount + 1);
//   const decreaseAmount = () => setAmount(prevAmount => prevAmount > 0 ? prevAmount - 1 : 0);
//   const toggleCheck = () => setIsChecked(!isChecked);

//   return (
//     <View style={[styles.container, {marginBottom: 20, padding: 20, rowGap: 10}]}>
//       {/* title and location */}
//       <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'stretch'}}>
//         <Text style={{fontWeight: 'bold', fontSize: 14}}>{product.toko}</Text>
//         {/* location */}
//         <View style={{flexDirection: 'row', alignItems: 'center'}}>
//           <Ionicons name="location-outline" size={20} color="#1556A4" />
//           <Text style={{fontWeight: 'regular', fontSize: 12, color: '#0047A0'}}>{product.asalNegara}</Text>
//         </View>
//       </View>
//       {/* separator */}
//       <View style={styles.separator} />
//       {/* Product */}
//       <View style={{flexDirection: 'row', alignSelf: 'stretch',justifyContent: 'space-between', alignItems: 'center', marginBottom: 10}}>
//         {/* checklist box */}
//         <TouchableOpacity onPress={toggleCheck}>
//           <MaterialCommunityIcons
//             name={isChecked ? "checkbox-marked" : "checkbox-blank-outline"} 
//             size={24} 
//             color="#1556A4" 
//           />
//         </TouchableOpacity>
//         <View style={{flexDirection: 'row', justifyContent: 'space-between', columnGap: 10}}>
//         {/* Image */}
//         <Image source={{ uri: product.imageUrl }} style={{width: 100, height: 100}}/>
//         {/* description */}
//           <View style={{flexDirection: 'column', justifyContent: 'space-between', marginLeft: 5, maxWidth: 125}}>
//             <Text>{product.nama}</Text>
//             <Text>Rp {product.harga.toLocaleString('id-ID')}</Text>
//           </View>
//         </View>
//         {/* trash button */}
//         <TouchableOpacity style={{alignSelf: 'flex-end'}}>
//           <Ionicons name="trash-outline" size={21} color="#616161" />
//         </TouchableOpacity>
//         {/* add or minus amount */}
//         <View style={{ flexDirection: 'row', alignSelf: 'flex-end', alignItems: 'center', columnGap: 8}}>
//           <TouchableOpacity 
//             onPress={decreaseAmount} 
//             style={{paddingHorizontal: 6, borderTopLeftRadius: 8, borderBottomLeftRadius: 8, backgroundColor: '#DEDEDE'}}
//           >
//             <Text style={{fontWeight: 600}}>-</Text>
//           </TouchableOpacity>
//             <Text>{amount}</Text>
//           <TouchableOpacity 
//             onPress={increaseAmount} 
//             style={{paddingHorizontal: 5, borderTopRightRadius: 8, borderBottomRightRadius: 8, backgroundColor: '#DEDEDE'}}
//           >
//             <Text>+</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//       {/* separator */}
//       <View style={styles.separator} />
//       {/* batas pemesanan */}
//       <View style={{flexDirection: 'row', alignSelf: 'stretch', alignItems: 'center', justifyContent: 'space-between'}}>
//         <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
//           <MaterialCommunityIcons name="clock-outline" size={18} color="#0047A0" />
//           <Text style={{fontWeight: 'regular', fontSize: 12}}>Batas Pemesanan</Text>
//         </View>
//         <Text style={{fontWeight: 'regular', fontSize: 12}}>{product.deadline}</Text>
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
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
    backgroundColor: '#A9A9A9',
    height: 1,
    width: '100%',
  },
});
