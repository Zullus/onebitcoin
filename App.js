import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from 'react-native';

import CurrentPrice from './src/components/CurrentPrice';
import HistoryGraphic from './src/components/HistoryGraphic';
import QuotationList from './src/components/QuotationList';
import QuotationItens from './src/components/QuotationList/QuotationItens';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
         backgroundColor="#f50d41"
         barStyle="light-content"
         style="auto" 
         />
         <CurrentPrice />

         <HistoryGraphic />

         <QuotationList />

         <QuotationItens/>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    paddingTop: Platform.OS === 'android' ? 40: 0,
  },
});
