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
                fetchRegulation(itemData.data.getItem.material, 'Washington DC');
            } else {
                setItem(null);
                setSuccess(false);
                logQuery();
            }
        } catch (err) {
            setItem(null);
            setSuccess(false);
            console.log(`error fetching items: `, err);
        }
    }

    async function logQuery() {
        try {
            const log = { upc: upc, region: 'Washington DC', success: false }
            console.log('LOG: FAILED REQUEST', log);
            await API.graphql(graphqlOperation(createLogItem, { input: log }))
        } catch (err) {
            console.log('error creating log:', err)
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
            <SafeAreaView style={[styles.container, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
                <View style={styles.contentArea}>
                    <ActivityIndicator size="large" />
                </View>
            </SafeAreaView>
        );
    }

    if (item !== null && Object.keys(item).length !== 0 && regulation !== null && Object.keys(regulation).length !== 0) {
        return (
            <SafeAreaView style={[styles.container, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
                <ScrollView style={styles.contentArea}>
                    <Text style={[settings.largeEnabled ? styles.titleTextLarge : styles.titleText, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                        Results
                    </Text>

                    <RecommendationsCard>
                        <Text style={[settings.largeEnabled ? styles.itemNameLarge : styles.itemName, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                            Name: {item.name}
                        </Text>

                        <Text style={[settings.largeEnabled ? styles.itemNameLarge : styles.itemName, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                            Material: {item.material}
                        </Text>

                        <Text style={[settings.largeEnabled ? styles.itemNameLarge : styles.itemName, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                            Description: {item.description}
                        </Text>

                        <Text style={[settings.largeEnabled ? styles.itemNameLarge : styles.itemName, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                            Region: {regulation.region}
                        </Text>
                    </RecommendationsCard>

                    <Text style={[styles.h1, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                        Recommendations
                    </Text>
                    <RecommendationsCard>
                        <View style={styles.recContainer}>
                            {/* <Image style={styles.recIcon} source={require('./assets/recycle.png')}/> */}
                            <Text style={[styles.recText, settings.darkEnabled ? styles.textDark : styles.textLight]}>{regulation.suggestion}</Text>
                        </View>
                    </RecommendationsCard>

                    <Text style={[styles.h1, , settings.darkEnabled ? styles.textDark : styles.textLight]}>
                        Regulations Citation
                    </Text>

                    <RecommendationsCard>
                        <Text style={[styles.recText, settings.darkEnabled ? styles.textDark : styles.textLight]}>Solid Waste Management Administration, Mayor's List, Sec II, I, c</Text>
                    </RecommendationsCard>
                </ScrollView>
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView style={[styles.container, settings.darkEnabled ? styles.backgroundDark : styles.backgroundLight]}>
            <View>
                <Text style={[settings.largeEnabled ? styles.titleTextLarge : styles.titleText, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                    Oh no!
                </Text>

                <RecommendationsCard>
                    <Text style={[settings.largeEnabled ? styles.itemNameLarge : styles.itemName, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                        No item was found in our database matching that barcode.
                    </Text>
                    <Text style={[settings.largeEnabled ? styles.itemNameLarge : styles.itemName, settings.darkEnabled ? styles.textDark : styles.textLight]}>
                        Don't worry though - we have logged your scan and will add the item soon!
                    </Text>
                </RecommendationsCard>
            </View>
        </SafeAreaView>
    );
};

export default Results;