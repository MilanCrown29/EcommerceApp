import React from 'react';
import {View, Text, ScrollView, FlatList, Image} from 'react-native';
import Button from '../../components/Button';
import {baseStyles, colors} from '../../styles';
import productStyles from './styles';
import {product} from '../../components/constants/product';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Product = ({item}) => {
  return (
    <>
    <Button
     style={productStyles.backButton}
     size={40}
     iconName="arrow-back-outline"
     background={colors.white}
     onPress={()=>{}}/>
    <ScrollView>
      <FlatList
        data={product}
        renderItem={({item}) => (
          <View>
            <View style={productStyles.rightButton}>
              <Button
                style={productStyles.share}
                size={50}
                iconName="share-social-outline"
                background={colors.yellow}
              />
            <Button
                style={productStyles.share}
                size={50}
                iconName="heart-outline"
                background={colors.yellow}
              />
            </View>
            <View style={[baseStyles.container]}>
              <Image source={{uri: item.image}} style={productStyles.image} />
              <Text style={[baseStyles.headerLg, productStyles.title]}>
                {item.title}
              </Text>
              <Text style={[baseStyles.headerLg, productStyles.price]}>
                {item.price}
              </Text>
              <Button title="ADD TO CART" />
              <View style={baseStyles.line} />
              <Text style={[baseStyles.headerLg, productStyles.description]}>
                {item.description}
              </Text>
            </View>
          </View>
        )}
      />
    </ScrollView>
    </>
  );
};
export default Product;
