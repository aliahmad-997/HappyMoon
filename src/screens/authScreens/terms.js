import React from 'react';
import {View, Text, SafeAreaView, StatusBar, ScrollView} from 'react-native';
import styles from './styles';

const Terms = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{flex: 1}}>
        <Text style={styles.termText}>
          Help protect your website and its users with clear and fair website
          terms and conditions. These terms and conditions for a website set out
          key issues such as acceptable use, privacy, cookies, registration and
          passwords, intellectual property, links to other sites, termination
          and disclaimers of responsibility. Terms and conditions are used and
          necessary to protect a website owner from liability of a user relying
          on the information or the goods provided from the site then suffering
          a loss.
        </Text>
        <Text style={styles.termText}>
          Making your own terms and conditions for your website is hard, not
          impossible, to do. It can take a few hours to few days for a person
          with no legal background to make. But worry no more; we are here to
          help you out.
        </Text>
        <Text style={styles.termText}>
          All you need to do is fill up the blank spaces and then you will
          receive an email with your personalized terms and conditions.
        </Text>
        <Text style={styles.termText}>
          Looking for a Privacy Policy? Check out Privacy Policy Generator.
        </Text>
        <Text style={styles.termText}>
          The accuracy of the generated document on this website is not legally
          binding. Use at your own risk.
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Terms;
