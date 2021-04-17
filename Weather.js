import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Rain: {
    iconName: "rainy",
    gradient: ["#B993D6", "#8CA6DB"],
    title: "На улице идет дождик!",
    subTitle: "Прихвати с собой дождик "
  },
  Snow: {
    iconName: "snow",
    gradient: ["#2b5876", "#4e4376"],
    title: "Ух... снег идёт!",
    subTitle: "Оденься по теплее и слепи снеговика)"
  },
  Drizzle: {
    iconName: "rainy",
    gradient: ["#FF512F", "##F09819"],
    title: "На улице моросит идет дождик!",
    subTitle: "Можно погулять с девушкой)"
  },
  Atmosphere: {
    iconName: "cloud-outline",
    gradient: ["#003973", "#E5E5BE"],
    title: "Погода хорошая!",
    subTitle: "Можно провести время с пользой"
  },
  Clouds: {
    iconName: "cloud-outline",
    gradient: ["#1A2980", "#26D0CE"],
    title: "На улице облачно!",
    subTitle: "Облачно возможны осадки в виде фрикаделек)"
  },
  Mist: {
    iconName: "eye",
    gradient: ["#E55D87", "#5FC3E4"],
    title: "Туман",
    subTitle: "Время чтобы сделать красивые фото города и природы"
  },
  Smoke: {
    iconName: "eye",
    gradient: ["#1F1C2C", "#928DAB"],
    title: "Дым окутал город",
    subTitle: "Стоит одеть респиратор и защитить свои легкие"
  },
  Haze: {
    iconName: "nuclear",
    gradient: ["#DD5E89", "#F7BB97"],
    title: "Легкий Туман",
    subTitle: "Попробуй взять кусочек тумана в свои руки"
  },
  Dust: {
    iconName: "nuclear",
    gradient: ["#1D2B64", "#F8CDDA"],
    title: "На улицах пыльно",
    subTitle: "Стоит дышать аккуратно"
  },
  Ash: {
    iconName: "nuclear",
    gradient: ["#FF512F", "#DD2476"],
    title: "Погода не очень хорошая!",
    subTitle: "Стоит подумать, чтобы остаться дома"
  },
  Squall: {
    iconName: "rainy",
    gradient: ["#f2709c", "#ff9472"],
    title: "Очень сильный дождь!",
    subTitle: "лучше переседеть дома"
  },
  Tornado: {
    iconName: "thunderstorm-outline",
    gradient: ["#AA076B", "#61045F"],
    title: "Буйный торнада!",
    subTitle: "Маленьким детям не стоит выходить на улицу"
  },
  Clear: {
    iconName: "sunny-outline",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "Погода ясная!",
    subTitle: "Можно сходить на улицу погулять :)"
  },
  Thunderstorm: {
    iconName: "thunderstorm-outline",
    gradient: ["#6190E8", "#A7BFE8"],
    title: "Внимание шторм!",
    subTitle: "Выходить на улицу лучше не стоит("
  },
};

export default function Weather({ temp, condition }) {
  const { tempText, container, halfContainer, title, subTitle, textContainet } = styles;
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={container}
    >
      <StatusBar barStyle="light-content" />
      <View style={halfContainer}>
        <Ionicons
          name={weatherOptions[condition].iconName}
          size={96}
          color="white"
        />
        <Text style={tempText}>{temp}°</Text>
      </View>
      <View style={{...halfContainer, ...textContainet}}>
          <Text style={title}>{weatherOptions[condition].title}</Text>
          <Text style={subTitle}>{weatherOptions[condition].subTitle}</Text>
      </View>
    </LinearGradient>
  );
}

const WeatherCondition = [
  "Thunderstorm",
  "Drizzle",
  "Rain",
  "Snow",
  "Atmosphere",
  "Clear",
  "Clouds",
  "Mist",
  "Smoke",
  "Haze",
  "Dust",
  "Fog",
  "Sand",
  "Ash",
  "Squall",
  "Tornado",
];

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf(WeatherCondition).isRequired,
};

const styles = StyleSheet.create({
  tempText: {
    fontSize: 42,
    color: "white",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 44,
    color: "white",
    fontWeight: "300",
    marginBottom: 10
  },
  subTitle: {
    fontSize: 24,
    color: "white",
    fontWeight: "600"
  },
  textContainet:{
      paddingHorizontal: 20,
      alignItems: "flex-start"
  }
});
