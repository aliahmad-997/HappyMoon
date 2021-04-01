import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './styles';
import {Button} from 'src/components';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {useNavigation} from '@react-navigation/native';

const VerificationCode = () => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  let navigation = useNavigation();
  const CELL_COUNT = 5;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.verificationText}>Verification Code</Text>
      <Text style={styles.enterText}>
        Please enter the verification code sent to joh****@gmail.com
      </Text>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          buttonText="Done"
          buttonStyle={styles.loginContainer}
          buttonTextStyle={styles.loginbtnText}
          onPress={() => navigation.navigate('NewPassword')}
        />
      </View>
    </SafeAreaView>
  );
};

export default VerificationCode;
