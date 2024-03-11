import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Wrapper = props => {
  return <View style={{backgroundColor: 'red'}}>{props.children}</View>;
};

const Child = () => {
  return (
    <View>
      <Text>Child component</Text>
    </View>
  );
};

const WrapperExample = () => {
  return (
    <View>
      <Text>WrapperExample</Text>
      <Child />
      <Wrapper>
        <Child />
      </Wrapper>
    </View>
  );
};

export default WrapperExample;
