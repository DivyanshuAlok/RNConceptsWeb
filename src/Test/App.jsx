import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";

const App1 = () => {
  const [current, setCurrent] = useState(0);
  const [startFlag, setStartFlag] = useState(false);
  const [log, setLog] = useState(["started"]);

  useEffect(() => {}, [startFlag]);
  const handleStart = () => {
    setStartFlag(true);
    while (startFlag) {
      setInterval(() => {
        setCurrent(current + 1);
        var logMessage = "Started at " + String(current);
        setLog([...log, logMessage]);
      }, 1000);
    }
  };

  const handleStop = () => {
    setStartFlag(false);
    var logMessage = "stopped at " + String(current);
    setLog([...log, logMessage]);
  };

  const handleReset = () => {
    setStartFlag(false);
    setCurrent(100);
    var logMessage = "reset at " + String(current);
    setLog([...log, logMessage]);
  };

  return (
    <View>
      <View>
        <Text>{current}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={handleStart}>
          <Text>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>stop</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>pause</Text>
        </TouchableOpacity>
      </View>
      <View>
        {log.map((x) => {
          return <Text>{x}</Text>;
        })}
      </View>
    </View>
  );
};

export default App1;

const styles = StyleSheet.create({});
