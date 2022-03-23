import React, { useState, useEffect, useContext } from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, Text, View, SafeAreaView } from "react-native";
import RecommendationsCard from "./RecommendationsCard";

// Amplify
import { API, graphqlOperation } from 'aws-amplify';
import { createLogItem } from './src/graphql/mutations';
import * as queries from './src/graphql/queries';

// Utility
import AppContext from './AppContext';
import styles from './Styles';

import * as SecureStore from 'expo-secure-store';

const Results = ({ navigation, route }) => {
    const settings = useContext(AppContext);
    const [item, setItem] = useState([]);
    const [regulation, setRegulation] = useState([]);
    const { upc } = route.params;
    const [success, setSuccess] = useState(true);

    async function fetchItem(data) {
        try {
            const itemData = await API.graphql({ query: queries.getItem, variables: { id: data } });
            if (itemData.data.getItem !== null) {
                setItem(itemData.data.getItem);
                storeScan(itemData.data.getItem);
                fetchRegulation(itemData.data.getItem.material, 'Washington DC');
                logSuccessQuery();
            } else {
                setItem(null);
                setSuccess(false);
                logFailedQuery();
            }
        } catch (err) {
            setItem(null);
            setSuccess(false);
            console.log(`error fetching items: `, err);
        }
    }

    async function logSuccessQuery() {
        try {
            const log = { upc: upc, region: 'Washington DC', success: true }
            console.log('LOG: SUCCESSFUL REQUEST', log);
            await API.graphql(graphqlOperation(createLogItem, { input: log }))
        } catch (err) {
            console.log('error creating log:', err)
        }
    }

    async function logFailedQuery() {
        try {
            const log = { upc: upc, region: 'Washington DC', success: false }
            console.log('LOG: FAILED REQUEST', log);
            await API.graphql(graphqlOperation(createLogItem, { input: log }))
        } catch (err) {
            console.log('error creating log:', err)
        }
    }

    async function storeScan(item) {
        key = item.material;
        key = key.replace(/ /g,"_");
        let count = await SecureStore.getItemAsync(key);
        console.log(key);
        if (count === null) {
            count = 0;
            await SecureStore.setItemAsync(key, `${parseInt(count) + 1}`);
            let newCount = await SecureStore.getItemAsync(key);
            console.log(newCount);
        } else {
            await SecureStore.setItemAsync(key, `${parseInt(count) + 1}`);
            let newCount = await SecureStore.getItemAsync(key);
            console.log(newCount);
        }
    }

    async function fetchRegulation(material, region) {
        try {
            const regulationData = await API.graphql({
                query: queries.listRegulations,
                variables: {
                    filter: {
                        and: [
                            {
                                material: {
                                    eq: `${material}`
                                }
                            },
                            {
                                region: {
                                    eq: `${region}`
                                }
                            }
                        ]
                    }
                }
            });
            if (regulationData.data.listRegulations !== null) {
                setRegulation(regulationData.data.listRegulations.items[0]);
            } else {
                setRegulation(null);
                setSuccess(false);
            }
        } catch (err) {
            setRegulation(null);
            setSuccess(false);
            console.log(`error fetching regulations: `, err);
        }
    }

    useEffect(() => {
        fetchItem(upc);
    }, []);

    if ((item === null || regulation === null || Object.keys(regulation).length === 0 || Object.keys(regulation).length === 0) && success === true) {
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.contentArea}>
                    <ActivityIndicator size="large" />
                </View>
            </SafeAreaView>
        );
    }

    if (item !== null && Object.keys(item).length !== 0 && regulation !== null && Object.keys(regulation).length !== 0) {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.contentArea}>
                    <Text style={settings.largeEnabled ? styles.titleTextLarge : styles.titleText}>
                        Results
                    </Text>

                    <RecommendationsCard>
                        <Text style={settings.largeEnabled ? styles.itemNameLarge : styles.itemName}>
                            Name: {item.name}
                        </Text>

                        <Text style={settings.largeEnabled ? styles.itemNameLarge : styles.itemName}>
                            Material: {item.material}
                        </Text>

                        <Text style={settings.largeEnabled ? styles.itemNameLarge : styles.itemName}>
                            Description: {item.description}
                        </Text>

                        <Text style={settings.largeEnabled ? styles.itemNameLarge : styles.itemName}>
                            Region: {regulation.region}
                        </Text>
                    </RecommendationsCard>

                    <Text style={styles.h1}>
                        Recommendations
                    </Text>
                    <RecommendationsCard>
                        <View style={styles.recContainer}>
                            {/* <Image style={styles.recIcon} source={require('./assets/recycle.png')}/> */}
                            <Text style={styles.recText}>{regulation.suggestion}</Text>
                        </View>
                    </RecommendationsCard>

                    <Text style={styles.h1}>
                        Regulations Citation
                    </Text>

                    <RecommendationsCard>
                        <Text>Solid Waste Management Administration, Mayor's List, Sec II, I, c</Text>
                    </RecommendationsCard>
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={settings.largeEnabled ? styles.titleTextLarge : styles.titleText}>
                    Oh no!
                </Text>

                <RecommendationsCard>
                    <Text style={settings.largeEnabled ? styles.itemNameLarge : styles.itemName}>
                        No item was found in our database matching that barcode.
                    </Text>
                    <Text style={settings.largeEnabled ? styles.itemNameLarge : styles.itemName}>
                        Don't worry though - we have logged your scan and will add the item soon!
                    </Text>
                </RecommendationsCard>
            </View>
        </SafeAreaView>
    );
};

export default Results;