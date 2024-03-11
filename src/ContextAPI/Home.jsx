import { StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { useState } from "react";
import { MyContext } from "./MyContext";
import About from "./About";

const App = () => {
  const [theme, setTheme] = useState(useColorScheme());
  return (
    <MyContext.Provider value={{ theme, setTheme }}>
      <About />
    </MyContext.Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
