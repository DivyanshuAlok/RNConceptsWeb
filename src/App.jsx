import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useEffect } from "react";

var dict = {
  10: ["A", "B", "C", "D", "I"],
  11: ["E", "F", "G", "H"],
};

const App = () => {
  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      {Object.keys(dict).map((x) => (
        <View style={{ justifyContent: "flex-start" }}>
          {dict[x].map((y) => (
            <View
              style={{
                borderWidth: 1,
                width: 100,
                height: 50,
                justifyContent: "center",
              }}
            >
              <Text style={{ alignText: "center" }}>{y}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
});
