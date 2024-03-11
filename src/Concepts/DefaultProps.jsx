import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Comp1 = ({ prop1 = "Default", prop2 = "Paramerters" }) => {
  return (
    <View>
      <Text>{prop1}</Text>
      <Text>{prop2}</Text>
    </View>
  );
};

const Comp2 = ({ prop1, prop2 }) => {
  return (
    <View>
      <Text>{prop1}</Text>
      <Text>{prop2}</Text>
    </View>
  );
};
Comp2.defaultProps = {
  prop1: "Default",
  prop2: "Props",
};

const App = () => {
  return (
    <View>
      <Text>App</Text>
      <Comp1 prop1="Passed" prop2="Props" />
      <Comp1 />
      <Comp2 />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({});
