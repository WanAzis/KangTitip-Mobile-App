import { Pressable, StyleSheet, ScrollView, FlatList, Image} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { Text, View } from '@/constants/Themed';
import React, { SetStateAction, useState, useEffect } from 'react';
import { Link, router } from 'expo-router';

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
    id: '1',
    name: 'Jastiper John',
    location: 'Malaysia',
    deadline: '12/12/2022',
    deliveryTime: '15/12/2022',
  },
  {
    id: '2',
    name: 'Jastiper Jane',
    location: 'Singapore',
    deadline: '20/12/2022',
    deliveryTime: '25/12/2022',
  },
  {
    id: '3',
    name: 'Jastiper Bob',
    location: 'Indonesia',
    deadline: '30/12/2022',
    deliveryTime: '05/01/2023',
  },
  {
    id: '4',
    name: 'Jastiper Alice',
    location: 'Thailand',
    deadline: '10/01/2023',
    deliveryTime: '15/01/2023',
  },
  {
    id: '5',
    name: 'Jastiper Charlie',
    location: 'Malaysia',
    deadline: '20/01/2023',
    deliveryTime: '25/01/2023',
  },
  {
    id: '6',
    name: 'Jastiper Daisy',
    location: 'Singapore',
    deadline: '30/01/2023',
    deliveryTime: '05/02/2023',
  },
  {
    id: '7',
    name: 'Jastiper Ethan',
    location: 'Indonesia',
    deadline: '10/02/2023',
    deliveryTime: '15/02/2023',
  },
  {
    id: '8',
    name: 'Jastiper Fiona',
    location: 'Thailand',
    deadline: '20/02/2023',
    deliveryTime: '25/02/2023',
  },
  {
    id: '9',
    name: 'Jastiper George',
    location: 'Malaysia',
    deadline: '02/03/2023',
    deliveryTime: '07/03/2023',
  },
  {
    id: '10',
    name: 'Jastiper Hannah',
    location: 'Singapore',
    deadline: '12/03/2023',
    deliveryTime: '17/03/2023',
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
    id: '1',
    name: 'Indonesia',
    flag: 'https://img.icons8.com/?size=100&id=lph_obIfg-jT&format=png&color=000000',
  },
  {
    id: '2',
    name: 'Malaysia',
    flag: 'https://img.icons8.com/?size=100&id=nQtyhesxmxhM&format=png&color=000000',
  },
  {
    id: '3',
    name: 'Singapore',
    flag: 'https://img.icons8.com/?size=100&id=8H-8FMObN4vB&format=png&color=000000',
  },
  {
    id: '4',
    name: 'Thailand',
    flag: 'https://img.icons8.com/?size=100&id=IWVDTvmUNsig&format=png&color=000000',
  },
  {
    id: '5',
    name: 'Vietnam',
    flag: 'https://img.icons8.com/?size=100&id=60257&format=png&color=000000',
  },
  {
    id: '6',
    name: 'Philippines',
    flag: 'https://img.icons8.com/?size=100&id=15530&format=png&color=000000',
  },
  {
    id: '7',
    name: 'Myanmar',
    flag: 'https://img.icons8.com/?size=100&id=15530&format=png&color=000000',
  },
  {
    id: '8',
    name: 'Brunei',
    flag: 'https://img.icons8.com/?size=100&id=60221&format=png&color=000000',
  },
  {
    id: '9',
    name: 'Cambodia',
    flag: 'https://img.icons8.com/?size=100&id=j8AsAniVuzYv&format=png&color=000000',
  },
  {
    id: '10',
    name: 'Laos',
    flag: 'https://img.icons8.com/?size=100&id=2ui1n4CYeion&format=png&color=000000',
  },
]

export default function RequestScreen() {
  const [activeTab, setActiveTab] = useState('Feed');

  const handleActiveTab = (tabName: SetStateAction<string>) => {
    setActiveTab(tabName);
  };

  return (
    <>
      {/* Feed | Request-mu */}
      <View style={[{flexDirection: 'row', height: 50, backgroundColor: 'white', borderTopWidth: 1}]}>
        <Pressable style={[styles.container, {padding:10}]} onPress={() => handleActiveTab('Feed')}>
          <Text style={activeTab === 'Feed' ? {fontWeight: 'bold'} : {}} >Feed</Text>
        </Pressable>
        {/* add separator line */}
        <View style={{width: 1, height: '50%', alignSelf: 'center', backgroundColor: '#D9D9D9'}}/>
        <Pressable style={[styles.container, {padding:10}]} onPress={() => handleActiveTab('Request-mu')}>
          <Text style={activeTab === 'Request-mu' ? {fontWeight: 'bold'} : {}}>Request-mu</Text>
        </Pressable>
      </View>
      {/* Conditional rendering of Feed and Request-mu components */}
      {activeTab === 'Feed' ? <Feed /> : <RequestMu />}
    </>
  );
}


// Components

// Request-mu component
const RequestMu = () => {
  const [activeButton, setActiveButton] = useState('Diajukan');
  const handleFilterRequest = (buttonName: SetStateAction<string>) => {
    setActiveButton(buttonName);
  };
  const activeStyle = {backgroundColor: '#3A76BD', color: 'white'};

  return (
    <View style={[styles.backdrop, {paddingTop: 20, paddingHorizontal: 20, rowGap: 20, backgroundColor: '#F0F0F0'}]}>
      {/* title, filter, and sort */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent'}}>
        <Text style={{color: '#004859', fontWeight: 'bold', fontSize: 16}}>Produk yang kamu request</Text>
        <View style={{flexDirection: 'row', columnGap: 10, backgroundColor: 'transparent'}}>
          <Pressable style={{aspectRatio: 1, borderRadius: 1000, backgroundColor: '#D9D9D9', padding: 5}}>
            <Ionicons name="filter" size={16} color="#616161" />
          </Pressable>
          <Pressable style={{aspectRatio: 1, borderRadius: 1000, backgroundColor: '#D9D9D9', padding: 5,}}>
            <AntDesign name="filter" size={16} color="#616161" />
          </Pressable>
        </View>
      </View>
      {/* Status Product Request */}
      <View style={{flexDirection: 'row', columnGap: 10, backgroundColor: 'transparent'}}>
        <Pressable 
          style={[{backgroundColor: '#DFDFDF', borderRadius:25, paddingVertical: 5, paddingHorizontal: 20}, activeButton === 'Diajukan' ? activeStyle : {}]} 
          onPress={() => handleFilterRequest('Diajukan')}
        >
          <Text style={[{color: '#8C8C8C'}, activeButton === 'Diajukan' ? activeStyle : {}]}>Diajukan</Text>
        </Pressable>
        <Pressable 
          style={[{backgroundColor: '#DFDFDF', borderRadius:25, paddingVertical: 5, paddingHorizontal: 20}, activeButton === 'Diterima' ? activeStyle : {}]} 
          onPress={() => handleFilterRequest('Diterima')}
        >
          <Text style={[{color: '#8C8C8C'}, activeButton === 'Diterima' ? activeStyle : {}]}>Diterima</Text>
        </Pressable>
        <Pressable 
          style={[{backgroundColor: '#DFDFDF', borderRadius:25, paddingVertical: 5, paddingHorizontal: 20}, activeButton === 'Ditolak' ? activeStyle : {}]} 
          onPress={() => handleFilterRequest('Ditolak')}
        >
          <Text style={[{color: '#8C8C8C'}, activeButton === 'Ditolak' ? activeStyle : {}]}>Ditolak</Text>
        </Pressable>
      </View>
      {/* Requested Products */}
      <FlatList
        data={jastiperData} // Replace this with your actual data
        renderItem={({ item }) => <Jastiper jastiper={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
      />
    </View>
  );
}

// Feed component
const Feed = () => {
  return (
    <View style={[styles.backdrop, {paddingTop: 20, paddingHorizontal: 20, rowGap: 20, backgroundColor: '#F0F0F0'}]}>
      {/* title, filter, and sort */}
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent'}}>
        <Text style={{color: '#004859', fontWeight: 'bold', fontSize: 20}}>Request ke Jastiper</Text>
        <View style={{flexDirection: 'row', columnGap: 10, backgroundColor: 'transparent'}}>
          <Pressable style={{aspectRatio: 1, borderRadius: 1000, backgroundColor: '#D9D9D9', padding: 5}}>
            <Ionicons name="filter" size={16} color="#616161" />
          </Pressable>
          <Pressable style={{aspectRatio: 1, borderRadius: 1000, backgroundColor: '#D9D9D9', padding: 5,}}>
            <AntDesign name="filter" size={16} color="#616161" />
          </Pressable>
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
}

// Flag component
const Flag: React.FC<CountryProps> = ({country}) => {
  return(
    <View style={[{flexDirection: 'row', alignItems: 'center', columnGap: 5, marginLeft: 5, padding: 5, paddingBottom: 5, borderRadius: 25, minHeight: 25, backgroundColor: '#D9D9D9'}]}>
      <Image source={{uri: country.flag}} style={{width: 20, height: 20, borderWidth: 2, borderRadius: 10}}/>
      <Text style={{fontSize: 11, textAlign: 'center', textAlignVertical: 'center'}}>{country.name}</Text>
    </View>
  );
}

// Jastiper component
const Jastiper: React.FC<JastiperProps> = ({ jastiper }) => {
  const moveToPage = (page: string) => {
    // Handle button press
    router.replace(page);
  };

  const colors = [
    '#6A77ED', '#ED6A6A', '#6AED77', '#776AED', '#ED776A', 
    '#ED6AED', '#77ED6A', '#6AED77', '#ED776A', '#6A77ED', 
    '#77ED6A', '#ED6A77', '#776AED', '#ED776A', '#6AED77', 
    '#ED6AED', '#77ED6A', '#6AED77', '#ED776A', '#6A77ED'
  ];

  const RandomColorView = () => {
    const [backgroundColor, setBackgroundColor] = useState('');
  
    useEffect(() => {
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      setBackgroundColor(randomColor);
    }, []);

    return (
      <View style={{borderRadius: 100, borderWidth: 3, borderColor: '#1561BC', backgroundColor, padding: 20}}>
        <FontAwesome5 name="store-alt" size={24} color="white"/>
      </View>
    );
  
  };
  
  return(
  <View style={[styles.container, {marginBottom: 20, marginHorizontal: 10, borderRadius: 20, padding: 10, rowGap: 10}]}>
    {/* profile image jastiper */}
    <RandomColorView />
    {/* nama jastiper */}
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold'}}>{jastiper.name}</Text>
      <Text >{jastiper.location}</Text>
    </View>
    {/* deadline + delivery time */}
    <View style={{flexDirection: 'row', columnGap: 5}}>
      {/* deadline */}
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
        <MaterialCommunityIcons name="clock-outline" color='#1FBCED' />
        <Text style={{fontSize: 10}}>XX/XX/XX</Text>
      </View>
      {/* delivery time */}
      <View style={{flexDirection: 'row', alignItems: 'center', columnGap: 5}}>
        <MaterialCommunityIcons name="truck-outline" color='#1FBCED' />
        <Text style={{fontSize: 10}}>XX/XX/XX</Text>
      </View>
    </View>
    {/* titip and chat jastiper */}
    <View style={{flexDirection: 'row', columnGap: 10, alignItems: 'center', alignSelf: 'center'}}>
      <MaterialIcons name="chat" size={36} color="#4A8FE1" />
      <Pressable style={{flex: 1, borderRadius: 15, backgroundColor: '#4A8FE1'}} onPress={() => moveToPage('requestForm')}>
        <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white', padding: 10}}>Titip</Text>
      </Pressable>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
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
