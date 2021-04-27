import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const CardInfo = ({route}) => {
  const item = route.params.item;

  return (
    <View style={styles.container}>
      <View style={styles.CardInfo}>
        <View style={styles.bar}>
          <Text style={styles.persona}>Persona</Text>
        </View>
        <View style={styles.cardView}>
          <Image
            source={require('../assets/images/pic.jpg')}
            style={styles.image}
          />
          <View style={styles.textView}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.designation}>{item.designation}</Text>
            <Text style={styles.work}>{item.work}</Text>
          </View>
        </View>
        <Text style={styles.quote}>"{item.quote}"</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
};

export default CardInfo;
