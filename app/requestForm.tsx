import { Pressable, StyleSheet, ScrollView, FlatList, Image, TextInput} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons, FontAwesome5, Ionicons, AntDesign } from '@expo/vector-icons';
import { Text, View } from '@/components/Themed';
import { Picker } from '@react-native-picker/picker';
import { SetStateAction, useState } from 'react';
import { Link, router } from 'expo-router';

export default function RequestFormScreen() {
    const [selectedCategory, setSelectedCategory] = useState();

    const moveToPage = (page: string) => {
        // Handle button press
        router.replace(page);
    };

    return (
        <View style={[styles.backdrop, {paddingTop: 20, paddingHorizontal: 20, backgroundColor: '#F0F0F0'}]}>
            {/* Profile Jastiper, tombol ganti */}
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'transparent'}}>
                {/* profile Jastiper */}
                <View style={{flexDirection: 'row', backgroundColor: 'transparent', columnGap: 10}}>
                    {/* profile image jastiper */}
                    <View style={{borderRadius: 100, borderWidth: 3, borderColor: '#1561BC',backgroundColor: '#6A77ED', padding: 10}}>
                        <FontAwesome5 name="store-alt" size={18} color="white"/>
                    </View>
                    {/* nama jastiper */}
                    <View style={{backgroundColor: 'transparent'}}>
                        <Text style={{fontSize: 10}}>Request ke Jastiper</Text>
                        <Text style={{fontSize: 24, fontWeight: 'bold'}}>Mang Titip</Text>
                    </View>
                </View>
                {/* tombol ganti */}
                <Pressable style={{justifyContent: 'center', backgroundColor: '#4A8FE1', borderRadius: 10, paddingVertical: 5, paddingHorizontal: 25}}>
                    <Text style={{fontWeight: 'bold', color: 'white'}}>Ganti</Text>
                </Pressable>
            </View>

            {/* Form Request */}
            <View style={{flex: 8, rowGap: 10, paddingTop: 20, justifyContent: 'flex-start', alignItems: 'stretch', backgroundColor: 'transparent'}}>
                {/* Nama */}
                <Text>Nama Produk</Text>
                <TextInput
                    onChangeText={(text) => console.log(text)}
                    placeholder="Tuliskan nama produk..."
                    secureTextEntry={false}
                    keyboardType="default"
                    autoFocus={true}
                    onSubmitEditing={() => console.log('Submit button pressed')}
                    style={{ height: 40, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10}}
                />
                {/* Tawaran Harga */}
                <Text>Tawaran Harga</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'transparent'}}>
                    <TextInput
                        onChangeText={(text) => console.log(text)}
                        placeholder="Terendah"
                        secureTextEntry={false}
                        keyboardType="default"
                        autoFocus={true}
                        onSubmitEditing={() => console.log('Submit button pressed')}
                        style={{ height: 40, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, width: '48%'}}
                    />
                    <TextInput
                        onChangeText={(text) => console.log(text)}
                        placeholder="Tertinggi"
                        secureTextEntry={false}
                        keyboardType="default"
                        autoFocus={true}
                        onSubmitEditing={() => console.log('Submit button pressed')}
                        style={{ height: 40, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, width: '48%'}}
                    />
                </View>
                {/* Deskripsi Produk */}
                <Text>Deskripsi Produk</Text>
                <TextInput
                    onChangeText={(text) => console.log(text)}
                    placeholder="Tuliskan deskripsi produk..."
                    secureTextEntry={false}
                    keyboardType="default"
                    autoFocus={true}
                    onSubmitEditing={() => console.log('Submit button pressed')}
                    style={{ textAlignVertical: 'top', height: 100, backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingTop: 10}}
                />
                {/* Kategori Produk */}
                <Text>Kategori Produk</Text>
                {/* Dropdown of categories */}
                <View style={{backgroundColor: 'white', borderRadius: 10}}>
                    <Picker
                        selectedValue={selectedCategory}
                        onValueChange={(itemValue, itemIndex) => {
                            if (itemValue !== "placeholder") {
                                setSelectedCategory(itemValue)
                            }
                        }}
                        mode="dropdown"
                    >
                        <Picker.Item style={{color: 'grey', fontSize: 15}} label="Pilih Kategori Produk" value="placeholder"/>
                        <Picker.Item style={{color: 'black', fontSize: 15}} label="Pakaian" value="Pakaian" />
                        <Picker.Item style={{color: 'black', fontSize: 15}} label="Aksesoris" value="Aksesoris" />
                        <Picker.Item style={{color: 'black', fontSize: 15}} label="Makanan" value="Makanan" />
                        <Picker.Item style={{color: 'black', fontSize: 15}} label="Elektronik" value="Elektronik" />
                        <Picker.Item style={{color: 'black', fontSize: 15}} label="Sepatu" value="Sepatu" />
                    </Picker>
                </View>
                {/* Upload Foto */}
                <Text>Upload Foto</Text>
                <View style={{flexDirection: 'row', justifyContent: 'space-around', backgroundColor: 'transparent'}}>
                    <View style={{borderRadius: 10, aspectRatio: 1, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                        <MaterialIcons name="file-upload" size={50} color="#1561BC"/>
                    </View>
                    <View style={{borderRadius: 10, aspectRatio: 1, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
                    <View style={{borderRadius: 10, aspectRatio: 1, width: 100, justifyContent: 'center', alignItems: 'center'}}>
                    </View>
                </View>

                {/* Tombol Request */}
                <Pressable 
                    style={{alignSelf: 'center', backgroundColor: '#4A8FE1', borderRadius: 10, marginTop: 10, paddingVertical: 10, paddingHorizontal: 50}}
                    onPress={() => moveToPage("/request")}
                >
                    <Text style={{textAlign: 'center', fontWeight: 'bold', color: 'white'}}>Request</Text>
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