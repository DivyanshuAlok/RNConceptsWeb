import { StyleSheet, Text, View, Appearance } from "react-native";
import React, { useEffect } from "react";

const ReduxHome = () => {
  useEffect(() => {
    //Appearance.setColorScheme("dark");
  }, []);

  return (
    <View>
      <Text>ReduxHome</Text>
    </View>
  );
};

export default ReduxHome;

const styles = StyleSheet.create({});
