import React from 'react';
import {Image} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const Width = Dimensions.get('window').width;
const Tab = ({color, icon, tab, onPress, weight}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      {icon}
      <Text style={{color: color, fontSize: 12, fontWeight: weight}}>
        {tab.name}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    alignItems: 'center',
    // alignItems: 'stretch',
  },
});
export default Tab;
