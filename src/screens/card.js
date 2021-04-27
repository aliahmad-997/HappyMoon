import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

const Card = () => {
  const navigation = useNavigation();

  const array = [
    {
      id: 1,
      name: 'Ali Ahmad',
      designation: 'Project Engineer',
      work: '8 hrs/wk  Mobile  IC  Tech',
      quote: 'An example quote can go here',
      description:
        "Hilary's goal is to get answers to RFIS as quickly as possible. A RFI that takes too long to answer can blow up the construction schedule. She doesn't want to worry about a mountain of follow up, she just needs to confirm with subs or designers.",
    },
    {
      id: 2,
      name: 'Ali Ahmad',
      designation: 'Project Engineer',
      work: '8 hrs/wk  Mobile  IC  Tech',
      quote: 'An example quote can go here',
      description:
        "Hilary's goal is to get answers to RFIS as quickly as possible. A RFI that takes too long to answer can blow up the construction schedule. She doesn't want to worry about a mountain of follow up, she just needs to confirm with subs or designers.",
    },
    {
      id: 3,
      name: 'Ali Ahmad',
      designation: 'Project Engineer',
      work: '8 hrs/wk  Mobile  IC  Tech',
      quote: 'An example quote can go here',
      description:
        "Hilary's goal is to get answers to RFIS as quickly as possible. A RFI that takes too long to answer can blow up the construction schedule. She doesn't want to worry about a mountain of follow up, she just needs to confirm with subs or designers.",
    },
    {
      id: 4,
      name: 'Ali Ahmad',
      designation: 'Project Engineer',
      work: '8 hrs/wk  Mobile  IC  Tech',
      quote: 'An example quote can go here',
      description:
        "Hilary's goal is to get answers to RFIS as quickly as possible. A RFI that takes too long to answer can blow up the construction schedule. She doesn't want to worry about a mountain of follow up, she just needs to confirm with subs or designers.",
    },
    {
      id: 5,
      name: 'Ali Ahmad',
      designation: 'Project Engineer',
      work: '8 hrs/wk  Mobile  IC  Tech',
      quote: 'An example quote can go here',
      description:
        "Hilary's goal is to get answers to RFIS as quickly as possible. A RFI that takes too long to answer can blow up the construction schedule. She doesn't want to worry about a mountain of follow up, she just needs to confirm with subs or designers.",
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        {array.map(item => (
          <TouchableOpacity
            style={styles.Card}
            key={item.id}
            activeOpacity={0.5}
            onPress={() => navigation.navigate('CardInfo', {item: item})}>
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
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Card;
