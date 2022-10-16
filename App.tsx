/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {View, TouchableOpacity, Animated, Text} from 'react-native';

import {useAnimatedStyle, useSharedValue} from 'react-native-reanimated';

const App = () => {
  const offset = useSharedValue({x: 0, y: 0});
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value.x}, {translateY: offset.value.y}],
  }));

  const Button = () => (
    <TouchableOpacity
      onPress={() => {
        offset.value = {
          x: Math.random() * 100,
          y: Math.random() * 100,
        };
      }}>
      <View style={{width: 500, height: 500, backgroundColor: 'grey'}} />
    </TouchableOpacity>
  );
  const AnimatedRectangle = () => (
    <Animated.View
      style={[
        animatedStyle,
        {
          width: 100,
          height: 100,
          backgroundColor: 'blue',
        },
      ]}>
      <Text style={{color: 'white'}}>Why I'm not moving?</Text>
    </Animated.View>
  );

  return (
    <View style={{flex: 1}}>
      <Button />
      <AnimatedRectangle />
    </View>
  );
};

export default App;
