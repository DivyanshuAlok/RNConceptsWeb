import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import { MyContext } from "./MyContext";

const About = () => {
  const { theme } = useContext(MyContext);
  return (
    <View>
      <Text>About</Text>
      <Text>Current theme : {theme}</Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
