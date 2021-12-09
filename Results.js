import React, { useState, useEffect } from 'react';
import { ScrollView, ActivityIndicator, StyleSheet, Text, Image, View, SafeAreaView } from "react-native";
import RecommendationsCard from "./RecommendationsCard";

import { API, graphqlOperation } from 'aws-amplify';
import { createLogItem } from './src/graphql/mutations';
import * as queries from './src/graphql/queries';

const Results = ({ navigation, route }) => {
    const [item, setItem] = useState([]);
    const [regulation, setRegulation] = useState([]);
    const { upc } = route.params;
    const [success, setSuccess] = useState(true);

    async function fetchItem(data) {
        try {
            const itemData = await API.graphql({ query: queries.getItem, variables: { id: data }});
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
                            {material: {
                                eq: `${material}`
                            }},
                            {region: {
                                eq: `${region}`
                            }}
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
                    <ActivityIndicator size="large"/>
                </View>
            </SafeAreaView>
        );
    }
    
    if (item !== null && Object.keys(item).length !== 0 && regulation !== null && Object.keys(regulation).length !== 0) {
        return (
            <SafeAreaView style={styles.container}>  
                <ScrollView style={styles.contentArea}>
                    <Text style={styles.titleText}>
                        Results
                    </Text>
    
                    <RecommendationsCard>
                        <Text style={styles.itemName}>
                            Name: {item.name}
                        </Text>
    
                        <Text style={styles.itemName}>
                            Material: {item.material}
                        </Text>
    
                        <Text style={styles.itemName}>
                            Description: {item.description}
                        </Text>
    
                        <Text style={styles.itemName}>
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
                <Text style={styles.titleText}>
                    Oh no!
                </Text>

                <RecommendationsCard>
                    <Text style={styles.itemName}>
                        No item was found in our database matching that barcode.
                    </Text>
                    <Text style={styles.itemName}>
                        Don't worry though - we have logged your scan and will add the item soon!
                    </Text>
                </RecommendationsCard>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F4F9FA",
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        fontSize: 40,
        fontWeight: "bold"
    },
    contentArea: {
        marginTop: 20,
    },
    imageContainer: {
        width: 325,
        height: 120,
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    itemName: {
        marginVertical: 10,
        fontWeight: "bold",
        color: "#2F2F2F",
        fontSize: 24,
        // fontFamily: "arial",
        fontWeight: "200",
    },
    x: {
        position: "absolute",
        width: 30,
        height: 30,
        right: 10,
        top: 25,
    },
    h1: {
        marginTop: 20,

        fontSize: 28,
        color: "#2F2F2F",
        // fontFamily: "arial",
        fontWeight: "500",
    },
    h2: {
        marginTop: 20,

        fontSize: 18,
        color: "#2F2F2F",
        // fontFamily: "arial",
        fontWeight: "500",
    },
    recContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
    },
    recIcon: {
        width: 30,
        height: 30,
    },
    recText: {
        marginTop: 5,
        marginLeft: 12,
        fontSize: 16,
    },
});

export default Results;