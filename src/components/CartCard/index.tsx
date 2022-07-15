import * as React from 'react';
import {View, Image, Text, FlatList, SafeAreaView} from 'react-native';

import {baseStyles} from '../../styles';
import {product} from '../constants/product';
import cartCardStyles from './styles';

const CartCard = ({item}) => {
  return (
    <SafeAreaView>
      <FlatList
        data={product}
        renderItem={({item}) => (
          <View style={[cartCardStyles.card, baseStyles.cardShadow]}>
            <Image source={{uri: item.image}} style={cartCardStyles.image} />
            <View style={cartCardStyles.desc}>
              <Text style={[cartCardStyles.title, baseStyles.headerSm]}>
                Product:{item.title}
              </Text>
              <Text style={[baseStyles.subHeader, cartCardStyles.qty]}>
                QTY:{}
              </Text>
              <Text>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};
export default CartCard;
