import {ScrollView, StyleSheet, Clipboard, Alert, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Modal from 'react-native-modal';
import { Text, View } from '@/constants/Themed';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { router } from 'expo-router';

export default function Payment() {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isCopyModalVisible, setCopyModalVisible] = useState(false); 
    const paymentCode = '0123-4456-7899-1010';

    const copyToClipboard = () => {
        Clipboard.setString(paymentCode);
        setCopyModalVisible(true); 
        setTimeout(() => setCopyModalVisible(false), 500); 
    };
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    return(
        <View style={styles.backdrop}>
            {/* kode bayar */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, padding: 20}}>
                <View style={{flexDirection: 'column', maxWidth: '90%', rowGap: 5}}>
                    <Text style={{fontSize: 12}}>Kode Bayar</Text>
                    <Text style={{fontWeight: 'bold', color: '#3771B6', fontSize: 18}}>0123-4456-7899-1010</Text>
                    <Text style={{fontSize: 12}}>Lakukan pembayaran sesuai dengan instruksi berikut</Text>
                </View>
                <TouchableOpacity onPress={copyToClipboard}>
                    <MaterialIcons name="content-copy" size={24} color="#A9A9A9" />
                </TouchableOpacity>
                <Modal 
                    isVisible={isCopyModalVisible} 
                    backdropOpacity={0.25} 
                    onBackdropPress={() => setCopyModalVisible(false)}
                    animationIn={'fadeIn'}
                    animationOut={'fadeOut'}
                    style={{position: 'absolute', bottom: 50, left: 0, right: 0}}
                >
                    <LinearGradient 
                        colors={['#454545', '#000000']}
                        style={{justifyContent: 'center', alignItems: 'center', alignSelf: 'center', paddingVertical: 10, paddingHorizontal: 20, borderRadius: 25}}
                    >
                        <Text style={{textAlign: 'center', color: 'white'}}>Kode Bayar Tersalin</Text>
                    </LinearGradient>
                </Modal>
            </View>
            {/* tata cara bayar */}
            <View style={{flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'stretch', marginTop: 10, padding: 20, rowGap: 10}}>
                <Text style={{fontWeight: 'bold', fontSize: 16}}>Tata Cara Pembayaran</Text>
                <Text style={styles.description}>
                    Untuk menggunakan metode pembayaran transfer bank ABC pada ecommerce kami, ikuti langkah-langkah berikut:
                </Text>
                <Text style={styles.step}>1. Pilih produk yang ingin dibeli dan masukkan ke dalam keranjang belanja.</Text>
                <Text style={styles.step}>2. Pilih opsi pembayaran "Transfer Bank ABC" saat checkout.</Text>
                <Text style={styles.step}>3. Setelah mendapatkan detail pembayaran, lakukan transfer sesuai dengan jumlah yang tertera.</Text>
                <Text style={styles.step}>4. Sertakan nomor pesanan pada deskripsi transfer untuk memudahkan verifikasi.</Text>
                <Text style={styles.step}>5. Konfirmasikan pembayaran Anda melalui halaman konfirmasi pembayaran atau hubungi layanan pelanggan kami.</Text>
                <Text style={styles.step}>6. Pesanan Anda akan diproses setelah pembayaran dikonfirmasi.</Text>
            </View>
            {/* batal / sudah bayar */}
            <View style={{
                position: 'absolute', 
                bottom: 0, 
                height: 60, 
                zIndex: 10,
                width: '100%', 
                backgroundColor: 'white', 
                flexDirection: 'row', 
                justifyContent: 'center', 
                alignItems: 'center', 
                paddingHorizontal: 20,
                borderTopWidth: 3,
                columnGap: 20,
                borderColor: 'rgba(0, 0, 0, 0.1)',
            }}>
                {/* Button Batal */}
                <TouchableOpacity
                    style={styles.button1}
                    onPress={toggleModal} // Toggle modal visibility
                >
                    <Text style={styles.buttonText}>Batalkan</Text>
                </TouchableOpacity>
                {/* Modal Popup */}
                <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalText1}>Batalkan Pesanan?</Text>  
                        <Text style={styles.modalText2}>Tindakan ini akan membatalkan pesanan yang sedang Anda proses. Anda yakin?</Text>
                        {/* Implement your confirmation logic here */}
                        <View style={{flexDirection: 'row', marginTop: 30, columnGap: 20}}>
                            <TouchableOpacity onPress={toggleModal} style={styles.button1}>
                                <Text style={styles.cancelButtonText}>Tidak</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {router.push('/')}} style={styles.button2}>
                                <Text style={styles.confirmButtonText}>Ya</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
                {/* Button Sudah Bayar*/}
                <TouchableOpacity
                    style={{
                    backgroundColor: '#4A8FE1',
                    width: 150,
                    paddingVertical: 10,
                    borderRadius: 10,
                    }}
                    onPress={() => router.push('/')}
                >
                    <Text style={{fontWeight: 'bold', textAlign: 'center', color: 'white'}}>Sudah Bayar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        backgroundColor: "#F0F0F0",
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button1: {
        backgroundColor: 'white',
        borderColor: '#4A8FE1',
        borderWidth: 2,
        width: 150,
        paddingVertical: 10,
        borderRadius: 10,
    },
    button2: {
        backgroundColor: '#4A8FE1',
        width: 150,
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4A8FE1',
    },
    modal: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        rowGap: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15,
        borderColor: 'rgba(0, 0, 0, 0.1)',
    },
    modalText1: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#3771B6',
    },
    modalText2: {
        fontSize: 14,
        fontWeight: 'regular',
        textAlign: 'center',
    },
    confirmButtonText: {
        fontWeight: 'bold', 
        textAlign: 'center', 
        color: 'white'
    },
    cancelButtonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4A8FE1',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 12,
        maxWidth: '95%',
    },
    step: {
        fontSize: 12,
        maxWidth: '95%',
        // marginTop: 5,
    },
    separator: {
        backgroundColor: '#A9A9A9',
        height: 1,
        width: '100%',
    },
});