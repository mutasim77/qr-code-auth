import React from 'react';
import { View, Text } from 'react-native';

export default function SuccessPage() {
    return (
        <View className="flex-1 justify-center items-center bg-green-100">
            <Text className="text-3xl font-bold text-green-700">Success!</Text>
            <Text className="text-xl mt-4 text-green-600">You have successfully registered.</Text>
        </View>
    )
}