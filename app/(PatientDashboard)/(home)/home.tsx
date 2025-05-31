import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, Modal, TextInput, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import axios from 'axios';
import useLocation from '@/hooks/UseLocation';
import Button from '@/components/ui/Button';
import { useRouter } from 'expo-router';

export default function HomeScreen({ navigation }: any) {
  const { latitude, longitude, address, errorMsg } = useLocation();

  const [currentLocation, setCurrentLocation] = useState<{
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (latitude && longitude) {
      setCurrentLocation({
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
      setLocationError(null);
    } else if (errorMsg) {
      setLocationError(errorMsg);
    }
  }, [latitude, longitude, errorMsg]);

  const handleSendAlert = async () => {
    if (locationError) {
      Alert.alert('Location Error', locationError);
      return;
    }

    setModalVisible(true);
  };

  const confirmSendAlert = async () => {
    setModalVisible(false);
    setIsLoading(true);
    try {
      const alertData = {
        title: "Accident Alert",
        description: address,
        location: address,
        latitude: currentLocation?.latitude || 0,
        longitude: currentLocation?.longitude || 0,
        phoneNumber: userPhone || "----",
        email: userEmail || "----",
        status: "NEW",
      };

      const response = await axios.post(
        'https://emmy-acc-be.onrender.com/api/accident-alert',
        alertData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          timeout: 10000,
        }
      );
console.log(response.status)
      if (response.status === 200 || response.status === 201) {
        router.push('/AlertSentScreen');
      } else {
        throw new Error(`Unexpected server response with status ${response.status}`);
      }
    } catch (error) {
      let errorMessage = 'Failed to send alert';
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          errorMessage = 'Request timed out. Please check your connection.';
        } else if (error.response) {
          errorMessage = `Server error: ${error.response.status}`;
        } else if (error.request) {
          errorMessage = 'No response from server. Check your network.';
        }
      }
      Alert.alert('Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View className="flex-1 p-6 items-center justify-between bg-gray-100 top-20 min-h-screen">
      <View className="items-center mb-6">
        <Text className="text-xl font-bold text-gray-800 mb-2">Welcome to LIFELINE ALERT SYSTEM</Text>
        <Text className="text-lg text-gray-600 text-center">
          Your safety is our priority. Quickly send alerts in case of emergencies.
        </Text>
      </View>
      {currentLocation ? (
        <MapView
          style={styles.map}
          region={currentLocation}
          showsUserLocation={true}
          followsUserLocation={true}
          showsMyLocationButton={true}
          loadingEnabled={true}
        >
          <Marker
            coordinate={{
              latitude: currentLocation.latitude,
              longitude: currentLocation.longitude,
            }}
            title="Your Location"
            description={address}
          />
        </MapView>
      ) : (
        <Text className="text-center text-gray-500 mt-4">Loading map...</Text>
      )}

      <View className="items-center  w-full">
        <Text className="text-xl font-bold text-gray-800">Emergency Alert</Text>
        <Text className="text-base text-gray-600 mt-2 text-center">
          {locationError || 'Your current location is being tracked'}
        </Text>
        <Text className="text-sm text-gray-500 mt-2 text-center" numberOfLines={2}>
          {address}
        </Text>
        {currentLocation && (
          <Text className="text-xs text-gray-400 mt-1">
            Coordinates: {currentLocation.latitude.toFixed(6)}, {currentLocation.longitude.toFixed(6)}
          </Text>
        )}
      </View>

      <Button
        text={isLoading ? 'SENDING ALERT...' : 'SEND ALERT'}
        onPress={handleSendAlert}
        disabled={isLoading || !!locationError || !currentLocation}
        className={`px-6 py-3 rounded-full shadow-md text-white font-semibold w-full mb-20`}
      />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Optional Contact Information</Text>
            <TextInput
              style={styles.input}
              placeholder="Phone Number (optional)"
              keyboardType="phone-pad"
              value={userPhone}
              onChangeText={setUserPhone}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.confirmButton]}
                className='rounded-full'
                onPress={confirmSendAlert}
              >
                <Text style={styles.buttonText}>Send Alert</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );

}

const styles = StyleSheet.create({
  map: {
    width: '100%',
    height: 400,
    marginVertical: 15,
    borderRadius: 15,
    overflow: 'hidden',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#ccc',
  },
  confirmButton: {
    backgroundColor: '#cdbd8e',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});