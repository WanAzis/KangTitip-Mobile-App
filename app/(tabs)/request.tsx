import {
  Pressable,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Touchable,
  TouchableOpacity,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import ProductCard from "@/components/ProductCard";
import { Text, View } from "@/constants/Themed";
import React, { SetStateAction, useState, useEffect } from "react";
import { Link, router } from "expo-router";
import { COLORS, SIZES } from '@/constants';

// Data dummy untuk jastiper
// const jastiperData = [
//   {
//     name: 'Jastiper 1',
//     location: 'Indonesia',
//     deadline: 'XX/XX/XX',
//     deliveryTime: 'XX/XX/XX',
//   },

type Jastiper = {
  id: string;
  name: string;
  location: string;
  deadline: string;
  deliveryTime: string;
};

type JastiperProps = {
  jastiper: Jastiper;
};

const jastiperData = [
  {
    id: "1",
    name: "Super Jastip",
    location: "Malaysia",
    deadline: "12/12/2022",
    deliveryTime: "15/12/2022",
  },
  {
    id: "2",
    name: "Mang Titip",
    location: "Singapore",
    deadline: "20/12/2022",
    deliveryTime: "25/12/2022",
  },
  {
    id: "3",
    name: "Mengtitip",
    location: "Indonesia",
    deadline: "30/12/2022",
    deliveryTime: "05/01/2023",
  },
  {
    id: "4",
    name: "Barbar Shop",
    location: "Thailand",
    deadline: "10/01/2023",
    deliveryTime: "15/01/2023",
  },
  {
    id: "5",
    name: "Toko Toki",
    location: "Malaysia",
    deadline: "20/01/2023",
    deliveryTime: "25/01/2023",
  },
  {
    id: "6",
    name: "Kang Traveller",
    location: "Singapore",
    deadline: "30/01/2023",
    deliveryTime: "05/02/2023",
  },
  {
    id: "7",
    name: "Jastiper Mantap",
    location: "Indonesia",
    deadline: "10/02/2023",
    deliveryTime: "15/02/2023",
  },
  {
    id: "8",
    name: "Jastiper Koki",
    location: "Thailand",
    deadline: "20/02/2023",
    deliveryTime: "25/02/2023",
  },
];

// Data dummy untuk Negara
// const countryData = [
//   {
//     name: 'Indonesia',
//     flag: 'Flag',
//   },

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
    flag: "https://img.icons8.com/?size=100&id=mdqlbmCXtG0X&format=png&color=000000",
  },
  {
    id: "8",
    name: "Brunei",
    flag: "https://img.icons8.com/?size=100&id=j8AsAniVuzYv&format=png&color=000000",
  },
  {
    id: "9",
    name: "Cambodia",
    flag: "https://img.icons8.com/?size=100&id=2ui1n4CYeion&format=png&color=000000",
  },
  {
    id: "10",
    name: "Laos",
    flag: "https://img.icons8.com/?size=100&id=sJzP1l7fhIB5&format=png&color=000000",
  },
];

export default function RequestScreen() {
  const [activeTab, setActiveTab] = useState("Feed");

  const handleActiveTab = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Feed | Request-mu */}
      <View
        style={[
          {
            flexDirection: "row",
            height: 50,
            backgroundColor: "white",
          },
        ]}>
        <TouchableOpacity
          style={[styles.container, { padding: 10 }]}
          onPress={() => handleActiveTab("Feed")}>
          <Text style={activeTab === "Feed" ? { fontWeight: "bold" } : {}}>
            Feed
          </Text>
        </TouchableOpacity>
        {/* add separator line */}
        <View
          style={{
            width: 1,
            height: "50%",
            alignSelf: "center",
            backgroundColor: "#D9D9D9",
          }}
        />
        <TouchableOpacity
          style={[styles.container, { padding: 10 }]}
          onPress={() => handleActiveTab("Request-mu")}>
          <Text
            style={activeTab === "Request-mu" ? { fontWeight: "bold" } : {}}>
            Request-mu
          </Text>
        </TouchableOpacity>
      </View>
      {/* Conditional rendering of Feed and Request-mu components */}
      {activeTab === "Feed" ? <Feed /> : <RequestMu />}
    </>
  );
}

// Components

// Request-mu component
const RequestMu = () => {
  const [activeButton, setActiveButton] = useState("Diajukan");
  const handleFilterRequest = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName);
  };
  
  const activeStyle = { backgroundColor: "#3A76BD", color: "white" };
  const activeTextStyle = { color: "white" };

  return (
    <View
      style={[
        styles.backdrop,
        {
          paddingTop: 20,
          paddingHorizontal: 20,
          rowGap: 20,
          backgroundColor: "#F0F0F0",
        },
      ]}>
      {/* title, filter, and sort */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}>
        <Text style={{ color: "#004859", fontWeight: "bold", fontSize: 16 }}>
          Produk yang kamu request
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
            <Ionicons name="filter" size={16} color="#616161" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              aspectRatio: 1,
              borderRadius: 1000,
              backgroundColor: "#D9D9D9",
              padding: 5,
            }}>
            <AntDesign name="filter" size={16} color="#616161" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Status Product Request */}
      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
          backgroundColor: "transparent",
        }}>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
            },
            activeButton === "Diajukan" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Diajukan")}>
          <Text
            style={[
              { color: "#8C8C8C" },
              activeButton === "Diajukan" ? activeTextStyle : {},
            ]}>
            Diajukan
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
            },
            activeButton === "Diterima" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Diterima")}>
          <Text
            style={[
              { color: "#8C8C8C" },
              activeButton === "Diterima" ? activeTextStyle : {},
            ]}>
            Diterima
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: "#DFDFDF",
              borderRadius: 25,
              paddingVertical: 5,
              paddingHorizontal: 20,
            },
            activeButton === "Ditolak" ? activeStyle : {},
          ]}
          onPress={() => handleFilterRequest("Ditolak")}>
          <Text
            style={[
              { color: "#8C8C8C" },
              activeButton === "Ditolak" ? activeTextStyle : {},
            ]}>
            Ditolak
          </Text>
        </TouchableOpacity>
      </View>
      {/* Requested Products */}
      <TouchableOpacity style={styles.productCard}>
        {/* logo negara */}
        <View style={{position: 'absolute', backgroundColor: 'transparent', right: 5, top: 5, zIndex: 50}}>
          <Image
            source={{ uri: 'https://img.icons8.com/?size=100&id=IWVDTvmUNsig&format=png&color=000000'}}
            style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 10 }}
          />
        </View>
        <View style={styles.imageWrapper}>
          <Image
              source={require('../../assets/images/placeholder.png')}
              style={styles.image}
            />
        </View>
        {/* kategori produk */}
        <View style={styles.productDetail}>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.productName}>Soft MilkBun Thailand</Text>
          <Text numberOfLines={1} ellipsizeMode='tail' style={styles.productPrice}>Rp150.000</Text>
        </View>
        {/* <View style={styles.dateContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
            <MaterialCommunityIcons name="clock-outline" color="#1FBCED" />
            <Text style={styles.date}>{product.deadline}</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
            <MaterialCommunityIcons name="truck-outline" color="#1FBCED" />
            <Text style={styles.date}>{product.shippingDate}</Text>
          </View>
        </View> */}
      </TouchableOpacity>
    </View>
  );
};

// Feed component
const Feed = () => {
  return (
    <View
      style={[
        styles.backdrop,
        {
          paddingTop: 20,
          paddingHorizontal: 20,
          rowGap: 20,
          backgroundColor: "#F0F0F0",
        },
      ]}>
      {/* title, filter, and sort */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "transparent",
        }}>
        <Text style={{ color: "#004859", fontWeight: "bold", fontSize: 20 }}>
          Request ke Jastiper
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
            <Ionicons name="filter" size={16} color="#616161" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              aspectRatio: 1,
              borderRadius: 1000,
              backgroundColor: "#D9D9D9",
              padding: 5,
            }}>
            <AntDesign name="filter" size={16} color="#616161" />
          </TouchableOpacity>
        </View>
      </View>
      {/* filter location (national flags*/}
      <FlatList
        data={countryData}
        renderItem={({ item }) => <Flag country={item} />}
        keyExtractor={(item) => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        data={jastiperData}
        renderItem={({ item }) => <Jastiper jastiper={item} />}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

// Flag component
const Flag: React.FC<CountryProps> = ({ country }) => {
  const [activeFlag, setActiveFlag] = useState<string | null>(null);

  const handleFlagPicker = (name: string | null) => {
    setActiveFlag((prev) => (prev === name ? null : name));
  };
  
  const activeStyle = { backgroundColor: "#3A76BD", color: "white" };
  const activeTextStyle = { color: "white" };

  return (
    <TouchableOpacity
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
        activeFlag === country.name ? activeStyle : {},
      ]}
      onPress={() => handleFlagPicker(country.name)}
      >
      <Image
        source={{ uri: country.flag }}
        style={{ width: 20, height: 20, borderWidth: 2, borderRadius: 10 }}
      />
      <Text
        style={[{
          fontSize: 11,
          textAlign: "center",
          textAlignVertical: "center",
        },
        activeFlag === country.name ? activeTextStyle : {},
        ]}
      >
        {country.name}
      </Text>
    </TouchableOpacity>
  );
};

// Jastiper component
const Jastiper: React.FC<JastiperProps> = ({ jastiper }) => {
  const moveToPage = (page: string) => {
    // Handle button press
    router.push(page);
  };

  const colors = [
    "#6A77ED", "#366FB3", "#49C0DC", "#35B02A",
    "#6A77ED", "#366FB3", "#49C0DC", "#35B02A",
    "#6A77ED", "#366FB3", "#49C0DC", "#35B02A",
    "#6A77ED", "#366FB3", "#49C0DC", "#49C0DC",
  ];

  const RandomColorView = () => {
    const [backgroundColor, setBackgroundColor] = useState("");

    useEffect(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBackgroundColor(randomColor);
    }, []);

    return (
      <View
        style={{
          borderRadius: 100,
          borderWidth: 3,
          borderColor: "#1561BC",
          backgroundColor,
          padding: 20,
        }}>
        <FontAwesome5 name="store-alt" size={24} color="white" />
      </View>
    );
  };

  return (
    <View
      style={[
        styles.container,
        {
          marginBottom: 20,
          marginHorizontal: 10,
          borderRadius: 20,
          padding: 10,
          rowGap: 10,
        },
      ]}>
      {/* profile image jastiper */}
      <RandomColorView />
      {/* nama jastiper */}
      <View style={styles.container}>
        <Text style={{ fontWeight: "bold" }}>{jastiper.name}</Text>
        <Text>{jastiper.location}</Text>
      </View>
      {/* deadline + delivery time */}
      <View style={{ flexDirection: "row", columnGap: 5 }}>
        {/* deadline */}
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
          <MaterialCommunityIcons name="clock-outline" color="#1FBCED" />
          <Text style={{ fontSize: 10 }}>{jastiper.deadline}</Text>
        </View>
        {/* delivery time */}
        <View
          style={{ flexDirection: "row", alignItems: "center", columnGap: 5 }}>
          <MaterialCommunityIcons name="truck-outline" color="#1FBCED" />
          <Text style={{ fontSize: 10 }}>{jastiper.deliveryTime}</Text>
        </View>
      </View>
      {/* titip and chat jastiper */}
      <View
        style={{
          flexDirection: "row",
          columnGap: 10,
          alignItems: "center",
          alignSelf: "center",
        }}>
        <MaterialIcons name="chat" size={36} color="#4A8FE1" />
        <TouchableOpacity
          style={{ flex: 1, borderRadius: 15, backgroundColor: "#4A8FE1" }}
          onPress={() => moveToPage("/requestForm")}>
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              color: "white",
              padding: 10,
            }}>
            Titip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  productCard: {
    flex: 1,
    maxWidth: 170,
    maxHeight: 240,
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
  },
  image: {
    width: 150,
    height: 150,
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
    marginBottom: 10,
  },
  productPrice: {
    fontSize: SIZES.medium,
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
