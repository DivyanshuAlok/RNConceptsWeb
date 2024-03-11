//send props from child to parent

import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Child = ({ val, fun }) => {
  fun(val);
  return (
    <View>
      <Text>qawrg</Text>
    </View>
  );
};

const App = () => {
  const logging = (par) => {
    console.log(par);
  };
  return (
    <View>
      <Text>App</Text>
      <Child val={"from partent"} fun={logging} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
