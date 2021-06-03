import React from 'react';
import {View, Image, Text } from 'react-native';

import styles from './style'

export default function QuotationItens(){
    return(
        <View style={styles.mainContent}>
            
            <View style={styles.contextLeft}>
                
                <View style={styles.boxLogo}>
                    
                    <Image
                        style={styles.logoBitcoin}
                        source={require("../../../img/bitcoin.png")}
                    />
                    
                    <Text style={styles.dayCotation}>07/05/2021</Text>
                
                </View>
            
            </View>

            <View style={styles.contextRigth}>
                
                <Text style={styles.price}>$ 53331.052</Text>
            
            </View>
            
      </View>
    )
}