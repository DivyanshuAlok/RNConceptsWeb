import React from "react";
import { Button, View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from "react-native-reanimated";

export default function App() {
  const translateX1 = useSharedValue(0);
  const translateX = useSharedValue(0);

  const handlePress1 = () => {
    console.log(translateX1.value);
    translateX1.value = withSpring(translateX1.value + 50); // try to change to 50 and see the diffrence
  };

  const handlePress = () => {
    console.log(translateX.value);
    translateX.value = withSpring(translateX.value + 50);
  };

  // highlight-start
  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: withSpring(translateX.value * 2) }],
  }));
  // highlight-end

  return (
    <>
      {/* highlight-next-line */}
      <Animated.View
        style={[styles.box, { transform: [{ translateX: translateX1 }] }]}
      />
      <View style={styles.container}>
        <Button onPress={handlePress1} title="Click me" />
      </View>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress} title="Click me" />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: "#b58df1",
    borderRadius: 20,
    marginVertical: 50,
  },
});
