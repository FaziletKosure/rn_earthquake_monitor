import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const GuncelDepremler = ({items}) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          backgroundColor: 'white',
          borderRadius: 25,
          padding: 3,
        }}>
        {' '}
        {items.siddet}
      </Text>
      <View
        style={{
          //   justifyContent: 'space-between',
          alignItems: 'center',
          margin: 5,
          padding: 5,
        }}>
        <Text style={{fontSize: 20}}>{items.yer}</Text>
        <Text>{items.derinlik} km</Text>
        <Text>
          Tarih: {items.tarih} / Saat:{items.saat}
        </Text>
      </View>
    </View>
  );
};

export default GuncelDepremler;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flex: 1,
    borderRadius: 5,
    backgroundColor: '#64d8cb',
    margin: 8,
    padding: 5,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
