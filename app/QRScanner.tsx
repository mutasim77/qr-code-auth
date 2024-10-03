import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useRouter } from 'expo-router';
import axios from 'axios';

const API_URL = 'http://91.243.71.50';

export default function QRScanner() {
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        requestPermission();
    }, []);

    const handleBarCodeScanned = async ({ data }: { data: string }) => {
        setScanned(true);
        const cardId = data.split('/').pop();
        try {
            const response = await axios.get(`${API_URL}/api/cards/${cardId}`);
            console.log('Here we go: ', response.data);
            if (response.status === 200) {
                router.push('/SuccessPage');
            } else {
                router.push('/ErrorPage');
            }
        } catch (error) {
            Alert.alert('Error', `Failed to validate card: ${error}`);
            router.push('/ErrorPage');
        }
    }

    if (!permission) {
        return <View />
    }

    if (!permission.granted) {
        return (
            <View className="flex-1 justify-center items-center">
                <Text className="text-lg mb-4">We need your permission to use the camera</Text>
                <Button onPress={requestPermission} title="Grant Permission" />
            </View>
        )
    }

    return (
        <View className="flex-1 justify-center items-center">
            <CameraView
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                facing={'back'}
                barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            />
            {scanned && (
                <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />
            )}
        </View>
    );
}