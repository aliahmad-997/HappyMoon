import React, {useState} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import Tab from './tab';

const Width = Dimensions.get('window').width;
const TabBar = ({navigation, state}) => {
  const [selected, setSelected] = useState('Home');
  const {routes} = state;

  const renderColor = currentTab =>
    currentTab === selected ? '#FD1B1B' : '#A5A5A5';

  const handlePress = (activeTab, index) => {
    if (state.index !== index) {
      setSelected(activeTab);
      navigation.navigate(activeTab);
    }
  };

  const renderFont = currentTab =>
    currentTab === selected ? 'bold' : 'normal';

  return (
    <View>
      <View style={styles.container}>
        {routes.map((route, index) => (
          <Tab
            tab={route}
            icon={route.params.img}
            onPress={() => handlePress(route.name, index)}
            color={renderColor(route.name)}
            key={route.key}
            weight={renderFont(route.name)}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  //   wrapper: {
  //     position: 'absolute',
  //     bottom: 10,
  //     width: Width,
  //     // alignItems: 'center',
  //     // justifyContent: 'center',
  //   },
  container: {
    flexDirection: 'row',
    // justifyContent: 'center',
    backgroundColor: 'white',
    width: Width,
    justifyContent: 'center',
    height: 85,
    alignItems: 'center',
    // position: 'absolute',
    bottom: 0,
  },
});
export default TabBar;
