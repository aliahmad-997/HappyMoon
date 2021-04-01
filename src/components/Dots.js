import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Dots = ({active}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <View
        style={active === 0 ? styles.firstActiveDot : styles.firstDot}></View>
      <View
        style={active === 1 ? styles.secondActiveDot : styles.secondDot}></View>
      <View
        style={active === 2 ? styles.thirdActiveDot : styles.thirdDot}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  firstDot: {
    backgroundColor: '#A5A5A5',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  secondDot: {
    backgroundColor: '#A5A5A5',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  thirdDot: {
    backgroundColor: '#A5A5A5',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  firstActiveDot: {
    backgroundColor: '#FFCB3B',
    height: 10,
    width: 10,
    borderRadius: 5,
  },
  secondActiveDot: {
    backgroundColor: '#FFCB3B',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
  thirdActiveDot: {
    backgroundColor: '#FFCB3B',
    height: 10,
    width: 10,
    borderRadius: 5,
    marginLeft: 5,
  },
});

export default Dots;
