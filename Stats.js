import React, { useContext, useState } from "react";
import { View, Dimensions, ActivityIndicator, SafeAreaView, Text } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { useFocusEffect } from '@react-navigation/native';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

import * as SecureStore from 'expo-secure-store';

const Stats = ({ navigation }) => {
    const settings = useContext(AppContext);
    const [plasticBottles, setPlasticBottles] = useState(null);
    const [glassBottles, setGlassBottles] = useState(null);
    const [metals, setMetals] = useState(null);
    const [count, setCount] = useState(null);
    const [paper, setPaper] = useState(null);
    const [plastic, setPlastic] = useState(null);

    async function getStats() {
        let plasticBottlesCount = await SecureStore.getItemAsync("Plastic_Bottle");
        if (plasticBottlesCount === null) {
            plasticBottlesCount = 0;
        }
        let glassBottlesCount = await SecureStore.getItemAsync("Glass_Bottle");
        if (glassBottlesCount === null) {
            glassBottlesCount = 0;
        }
        let metalsCount = await SecureStore.getItemAsync("Metal");
        if (metalsCount === null) {
            metalsCount = 0;
        }
        let plasticCount = await SecureStore.getItemAsync("Plastic");
        if (plasticCount === null) {
            plasticCount = 0;
        }
        paperCount = 0;
        setPlasticBottles(parseInt(plasticBottlesCount));
        setGlassBottles(parseInt(glassBottlesCount));
        setMetals(parseInt(metalsCount));
        setPaper(parseInt(paperCount));
        setPlastic(parseInt(plasticCount) + parseInt(plasticBottlesCount));
        setCount(plastic + glassBottles + metals);
    }

    useFocusEffect(
        React.useCallback(() => {
            getStats();
            return () => {
                
            };
        }, [])
    );

    getStats();

    if (plasticBottles === null || glassBottles === null || metals === null) {
        return (

            <SafeAreaView style={styles.container}>
                <View style={styles.contentArea}>
                    <ActivityIndicator size="large" />
                </View>
            </SafeAreaView>
        );
    }
    var sizeText = 15;
    if (settings.largeEnabled == true){
        sizeText = 20;
    }
    if (plastic != null || glassBottles != null || metals != null) {
        const data = [
            { name: 'Plastic', population: plastic, color: 'lightgreen', legendFontColor: '#7F7F7F', legendFontSize: sizeText },
            { name: 'Glass', population: glassBottles, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: sizeText },
            { name: 'Metals', population: metals, color: 'darkgreen', legendFontColor: '#7F7F7F', legendFontSize: sizeText },
            { name: 'Paper', population: paper, color: 'darkseagreen', legendFontColor: '#7F7F7F', legendFontSize: sizeText },
        ]

        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        }

        return (
            <View style={[styles.settingsContainer, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
                <Text style={[settings.largeEnabled ? styles.titleTextLarge : styles.titleText, settings.darkEnabled ? styles.textDark : styles.textLight]}>My Progress</Text>
                <Text style={[settings.largeEnabled ? styles.h2Large : styles.h2, settings.darkEnabled ? styles.textDark : styles.textLight]}>Total Recycled Items: {count}</Text>

                <PieChart
                    data={data}
                    width={Dimensions.get('window').width}
                    height={220}
                    chartConfig={chartConfig}
                    accessor="population"
                    backgroundColor="transparent"
                    paddingLeft="15"
                />
            </View>
        );
    }
};

export default Stats;