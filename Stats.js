import React, { useContext, useState } from "react";
import { View, Dimensions, ActivityIndicator, SafeAreaView } from 'react-native';
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
        setPlasticBottles(parseInt(plasticBottlesCount));
        setGlassBottles(parseInt(glassBottlesCount));
        setMetals(parseInt(metalsCount));
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

    if (plasticBottles != null || glassBottles != null || metals != null) {
        const data = [
            { name: 'Plastic Bottles', population: plasticBottles, color: 'lightgreen', legendFontColor: '#7F7F7F', legendFontSize: 10 },
            { name: 'Glass Bottles', population: glassBottles, color: 'green', legendFontColor: '#7F7F7F', legendFontSize: 10 },
            { name: 'Metals', population: metals, color: 'darkgreen', legendFontColor: '#7F7F7F', legendFontSize: 10 },
        ]

        const chartConfig = {
            backgroundGradientFrom: '#1E2923',
            backgroundGradientTo: '#08130D',
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`
        }

        return (
            <View style={[styles.settingsContainer, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
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