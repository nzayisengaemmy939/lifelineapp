import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";

const useLocation = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [longitude, setLongitude] = useState<number | null>(null);
  const [latitude, setLatitude] = useState<number | null>(null);
  const [address, setAddress] = useState<string>("");

  const getUserLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to location was not granted");
      return;
    }

    let { coords } = await Location.getCurrentPositionAsync();
    if (coords) {
      const { latitude, longitude } = coords;
      setLatitude(latitude);
      setLongitude(longitude);

      let response = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (response && response.length > 0) {
        const location = response[0];
        const formattedAddress = location.formattedAddress ||`${location.streetNumber}  ${location.district } ${location.subregion } ${location.street}, ${location.city}, ${location.country}`;
        setAddress(formattedAddress);
      }
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  return { latitude, longitude, address, errorMsg };
};

export default useLocation;

const styles = StyleSheet.create({});