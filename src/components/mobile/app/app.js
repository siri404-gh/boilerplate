import React from 'react';
import { StyleSheet, ScrollView, Image, View, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
  },
  heading: {
    color: 'black',
    fontSize: 75,
    padding: 20,
  },
  tagLine: {
    fontSize: 15,
  },
});

export default () => (
  <ScrollView style={{ backgroundColor: 'white', flex: 1 }} >
    <View style={styles.container}>
      <Text style={styles.heading}>Bartrr</Text>
      {/* <Image
        source={{ uri: 'https://i.chzbgr.com/full/7345954048/h7E2C65F9/' }}
        style={{ width: 320, height: 180 }}
      /> */}
      <Text style={styles.tagLine}>Your online exchanging platform for Goods & Servicing.</Text>
    </View>
  </ScrollView>
);
