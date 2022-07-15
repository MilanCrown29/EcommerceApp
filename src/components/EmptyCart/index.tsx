import React from 'react';
import {View, Text, SafeAreaView, ScrollView, Image, Alert} from 'react-native';
import {baseStyles} from '../../styles';
import Button from '../Button';
import emptyCartStyles from './styles';

const EmptyCart = () => {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={[emptyCartStyles.heading]}>
        <Image
          style={emptyCartStyles.image}
          source={require('../../assets/images/images.png')}
        />
        <Text style={[baseStyles.headerLg, emptyCartStyles.heading]}>
          Your cart is empty:
        </Text>
        <Button
          style={emptyCartStyles.button}
          title="Go Back Home"
          onPress={() => Alert.alert('Goes back')}></Button>
      </ScrollView>
    </SafeAreaView>
  );
};
export default EmptyCart;
