import React from 'react';
import {View, Text, SafeAreaView, Image, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';
import {Dots, Button} from 'src/components';
import {Images} from 'src/Utils';
const Slide3 = () => {
  let navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <View>
        <Image
          source={Images.onBoarding3}
          style={styles.boarding2}
          resizeMode="contain"
        />
        <Text style={styles.moonTextBlack}>LuckyMoon</Text>
      </View>

      <Text style={styles.customizeText}>Control over your schedule</Text>
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
        onPress={() => navigation.navigate('Slide3')}
      />
      <View style={styles.dotContainer}>
        <Dots active={2} />
      </View>
    </SafeAreaView>
  );
};

export default Slide3;
