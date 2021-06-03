import React, { Fragment } from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';

import styles from './style'

export default function QuotationList(){
    return(

        <Fragment>
            <View style={styles.filters}>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>{}}
                >
                    <Text style={styles.textBttonQyery}>7D</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>{}}
                >
                    <Text style={styles.textBttonQyery}>15D</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>{}}
                >
                    <Text style={styles.textBttonQyery}>1M</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>{}}
                >
                    <Text style={styles.textBttonQyery}>3M</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.buttonQyery}
                    onPress={()=>{}}
                >
                    <Text style={styles.textBttonQyery}>6M</Text>
                </TouchableOpacity>

            </View>

            <ScrollView></ScrollView>
        </Fragment>
    )
}