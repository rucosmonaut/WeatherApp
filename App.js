import React, { Component } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import * as Location from "expo-location";
import axios from 'axios'

import Loading from "./Loading";
import Weather from "./Weather";

const API_KEY = '7bc061ba1b2adbdae03c2214aee932b0';

export default class extends Component {

  state = {
    isLoading: true
  }

  getLocation = async () => {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync({});
      this.getWeather(latitude, longitude);
    } catch (error) {
      Alert.alert('Не могу определить местоположение', "Очень грустно =/")
    }  
  };

  getWeather = async (latitude, longitude) =>{
    try {
      const {data: {main: {temp}, weather}} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
      this.setState({isLoading: false, temp: temp, condition: weather[0].main});
      console.log(weather[0].main);
    } catch (error) {
      console.log(error);
      Alert.alert('Не получилось найти данные', "Очень грустно =/");
    }
  }

  componentDidMount() {
    this.getLocation();
  }

  render() {
    const {isLoading, temp, condition} = this.state
    return(
      isLoading ? <Loading/> : <Weather temp={Math.round(temp)} condition={condition}/>
    );
  }
}
 