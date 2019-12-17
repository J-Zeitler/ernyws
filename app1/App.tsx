import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Comp} from 'common'

export default function App() {
  return (
    <View style={styles.container}>
      <Comp greeting="hello"></Comp>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
