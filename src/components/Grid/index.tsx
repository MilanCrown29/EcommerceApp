import React from 'react';
import {
  TouchableOpacity,
  Image,
  View,
  Text,
  SafeAreaView,
  FlatList,
} from 'react-native';
import {baseStyles} from '../../styles';
import {product} from '../constants/product';
import gridStyles from './styles';
import { useNavigation } from '@react-navigation/native';

const Grid = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView>
      <FlatList
        data={product}
        numColumns={2}
        style={gridStyles.grid}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[gridStyles.card, baseStyles.buttonShadow]}
           >
            <Image source={{uri: item.image}} style={gridStyles.image} />
            <View style={gridStyles.cardDesc}>
              <Text style={[gridStyles.cardTitle, baseStyles.headerSm]}>
                {item.title}
              </Text>
              <Text style={[baseStyles.headerSm]}>$ {item.price}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};
export default Grid;
