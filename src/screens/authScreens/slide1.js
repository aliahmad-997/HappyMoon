import React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Dots, Button} from 'src/components';
import {Images} from 'src/Utils';
const Slide1 = () => {
  let navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Image
          source={Images.onBoarding1}
          style={styles.boarding1}
          resizeMode="contain"
        />
        <Text style={styles.moonText}>LuckyMoon</Text>
      </View>

      <Text style={styles.fastAndEasy}>Fast and Easy</Text>
      <View style={styles.advertisementTextContainer}>
        <Text style={styles.advertisementText}>
          There is no better advertisement
        </Text>
        <Text style={styles.advertisementText}>
          compaign that's low and also successful
        </Text>
        <Text style={styles.advertisementText}>
          at the same time.Great business ideas.
        </Text>
      </View>
      <Button
        buttonText="Next"
        buttonStyle={styles.btnNext}
        buttonTextStyle={styles.btnNextText}
        onPress={() => navigation.navigate('Slide2')}
      />
      <View style={styles.dotContainer}>
        <Dots active={0} />
      </View>
    </SafeAreaView>
  );
};

export default Slide1;
