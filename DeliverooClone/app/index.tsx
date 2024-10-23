import { View, ScrollView, Text, StyleSheet } from 'react-native'
import React from 'react'
import Categories from '../layout/Categories'

const Page = () => {
  return (
    <View>
      <ScrollView>
        <Categories/>
        <Text style={styles.header}>
          Top picks in your neighborhood
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    fontSize: 18,
    //fontWeight: "bold",
    marginBottom: 16,
    paddingHorizontal: 16,
  },
});

export default Page